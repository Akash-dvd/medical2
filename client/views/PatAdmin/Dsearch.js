Template.Dsearch.helpers({
	states : function () {
		var states=[{state:1},{state:0},{state:0}];
		if(!!Session.get("doc_id") && !!Session.get("appointment_id")) {
			states=[{state:1},{state:1},{state:1}];
		}
		else if (!!Session.get("doc_id")) {
			states=[{state:1},{state:1},{state:0}];
		}
		else {
			states=[{state:1},{state:0},{state:0}];
		}
		return states;
	},
});

Template.Dsearch.onCreated(function () {
  // Use this.subscribe inside onCreated callback
  
  this.subscribe('notifications', Session.get("doc_id"));
  this.subscribe('loggeddoctor');
  this.subscribe('docworkplaces', Session.get("doc_id"));
  this.subscribe('patients');
  this.subscribe('appointments', Session.get("doc_id"));
  this.subscribe('images');
});
Template.Dsearch.events({
	'click .b1': function(e) {
	e.preventDefault();
	Session.set("doc_id","");
	Session.set("clinic_id","");
	Session.set("appointment_id","");
  },
	'click .b2': function(e) {
	e.preventDefault();
	Session.set("clinic_id","");
	Session.set("appointment_id","");
  },
	'click .b3': function(e) {
	e.preventDefault();

  },
	'click .b4': function(e) {
	e.preventDefault();
	if(!!Session.get("doc_id") && !!Session.get("clinic_id")) {
		Session.set("clinic_id","");
	}
	else if (!!Session.get("clinic_id")) {
		Session.set("doc_id","");
	}
	else {
		
	}
  },
	'click .b5': function(e) {
	e.preventDefault();
  }
});
