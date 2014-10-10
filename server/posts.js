//Notifications = new Meteor.Collection('notifications');
Images = new Meteor.Collection('images');
Blood_Requests = new Meteor.Collection('blood_requests');
Health_Profile = new Meteor.Collection('health_profile');
Fake_User = new Meteor.Collection('fake_user');
Events = new Meteor.Collection('events');
Reminders = new Meteor.Collection('reminders');
//Cases = new Meteor.Collection('cases');
//Appointments = new Meteor.Collection('appointments');
//Users = new Meteor.Collection('users');
//Doctor = new Meteor.Collection('doctor');
//Workplace = new Meteor.Collection('workplace');
Wk_Desc = new Meteor.Collection('wk_desc');


var getPasswordString = function (password) {
  if (typeof password === "string") {
    password = SHA256(password);
  } else { // 'password' is an object
    if (password.algorithm !== "sha-256") {
      throw new Error("Invalid password hash algorithm. " +
                      "Only 'sha-256' is allowed.");
    }
    password = password.digest;
  }
  return password;
};


Meteor.methods({
	patientlogin: function(postAttributes) {
		console.log(postAttributes);
		user = Patient.findOne({"username": postAttributes.username});
		var bcrypt = Npm.require('bcrypt');
		if (!!user) {
			if (!bcrypt.compareSync(postAttributes.password,user.password))	{
				console.log("Patient password is wrong" + bcrypt.compareSync(postAttributes.password,user.password));
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
		user =  Patient.findOne({"username": postAttributes.username});
		var bcrypt = Npm.require('bcrypt');
		if (!user) {
			var salt = bcrypt.genSaltSync(10);
			var hash = bcrypt.hashSync(postAttributes.password, salt);
			postAttributes.password = hash;
			console.log(postAttributes);
			Patient.insert(postAttributes);
		}
		else {
			console.log(user+ "already exists");
			throw new Meteor.Error("PAT-EXISTS", postAttributes);
		} 
	},
	patientpasswordreset : function(postAttributes) {
		console.log(postAttributes);
		user =  Patient.findOne({"username": postAttributes.username});
		var bcrypt = Npm.require('bcrypt');
		if (!!user) {
			var salt = bcrypt.genSaltSync(10);
			var hash = bcrypt.hashSync(postAttributes.password, salt);
			postAttributes.password = hash;
			console.log(postAttributes);
			Patient.update({_id: user._id},{$set :{password:hash}});
		}
		else {
			console.log(user+ "not found");
			throw new Meteor.Error("PAT-EXISTS", postAttributes);
		} 
	},
	doctorlogin: function(postAttributes) {
		console.log(postAttributes);
		user = Doctor.findOne({"username": postAttributes.username});
		var bcrypt = Npm.require('bcrypt');
		if (!!user) {
			if (!bcrypt.compareSync(postAttributes.password,user.password))	{
				console.log("doctor password is wrong" + bcrypt.compareSync(postAttributes.password,user.password));
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
		user = Doctor.findOne({"username": postAttributes.username});
		var bcrypt = Npm.require('bcrypt');
		if (!user) {
			var salt = bcrypt.genSaltSync(10);
			var hash = bcrypt.hashSync(postAttributes.username, salt);
			postAttributes.password = hash;
			console.log(postAttributes);
			Doctor.insert(postAttributes);
		}
		else {
			console.log(user+ "already exists");
			throw new Meteor.Error("DOC-EXISTS", postAttributes);
		}  
	},
	doctorpasswordreset : function(postAttributes) {
		console.log(postAttributes);
		user =  Doctor.findOne({"username": postAttributes.username});
		var bcrypt = Npm.require('bcrypt');
		if (!!user) {
			var salt = bcrypt.genSaltSync(10);
			var hash = bcrypt.hashSync(postAttributes.password, salt);
			postAttributes.password = hash;
			console.log(postAttributes);
			Doctor.update({_id: user._id},{$set :{password:hash}});
		}
		else {
			console.log(user+ "not found");
			throw new Meteor.Error("DOC-EXISTS", postAttributes);
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
		else if (!bcrypt.compareSync(postAttributes.password,user.services.password.bcrypt)){
			throw new Meteor.Error(401, "wrong password");
		}*/
		else {
			throw new Meteor.Error(401, postAttributes);
			console.log(appointment);
		}
	},
});


