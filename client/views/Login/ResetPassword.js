Template.ResetPassword.helpers ({
	//console.log(this.params.token),
	//data : Doctor.findOne({_id: this.params.token})
});
AutoForm.hooks({
	doctorpasswordreset_form_email : {
		formToDoc: function(doc, ss, formId){
			str=document.URL;
			doc.client_container=str.replace(Meteor.absoluteUrl() + "reset_password/", "");
			console.log(doc);
			return doc;
		},
	}
});
