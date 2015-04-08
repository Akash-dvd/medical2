


Template.Index.onCreated(function () {
  // Use this.subscribe inside onCreated callback
  
  this.subscribe('notifications', Session.get("docId"));
  this.subscribe('loggeddoctor');
  this.subscribe('appointments', Session.get("docId"));
  this.subscribe('docworkplaces', Session.get("docId"));
  this.subscribe('patients');
});
