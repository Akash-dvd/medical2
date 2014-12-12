Template.WorkPlaceSettings.helpers ({
	cDoctorWorkplace : function () {
		return Workplace.find({doctor_id:Session.get("doc_id")});
	}
});

Template.WorkPlaceSettingsAutoform.helpers ({

});

