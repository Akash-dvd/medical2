Template.NewSettings.helpers ({
	doctor : function () {
		return Doctor.findOne({_id:Meteor.userId()});
	},
	user : function () {
		return Meteor.user();
	}
});

