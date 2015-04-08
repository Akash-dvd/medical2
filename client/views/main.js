Template.main.helpers({
	Layouttemplate: function(){
		template = Session.get("role");
		loggedin = 	Meteor.userId();
		if(_.contains(Roles.getRolesForUser(loggedin) , template )) {
			if(template == 'phy'){
				return 'LayoutAdmin';
			}
			else {
				return 'LayoutSearch';
			}
		}
		else {
			return 'Logins';
		}
	},
});
