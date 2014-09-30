Template.doc_selected_template.helpers({
  education_details: function() {return this.education_details;},
  doctor_fields: function() {return this.doctor_fields;},
  address: function() {return this.address;},
  city: function() {return this.city;},
  gender: function() {return this.gender.toLowerCase();},
  name: function() {return this.name;},
  contact_nos: function() {return this.contact_nos;},
  name: function() {return this.username;},
  email: function() {return this.email_id;},
  image: function() {return this.image;},
  c_facility : function() {
		return Workplace.find({"doctor_id":Session.get("doc_id")});
	},
});

Template.doc_selected_template.events({
	'click .btn': function(e) {
		if(!!Session.get("clinic_id"))
			Session.set("appointment_id","temp");
	}
	
});
AutoForm.hooks({
	Appointment_form : {
		formToDoc: function(doc) {
			doc.user_id=Session.get("patient_id");
			doc.doctor_id=Session.get("doc_id");
		return doc;
		}
	},
});

Template.doc_facility_list.helpers({
	facility_place : function () {
		return this.address;
	}
});

Template.doc_facility_list.events({
	'click .droplist': function(e) {
		console.log(this._id +" clinic_id selected");
		e.preventDefault();
		Session.set("clinic_id", (this._id).toString() );
	}
	
});




