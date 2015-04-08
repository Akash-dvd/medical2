Meteor.publish(null, function (){ 
  return Meteor.roles.find({})
});
Meteor.publish(null, function () {
	console.log(this.userId);
	Doctor.find(this.userId);

});


Meteor.publish('notifications', function(id) { return Notifications.find({belongs_to:id});});
//Meteor.publish('notifications', function(id) { return Notifications.find();});
//Meteor.publish('images', function() {return Images.find();});
//Meteor.publish('files', function() {return Files.find();});
Meteor.publish('blood_requests', function() {return Blood_Requests.find();});
Meteor.publish('health_profile', function() {  return Health_Profile.find();});
Meteor.publish('fake_user', function() {  return Fake_User.find();});
Meteor.publish('events', function() {  return Events.find();});
Meteor.publish('reminders', function() {  return Reminders.find();});
Meteor.publish('cases', function() {  return Cases.find();});
Meteor.publish('appointments', function(id) {  return Appointments.find({doctor_id:id});});
//Meteor.publish('users', function() { return Users.find();});
//Meteor.publish('loggeddoctor', function(id) {  return Doctor.find(/*{_id:id}*/);});
//Meteor.publish('patients', function(id) {  return Patient.find(/*{_id:id}*/);});
Meteor.publish('docworkplaces', function(id) {  return Workplace.find({doctor_id:id});});
Meteor.publish('users', function() {  return Meteor.users.find();});
Meteor.publish('wk_desc', function() {  return Wk_Desc.find();});
//Meteor.publish('books', function() {  return Books.find();});
