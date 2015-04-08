Template.AppointmentsList.helpers({
	time : function (){
		return this.date.toString().split(/\s+/).slice(4,5);
	},
	description: function (){
		return this.description;
	},
	person: function (){
		//return patient.findOne({_id:this.user_id},{});
		return Patient.findOne(this.user_id);
	},
	status: function (){
		return this.status;
	},
	counter_calendar_modal : function() {
	return Math.random().toString(36).substring(7);
  }
});
Template.AppointmentsList.events({
  'click .name': function(e) {
    e.preventDefault();
    Session.set("patient_id", (this.user_id).toString() );
    //console.log((this.user_id).toString() );
  }
});
 
