var Schema = {};

	Schema.UserCountry = new SimpleSchema({ 	
		name: 	{	type: String	},
		code: 	{	type: String,	regEx: /^[A-Z]{2}$/		}
	});

	Schema.UserProfile = new SimpleSchema({
	firstName: 	{	type: String,	regEx: /^[a-zA-Z-]{2,25}$/,						},
	lastName:  	{	type: String,	regEx: /^[a-zA-Z]{2,25}$/,						},
	birthday:  	{	type: Date,		optional: true									},
	gender:    	{	type: String,	allowedValues: ['Male', 'Female'],	optional: true	},
	organization:{	type: String,	regEx: /^[a-z0-9A-z .]{3,30}$/,	optional: true	},
	website:   	{	type: String,	regEx: SimpleSchema.RegEx.Url,	optional: true	},
	bio:       	{	type: String,	optional: true							},
	country:   	{	type: Schema.UserCountry,	optional: true						},
	});
	
	Schema.email = new SimpleSchema({
	address: 	{	type: String,	regEx: SimpleSchema.RegEx.Email					},
	verified: 	{	type: Boolean													},
	});
	
	Schema.User = new SimpleSchema({
	username:	{	type: String,	regEx: /^[a-z0-9A-Z_]{3,15}$/,	optional: true,	},
	emails: 	{	type: [Schema.email],	optional: true							},
	createdAt:  {	type: Date			,autoValue: function() { return new Date;}	},
	profile: 	{	type: Schema.UserProfile,										},
	services: 	{	type: Object,	optional: true,		blackbox: true				},
	roles: 		{	type: Object,						blackbox: true				}, //defauth value
    
	});

Meteor.users.attachSchema(Schema.User);


