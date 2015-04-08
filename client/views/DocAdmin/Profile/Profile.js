Template.Profile.helpers({
//	name : function() {
//		this.username;
//	}
});
Template.profile.rendered = function () {
    
    $("span.pie").peity("pie", {
        fill: ['#1ab394', '#d7d7d7', '#ffffff']
    })
    $(".bar-colours-1").peity("bar", {
        fill: ['#1ab394', '#d7d7d7', '#ffffff']
	})
}
