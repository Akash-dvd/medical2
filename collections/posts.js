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


Meteor.methods({
	patientlogin: function(postAttributes_patient) {
		console.log(postAttributes_patient);
		user = Patient.findOne({"username": postAttributes_patient.username});
		console.log(user);
		if (!!user) {
			return user; 
		}
		/*
		else if (!bcrypt.compareSync(postAttributes.password,user.services.password.bcrypt)){
			throw new Meteor.Error(401, "wrong password");
		}*/
		else {
			throw new Meteor.Error(401, postAttributes_patient);
			console.log(user);
		}
	},
	doctorlogin: function(postAttributes) {
		console.log(postAttributes);
		user = Doctor.findOne({"username": postAttributes.username});
		console.log(user);
		if (!!user) {
			return user; 
		}
		/*
		else if (!bcrypt.compareSync(postAttributes.password,user.services.password.bcrypt)){
			throw new Meteor.Error(401, "wrong password");
		}*/
		else {
			throw new Meteor.Error(401, postAttributes);
			console.log(user);
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
	

