Template.DoctorSettings.helpers ({
	pat : function () {
		return Doctor.findOne({_id:Session.get("Doctor_id")});
	}
});

Template.DoctorSettingsAutoform.helpers ({
	options : function () {
		//return Doctor.findOne({}, {username: 1,_id:0});//.toArray();
		return Doctor.findOne().username;
	}
});

