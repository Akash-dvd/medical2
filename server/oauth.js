Meteor.startup(function() {

	Accounts.loginServiceConfiguration.remove({
		service : 'facebook'
	});

	Accounts.loginServiceConfiguration.insert({
		service : 'facebook',
		appId : '656612171082270',
		secret : 'f622b02c8c33e75475b931600ad0c246'
	});
	Accounts.loginServiceConfiguration.remove({
		service : "google"
	});
	Accounts.loginServiceConfiguration.insert({
		service : "google",
		clientId : "46823472675-mrf3aevftb9d2fsmm6591bp7gpn2qds6.apps.googleusercontent.com",
		secret : "DBU0KetRb2BKE2_WnF7CVWXN"
	});

	Accounts.loginServiceConfiguration.remove({
		service : "twitter"
	});
	Accounts.loginServiceConfiguration.insert({
		service : "twitter",
		consumerKey : "E9zZM57KegOiNkYxJ5AT6zG8R",
		secret : "fMbHZxhqhOwIr1SnB26kFDcHEIiiYjIlu0ZUntKZctHAcWa8eb"
	});

});
