Template.polymerdemo.helpers ({ 
	c_Doc : function () {
		return Doctor.find();
	}
});
Template.polymerdemo.onCreated(function () {
  // Use this.subscribe inside onCreated callback
  
  this.subscribe('notifications', Session.get("docId"));
  this.subscribe('loggeddoctor');
  this.subscribe('appointments', Session.get("docId"));
  this.subscribe('docworkplaces', Session.get("docId"));
  this.subscribe('patients');
});
