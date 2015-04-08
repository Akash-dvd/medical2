Template.IndexNotificationsList.helpers({
	a_Notifications: function() {
		return this.contents;
	}
});

Template.IndexNotificationsListArray.helpers({
  //count:function() {
   // return counter;
 // },
  synapse: function() {
    return this.message;
  },
  time: function() {
	time = moment(this.date).fromNow(); 
    //time = this.date.toString().split(/\s+/).slice(4,5);
    return time;
  }
});
