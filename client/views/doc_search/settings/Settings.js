Template.patientsettings.helpers ({
	pat : function () {
		return Patient.findOne({_id:Session.get("patient_id")});
	}
});
