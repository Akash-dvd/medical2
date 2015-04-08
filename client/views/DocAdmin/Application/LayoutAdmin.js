Template.LayoutAdmin.onCreated(function () {
  // Use this.subscribe inside onCreated callback
  
  //this.subscribe('loggeddoctor');
  this.subscribe('loggeddoc');
  this.subscribe('files');
  this.subscribe('docworkplaces',Meteor.userId() );
});

Template.LayoutAdminLeftPane.rendered = function(){
    // metsiMenu
    $('#side-menu').metisMenu();

    // collapse ibox function
    $('.collapse-link').click( function() {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        var content = ibox.find('div.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        }, 50);
    });

    // close ibox function
    $('.close-link').click( function() {
        var content = $(this).closest('div.ibox');
        content.remove();
    });

    // minimalize menu
    $('.navbar-minimalize').click( function() {
        $( "body" ).toggleClass("mini-navbar" );
    })

    // tooltips
    $('.tooltip-demo').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body"
    })

    $("[data-toggle=popover]")
        .popover();
}

Template.LayoutAdminLeftPane.helpers({
	name :  function() {
		return	Doctor.findOne({"_id":Session.get("docId")},{'username': 1 ,'_id':0});
	},
	img :  function() {
		return	Doctor.findOne({"_id":Session.get("docId")},{'image': 1 ,'_id':0});
	},
	degree :  function() {
		return	Doctor.findOne({"_id":Session.get("docId")},{'doctor_fields': 1 });
	}
});
Template.LayoutAdminLeftPane.events({
    'click a': function (event) {
		event.preventDefault();
		//event.stopImmediatePropagation();
		//console.log(event.target);
		var ori_mystring = event.target.pathname;
		var mystring = ori_mystring.replace('/','');
		console.log(mystring);
		//console.log(event);
      Session.set('doc_template', mystring);
    }
  });
  
Template.LayoutAdminCentrePane.helpers({
	template : function() {
		if (_.contains(Roles.getGroupsForUser(Meteor.userId()),'noinfo')) {
			return "NewSettings";
		}
		else if (_.contains(Roles.getGroupsForUser(Meteor.userId()),'notverified')) {
			return "Notverified";
		}
		else {
			return Session.get('doc_template');
		}
	}
});
Template.LayoutAdminCentrePane.events({
    'click button.request': function (event) {
		event.preventDefault();
		Roles.removeUsersFromRoles(Meteor.userId(),'noinfo',Roles.GLOBAL_GROUP);
		console.log("request")
	}
});
