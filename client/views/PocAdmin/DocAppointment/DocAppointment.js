Template.DocAppointment.helpers({
	Doc: function() {
		return Doctor.findOne(Session.get("doc_id"));
	}
});
