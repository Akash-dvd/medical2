Template.PatientSettings.helpers ({
	pat : function () {
		return Patient.findOne({_id:Session.get("patient_id")});
	}
});
Template.PatientSettings.onCreated(function () {
  // Use this.subscribe inside onCreated callback
  
  this.subscribe('patients');
  this.subscribe('loggeddoctor');
  this.subscribe('images');
});

Template.PatientSettingsAutoform.helpers ({
	options : function () {
		//return Doctor.findOne({}, {username: 1,_id:0});//.toArray();
		return Doctor.findOne().username;
	},
	optionsHelper : function () {
		//return Doctor.findOne({}, {username: 1,_id:0});//.toArray();
		return Patient.findOne({_id:Session.get("patient_id")}).family_physician;
	},
});

