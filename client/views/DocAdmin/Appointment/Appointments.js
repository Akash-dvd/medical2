Template.Appointments.helpers({
  c_Appointments: function() {
    return Appointments.find({"clinic_id":Session.get("clinic_id"),"status":"open"});
    //verified
  }
});
