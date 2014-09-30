Template.doc_search_template_list.helpers({
	education_details: function() {return this.education_details;},
	doctor_fields: function() {return this.doctor_fields;},
	address: function() {return this.address;},
	city: function() {return this.city;},
	gender: function() { var gender=this.gender; return gender.toString().toLowerCase();},
	name: function() {return this.name;},
	contact_nos: function() {return this.contact_nos;},
	name: function() {return this.username;},
	email: function() {return this.email_id;},
	image: function() {return this.image;},
	city: function() {return this.city;},
});

Template.doc_search_template_list.events({
	'click .btn-xs': function(e) {
		console.log("doc_selected");
		e.preventDefault();
		Session.set("doc_id", (this._id).toString() );
		Session.set("clinic_id", "" );
		Session.set("appointment_id", "" );
	}
});
