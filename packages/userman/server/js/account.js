Accounts.onCreateUser(function(options, user) {
	// client -> options -> this function to fuck it -> user -> insert into mongo
	
	if (options.profile)
	console.log(options);
	console.log(user);
	//roles workaround for roles passing
	_.extend(user,{roles : options.profile.roles});
	_.extend(user,{profile :_.omit(options.profile,'roles')});
	
	//if doc then insert in both else only in pat
	if(_.contains(user.roles.__global_roles__,'phy'))
	{
		Array.prototype.push.apply(user.roles.__global_roles__,['noinfo','notverified','pat']);
		console.log(Doctor.findOne());
		Doctor.insert({_id:user._id});
		Patient.insert({_id:user._id});
	}
	else {
		Patient.insert({_id:user._id});
	}
	console.log(options);
	console.log(user);
	
	//console.log(Meteor.user());
	Meteor.setTimeout(function() {
		Accounts.sendVerificationEmail(user._id);
		}, 2 * 1000);
	return user;
});

Accounts.validateLoginAttempt (function(info) {
	//console.log(info)
	// enhance if possible for other services
	if (info.allowed ) {
		if (info.type == "resume")
			{return true;}
		else if (info.type == "password" && info.user.emails[0].verified)
			{return true;}
		else 
			{return false ;}
	}
	else 
	{return false ;}
});

