/*Template.payment.events({
	'click .btn' : function (e){
	}
});

Template.payment.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var post = {
		user_id :Session.get("patient_id"),
		doctor_id :Session.get("doc_id"),
		clinic_id :Session.get("clinic_id"),
		Date = new Date(),
		description : $(e.target).find('[name=description]').val(),

    }
    
    Meteor.call('appointmentconfimation', post, function(error, id) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
        
        if (error.error === 302)
          Router.go('dsearch', {_id: error.details})
      } else {
			console.log("onSuccess jugaad");
      }
    });
  }
});
*/
AutoForm.hooks({
	aconfirm_form : {
		formToDoc: function(doc) {
			doc.user_id=Session.get("patient_id");
			doc.doctor_id=Session.get("doc_id");
			doc.clinic_id=Session.get("clinic_id");
			doc.Date = new Date();
			console.log(doc);
		return doc;
		},
		onSubmit: function(insertDoc, updateDoc, currentDoc) {console.log("onSubmit.payment");},
		onSuccess: function(operation, result, template) {
			console.log("onSuccess");
		},
	},
});
