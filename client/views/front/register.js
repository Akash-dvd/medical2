
AutoForm.hooks({

	register_form : {
/*
		before: {
      insert: function(doc, template) {console.log("Router.go1");},
      update: function(docId, modifier, template) {console.log("Router.go2");},
      remove: function(docId, template) {console.log("Router.go3");},
      "methodName": function(doc, template) {console.log("Router.go4");}
    },
    after: {
      insert: function(error, result, template) {console.log("Router.go5");},
      update: function(error, result, template) {console.log("Router.go6");},
      remove: function(error, result, template) {console.log("Router.go7");},
      "methodName": function(error, result, template) {console.log("Router.go8");}
    },
    onSubmit: function(insertDoc, updateDoc, currentDoc) {console.log("Router.go9");},

    // Called when any operation succeeds, where operation will be
    // "insert", "update", "remove", or the method name.
    */ 
    onSuccess: function(operation, result, template) {
			Session.set("docId", result);
			Router.go('index');
			}
			
	/*

    // Called when any operation fails, where operation will be
    // "validation", "insert", "update", "remove", or the method name.
    onError: function(operation, error, template) {console.log("Router.go11");},
    //formToDoc: function(doc, ss, formId) {console.log("Router.go12");},

    formToDoc: function(doc, ss, formId){
		//doc.gender="Male";
		//console.log(doc + "Router.go12");
		//Router.go('mailbox');
		//return doc;
		
		},
	
    docToForm: function(doc, ss, formId) {console.log("Router.go13");},

    // Called at the beginning and end of submission, respectively.
    // This is the place to disable/enable buttons or the form,
    // show/hide a "Please wait" message, etc. If these hooks are
    // not defined, then by default the submit button is disabled
    // during submission.
    beginSubmit: function(formId, template) {console.log("Router.go14");},
    endSubmit: function(formId, template) {console.log("Router.go15");}
*/
  }
		


});

