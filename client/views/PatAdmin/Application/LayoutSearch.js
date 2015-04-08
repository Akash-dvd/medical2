// Custom scripts
Template.LayoutSearch.rendered = function(){
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
Template.LayoutSearch.helpers({
	name :  function() {
		return	Patient.findOne({"_id":Session.get("patient_id")},{'username': 1 ,'_id':0});
	},
	img :  function() {
		return	Patient.findOne({"_id":Session.get("patient_id")},{'image': 1 ,'_id':0});
	},
	profilePic1 :  function() {
		//patient = Patient.findOne({"_id":Session.get("patient_id")});
		return Patient.findOne({"_id":Session.get("patient_id")},{'profilePic': 1 ,'_id':0});
		},
	template : function() {
		return Session.get('pat_template');
	}
});
  Template.LayoutSearch.events({
    'click a': function (event) {
		event.preventDefault();
		//event.stopImmediatePropagation();
		//console.log(event.target);
		var ori_mystring = event.target.pathname;
		var mystring = ori_mystring.replace('/','');
		console.log(mystring);
		//console.log(event);
      Session.set('pat_template', mystring);
    }
  });
