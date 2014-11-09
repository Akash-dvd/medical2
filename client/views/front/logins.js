Template.logins.rendered = function ( ) { 
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
}
AutoForm.hooks({
	plogin_form : {
		onSuccess: function(operation, result, template) {
			console.log("patient_login_success");
			Session.set("patient_id", result._id);
			Session.set("page", 'patient');
			Router.go('dsearch');
		}
	},
	dlogin_form : {
		onSuccess: function(operation, result, template) {
			Session.set("docId", result._id);
			Session.set("page", 'doctor');
			Router.go('index');
		}
	},
	dsearch_login_form: {
		endSubmit: function(operation, result, template) {
			console.log("nopatient_login_success2");
			//Session.set("patient_id", result._id);
			Session.set("page", 'patient');
			Router.go('dsearch');
		},
	},
});

