Template.DoctorSettings.helpers ({
	doctor : function () {
		return Doctor.findOne({_id:Session.get("doc_id")});
	}
});

Template.DoctorSettingsAutoform.helpers ({
	options : function () {
		//return Doctor.findOne({}, {username: 1,_id:0});//.toArray();
		return Doctor.findOne().username;
	}
});

