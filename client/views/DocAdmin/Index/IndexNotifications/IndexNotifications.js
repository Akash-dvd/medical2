Template.IndexNotifications.helpers({
	c_Notifications: function() {
		return Notifications.find();
	},
	msg_count: function() {
		return Notifications.findOne().contents.length;
	}
});

Template.IndexNotifications.rendered = function () {
}
