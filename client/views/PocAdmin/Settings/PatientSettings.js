Template.PatientSettings.helpers ({
	pat : function () {
		return Patient.findOne({_id:Session.get("patient_id")});
	}
});

Template.PatientSettingsAutoform.helpers ({
	options : function () {
		//return Doctor.findOne({}, {username: 1,_id:0});//.toArray();
		return Doctor.findOne().username;
	}
});

