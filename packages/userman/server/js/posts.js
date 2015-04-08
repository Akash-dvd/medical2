//Notifications = new Meteor.Collection('notifications');
Images = new Meteor.Collection('images');
Blood_Requests = new Meteor.Collection('blood_requests');
Health_Profile = new Meteor.Collection('health_profile');
Fake_User = new Meteor.Collection('fake_user');
Events = new Meteor.Collection('events');
Reminders = new Meteor.Collection('reminders');
/* Cases = new Meteor.Collection('cases');
Appointments = new Meteor.Collection('appointments');
Users = new Meteor.Collection('users');
Doctor = new Meteor.Collection('doctor');
Workplace = new Meteor.Collection('workplace'); */
Wk_Desc = new Meteor.Collection('wk_desc');
Random= Package['random'].Random;
Email = Package['email'].Email;
//NpmModuleBcrypt = Npm.require('bcrypt');
Dlogin={};
Dlogin.urls={};

Dlogin.urls.resetPassword = function (token) {
  return Meteor.absoluteUrl('ResetPassword/' + token);
};
Dlogin.emailTemplates = {
  from: "Meteor Dlogin <no-reply@medicalplus.com>",
  siteName: Meteor.absoluteUrl().replace(/^https?:\/\//, '').replace(/\/$/, ''),

  resetPassword: {
    subject: function(user) {
      return "How to reset your password on " + Dlogin.emailTemplates.siteName;
    },
    text: function(user, url) {
      var greeting = (user.profile && user.profile.name) ?
            ("Hello " + user.emails[0].address + ",") : "Hello,";
      return greeting + "\n"
        + "\n"
        + "To reset your password, simply click the link below.\n"
        + "\n"
        + url + "\n"
        + "\n"
        + "Thanks.\n";
    }
  },
  verifyEmail: {
    subject: function(user) {
      return "How to verify email address on " + Dlogin.emailTemplates.siteName;
    },
    text: function(user, url) {
      var greeting = (user.profile && user.profile.name) ?
            ("Hello " + user.emails[0].address + ",") : "Hello,";
      return greeting + "\n"
        + "\n"
        + "To verify your account email, simply click the link below.\n"
        + "\n"
        + url + "\n"
        + "\n"
        + "Thanks.\n";
    }
  },
  enrollAccount: {
    subject: function(user) {
      return "An account has been created for you on " + Dlogin.emailTemplates.siteName;
    },
    text: function(user, url) {
      var greeting = (user.profile && user.profile.name) ?
            ("Hello " + user.emails[0].address + ",") : "Hello,";
      return greeting + "\n"
        + "\n"
        + "To start using the service, simply click the link below.\n"
        + "\n"
        + url + "\n"
        + "\n"
        + "Thanks.\n";
    }
  }
};

 

Meteor.methods({
	patientlogin: function(postAttributes) {
		console.log(postAttributes);
		//user = Patient.findOne({"username": postAttributes.username});
		//Work around coz email array in autoform does not work
		user = Patient.findOne({"emails.address": postAttributes.username});
		
		if (!!user) {
			if (!NpmModuleBcrypt.compareSync(postAttributes.password,user.services.password.bcrypt))	{
				console.log(postAttributes.username +"Patient password is " + NpmModuleBcrypt.compareSync(postAttributes.password,user.password));
				throw new Meteor.Error(401, "wrong password");
			}
			return user; 
		}
		else {
			console.log("Patient not found");
			throw new Meteor.Error(401, postAttributes);
		}
	},
	/////// Try Doing it in async way
	patientregister: function(postAttributes) {
		console.log(postAttributes);
		//user = Doctor.findOne({"username": postAttributes.username});
		//Work around coz email array in autoform does not work
		user = Patient.findOne({"emails.address": postAttributes.username});
		//var NpmModuleBcrypt = Npm.require('bcrypt');
		if (!user) {
			var salt = NpmModuleBcrypt.genSaltSync(10);
			var hash = NpmModuleBcrypt.hashSync(postAttributes.password, salt);
			postAttributes.password = null;
			//Work around coz email array in autoform does not work
			email = {emails :[{address : postAttributes.username,verified : "false"}]};
			_.extend(postAttributes, email);
			//services={};services.password={};services.password.bcrypt={};
			services ={"services" :{"password" :{"bcrypt" :""}}};
			services.services.password.bcrypt=hash;
			_.extend(postAttributes, services);
			postAttributes.username = null;
			console.log(postAttributes);
			Patient.insert(postAttributes);
		}
		else {
			console.log(postAttributes.username + "patient already exists");
			throw new Meteor.Error("PAT-EXISTS", postAttributes);
		}  
		
		console.log(NpmModuleBcrypt.compareSync("1",hash) + " passwd check"  );
	},
	patientpasswordreset : function(postAttributes) {
		console.log(postAttributes);
		//user = Doctor.findOne({"username": postAttributes.username});
		//Work around coz email array in autoform does not work
		user = Patient.findOne({"emails.address": postAttributes.username});
		var salt = NpmModuleBcrypt.genSaltSync(10);
		if (!!user) {
			ser_old_hash_password = user.password;
			cli_old_hash_password = NpmModuleBcrypt.hashSync(postAttributes.opassword, salt)
			cli_new_hash_password = NpmModuleBcrypt.hashSync(postAttributes.npassword, salt)
			if (ser_old_hash_password === cli_old_hash_password) {
				console.log(postAttributes);
				Patient.update({_id: user._id},{$set :{password:cli_new_hash_password}});
			}
			else {
				console.log("Wrong Password supplied");
				throw new Meteor.Error("PAT-Wrong Password", postAttributes);
			}
		}
		else {
			console.log(user+ "not found");
			throw new Meteor.Error("PAT-EXISTS", postAttributes);
		} 
	},
	doctorlogin: function(postAttributes) {
		console.log(postAttributes);
		//user = Doctor.findOne({"username": postAttributes.username});
		//Work around coz email array in autoform does not work
		user = Doctor.findOne({"emails.address": postAttributes.username});
		if (!!user) {
			if (!NpmModuleBcrypt.compareSync(postAttributes.password,user.services.password.bcrypt))	{
				//console.log(postAttributes.username +" doctor password is " + NpmModuleBcrypt.compareSync(postAttributes.password,user.password));
				//console.log(salt + " salt");
				console.log(postAttributes.password + " postAttributes.password");
				console.log(user.password +  " user.password");
				throw new Meteor.Error(401, "wrong password");
			}
			return user; 
		}
		else {
			console.log("doctor not found");
			throw new Meteor.Error(401, postAttributes);
		}
	},
	doctorregister: function(postAttributes) {
		console.log(postAttributes);
		//user = Doctor.findOne({"username": postAttributes.username});
		//Work around coz email array in autoform does not work
		user = Doctor.findOne({"emails.address": postAttributes.username});
		//var NpmModuleBcrypt = Npm.require('bcrypt');
		if (!user) {
			var salt = NpmModuleBcrypt.genSaltSync(10);
			var hash = NpmModuleBcrypt.hashSync(postAttributes.password, salt);
			postAttributes.password = null;
			//Work around coz email array in autoform does not work
			email = {emails :[{address : postAttributes.username,verified : "false"}]};
			_.extend(postAttributes, email);
			//services={};services.password={};services.password.bcrypt={};
			services ={"services" :{"password" :{"bcrypt" :""}}};
			services.services.password.bcrypt=hash;
			_.extend(postAttributes, services);
			postAttributes.username = null;
			console.log(postAttributes);
			Doctor.insert(postAttributes);
		}
		else {
			console.log(postAttributes.username + "doctor already exists");
			throw new Meteor.Error("DOC-EXISTS", postAttributes);
		}  
		
		console.log(NpmModuleBcrypt.compareSync("1",hash) + " passwd check"  );
	},
	doctorpasswordreset : function(postAttributes) {
		console.log(postAttributes);
		//user = Doctor.findOne({"username": postAttributes.username});
		//Work around coz email array in autoform does not work
		user = Doctor.findOne({"emails.address": postAttributes.username});
		var salt = NpmModuleBcrypt.genSaltSync(10);
		if (!!user) {
			//Work around coz email array in autoform does not work
			//Dlogin.sendResetPasswordEmail(user._id, postAttributes.username);
			
			address = postAttributes.username;
			//check for verification
			/*
			var email = _.find(user.emails || [],
				function (e) { return !e.verified; });
				address = (email || {}).address;
			
		  // make sure we have a valid address
			if (!address || !_.contains(_.pluck(user.emails || [], 'address'), address))
			throw new Error("No such email address for user.");
			*/
			var userId = user._id;
			var tokenRecord = {	
				token: Random.secret(),
				address: address,
				when: new Date()};
			Doctor.update(
			{_id: userId},
			{$push: {'services.email.verificationTokens': tokenRecord}});
			//replace with token
			var resetPasswordUrl = Dlogin.urls.resetPassword(tokenRecord.token);

			var options = {
			to: postAttributes.username,
			from: Dlogin.emailTemplates.from,
			subject: Dlogin.emailTemplates.resetPassword.subject(user),
			text: Dlogin.emailTemplates.resetPassword.text(user, resetPasswordUrl)
			};

			if (typeof Dlogin.emailTemplates.resetPassword.html === 'function')
			options.html =
			Dlogin.emailTemplates.resetPassword.html(user, resetPasswordUrl);

			Email.send(options);
			
			
			
			
			/*
			ser_old_hash_password = user.password;
			cli_old_hash_password = NpmModuleBcrypt.hashSync(postAttributes.opassword, salt)
			cli_new_hash_password = NpmModuleBcrypt.hashSync(postAttributes.npassword, salt)
			if (ser_old_hash_password === cli_old_hash_password) {
				console.log(postAttributes);
				Doctor.update({_id: user._id},{$set :{password:cli_new_hash_password}});
			}
			else {
				console.log("Wrong Password supplied");
				throw new Meteor.Error("DOC-Wrong Password", postAttributes);
			}
			*/ 
		}
		else {
			console.log(user+ "not found");
			throw new Meteor.Error("DOC-EXISTS", postAttributes);
		} 
	},
	doctorpasswordreset_email : function(postAttributes) {
		console.log(postAttributes);
		user = Doctor.findOne({"emails.address": postAttributes.username});
		//check for token
		var salt = NpmModuleBcrypt.genSaltSync(10);
		if (!!user) {
			// add time check also and token array number
			if (_.contains(_.pluck(user.services.email.verificationTokens,"token"),postAttributes.client_container)) {
			
			cli_new_hash_password = NpmModuleBcrypt.hashSync(postAttributes.password, salt);
			Doctor.update({_id: user._id},{$set :{"services.password.bcrypt":cli_new_hash_password}});
			}
			else {
				console.log("Invalid Token");
				throw new Meteor.Error("Invalid link", postAttributes);
			}
		}
		else {
			console.log(user+ "not found");
			throw new Meteor.Error("Invalid link", postAttributes);
		} 
	},
	appointmentconfimation: function(postAttributes) {
		appointment = Appointments.insert(postAttributes);
		if (!!appointment) {
			pat= Patient.findOne(postAttributes.user_id).username;
			notify = {"message" : "Booked By" + pat,
				"date" :  postAttributes.Date
			};
			notification = Notifications.update( {"belongs_to": postAttributes.doctor_id},{ $push: { "contents":  notify }});
			return appointment; 
		}
		/*
		else if (!NpmModuleBcrypt.compareSync(postAttributes.password,user.services.password.bcrypt)){
			throw new Meteor.Error(401, "wrong password");
		}*/
		else {
			throw new Meteor.Error(401, postAttributes);
			console.log(appointment);
		}
	},
});
