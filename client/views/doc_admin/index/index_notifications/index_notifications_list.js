Template.index_notifications_list.helpers({
	a_Notifications: function() {
		return this.contents;
	}
});

Template.index_notifications_list_array.helpers({
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
