LoginSchema = {};

	LoginSchema.Dlogin = new SimpleSchema({ 	
		email 	: 	{	type: String,	regEx: SimpleSchema.RegEx.Email  , label : 'Email'	},
		password : 	{	type: String,	regEx: /^[A-Z]{2}$/		, label : 'Password'		}
	});

	LoginSchema.Plogin = new SimpleSchema({ 	
		email 	: 	{	type: String,	regEx: SimpleSchema.RegEx.Email  , label : 'Email'	},
		password : 	{	type: String,	regEx: /^[A-Z]{2}$/		, label : 'Password'		}
	});


	LoginSchema.Pregister= new SimpleSchema({ 	
		firstName: 	{	type: String,	regEx: /^[a-zA-Z-]{2,25}$/,	label : 'First Name' 	},
		lastName:  	{	type: String,	regEx: /^[a-zA-Z]{2,25}$/, 	label : 'Last Name'		},
		email 	: 	{	type: String,	regEx: SimpleSchema.RegEx.Email  , label : 'Email'	},
		password : 	{	type: String,	regEx: /^[A-Z]{2}$/		, label : 'Password'		},
		gender:    	{	type: String,	allowedValues: ['Male', 'Female'] , label : 'Gender'},
		birthday : 	{	type: Date,	  /*	autoform: {	 afFieldInput: {type: "bootstrap-datepicker"  } },*/ label : 'Birthday'	},
	});
	
	LoginSchema.Dregister= new SimpleSchema({ 	
		firstName: 	{	type: String,	regEx: /^[a-zA-Z-]{2,25}$/,	label : 'First Name' 	},
		lastName:  	{	type: String,	regEx: /^[a-zA-Z]{2,25}$/, 	label : 'Last Name'		},
		email 	: 	{	type: String,	regEx: SimpleSchema.RegEx.Email  , label : 'Email'	},
		password : 	{	type: String,	regEx: /^[A-Z]{2}$/		, label : 'Password'		},
		gender:    	{	type: String,	allowedValues: ['Male', 'Female'] , label : 'Gender'},
		birthday : 	{	type: Date,	   /*	autoform: {	 afFieldInput: {type: "bootstrap-datepicker"  } },*/  label : 'Birthday'	},
	});

	LoginSchema.Ppassreset= new SimpleSchema({ 	
		email 	: 	{	type: String,	regEx: SimpleSchema.RegEx.Email  , label : 'Email'	},
		password: {	 	type: String,  	regEx: /^[A-Z]{2}$/		,label : 'Password' 		},
		confirmPassword: {type: String,	regEx: /^[A-Z]{2}$/		,label : 'Renter Password' ,
			custom: function () {
				if (this.value !== this.field('password').value) {
				return "passwordMismatch";
			}
		}
																							},
	});
	
	LoginSchema.Dpassreset= new SimpleSchema({ 	
		email 	: 	{	type: String,	regEx: SimpleSchema.RegEx.Email  , label : 'Email'	},
		password: {	 	type: String,  	regEx: /^[A-Z]{2}$/		,label : 'Password' 		},
		confirmPassword: {type: String,	regEx: /^[A-Z]{2}$/		,label : 'Renter Password' ,
			custom: function () {
				if (this.value !== this.field('password').value) {
				return "passwordMismatch";
			}
		}
																							},
	});
