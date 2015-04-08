Template.Logins.rendered = function ( ) { 
	
	//   BIG SHOT THING
	
	Meteor.logout();
	Session.set('role', '')
	
	
	$("video").prop('muted', true); 
	$("video").hover(
	function(e) {
		e.preventDefault();
		$("video").prop('muted', false); 
		$(".video-hover").css({ opacity: 1.0 });
		$(".image-hover").css({ opacity: 0.0 });
	},
	function(e) {
		e.preventDefault();
		$("video").prop('muted', true); 
		$(".video-hover").css({ opacity: 0.2 });
		$(".image-hover").css({ opacity: 1 });
	});
	$(".image-hover").hover(
	function(e) {
		e.preventDefault();
		$("video").prop('muted', false); 
		$(".video-hover").css({ opacity: 1.0 });
		$(".image-hover").css({ opacity: 0.0 });
	});
};
Template.Logins.onCreated(function () {
  // Use this.subscribe inside onCreated callback
  
  //this.subscribe('loggeddoctor');
  this.subscribe('patients');
});

Template.Logins.events ({ 
	'click li a': function (event) {
		event.preventDefault();
		//event.stopPropagation();
		if (event.currentTarget.text == "Physician")
		{
			Session.set('role','phy');
		}
		else {
			Session.set('role','pat');
		}
	}
});


AutoForm.hooks({
	plogin_form : {
		onSuccess: function(operation, result, template) {

		},
			onError : function (operation,error,template) {
			console.log(error.error);

			Patient.simpleSchema().namedContext("plogin_form").addInvalidKeys([{name: "password", type: "wrongPassword", value: "test"}]);
			
		}
	
	},
	

	pregister_form : {
		onSuccess: function(operation, result, template) {
			$('#exampleModal').modal();
			
		},
		onError : function (operation,error,template) {
			console.log(error);
			Patient.simpleSchema().namedContext("pregister_form").addInvalidKeys([{name: "username", type: "notUnique", value: error.message}]);
			
		},
	},
	dregister_form : {
		onSubmit: function(insertDoc, updateDoc, currentDoc) {
			this.event.preventDefault();
			//console.log(this);
			//Meteor.loginWithGoogle();
			self=this;
			insertDoc.roles={"__global_roles__" :[Session.get("role")]};
			profile={firstName:insertDoc.firstName,lastName:insertDoc.lastName,gender:insertDoc.gender,birthday:insertDoc.birthday,roles:insertDoc.roles};
			options={email:insertDoc.email,password:insertDoc.password,profile:profile};
			console.log(options);
			Accounts.createUser(options,function(error){
				if(error){
					self.done(error);
				}
				else {
					self.done();
				}
			});
		},
		onError: function(formType, error) {
			console.log(error);
		},
		onSuccess: function(formType, result) {
		}
	},
	dlogin_form : {
		onSubmit: function(insertDoc, updateDoc, currentDoc) {
			this.event.preventDefault();
			//console.log(this);
			//Meteor.loginWithGoogle();
			self=this;
			Meteor.loginWithPassword(insertDoc.email,insertDoc.password,function(error){
				if(error){
					self.done(error);
				}
				else if (_.contains(Roles.getRolesForUser(Meteor.userId()) , Session.get("role")))
				{
					self.done();
				}
				else {
					console.log("Wrong Selection Wrong Selection Wrong Selection")
					self.done(new Meteor.Error("Wrong Selection","Wrong Selection"));
					//self.done(new Error("Wrong Selection"));
				}
			});
		},
		onError: function(formType, error) {
			console.log(error.reason);
		},
		onSuccess: function(formType, result) {
		},
	},
});

