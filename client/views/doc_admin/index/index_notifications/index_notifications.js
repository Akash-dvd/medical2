Template.index_notifications.helpers({
	c_Notifications: function() {
		return Notifications.find();
	},
	msg_count: function() {
		return Notifications.findOne().contents.length;
	}
});

Template.index_notifications.rendered = function () {
}
