Template.WorkPlaceSettings.helpers ({
	cDoctorWorkplace : function () {
		return Workplace.find({doctor_id:Session.get("docId")});
	}
});

Template.WorkPlaceSettingsAutoform.helpers ({

});

