SimpleSchema.debug = true;


Notifications = new Mongo.Collection("notifications");
Notifications.attachSchema(new SimpleSchema({
	belongs_to: {
		type : String,
		label : " User ID " 
	}, 
	contents : {
		type : [Object],
		optional : true
	}, 
	'contents.$.message':
		{
		type : String, 
		optional : true
	},
	'contents.$.date':
		{
		type : Date, 
		optional : true
	}
}));


Patient = new Mongo.Collection("patients");
Patient.attachSchema(new SimpleSchema({
_id : {
        type : String,
        unique : true,  
        index : true , 
        label : " Doctor ID " ,
        optional : true
     }, 
password : {
	        type : String,
        label : " Password " , 
         optional : true,
	max : 100,
	},
"emails.$": {
	type: Object,
	optional: true,
	blackbox: true
},
"emails.$.verified" : {
	type: Boolean,
	optional: true
},
"emails.$.address" : {
	type: SimpleSchema.RegEx.Email,
	optional: true
},
services: {
        type: Object,
        optional: true,
        blackbox: true
    },
"services.email.verificationTokens.$" : {
	    type: Object,
        optional: true,
        blackbox: true
},
"services.email.verificationTokens.$.token" : {
	    type: String,
        optional: true,
        blackbox: true
},
"services.email.verificationTokens.$.address" : {
	    type: Object,
        optional: true,
        blackbox: true
},
"services.email.verificationTokens.$.when" : {
	    type: Object,
        optional: true,
        blackbox: true
},
"services.password.bcrypt" : {
	    type: String,
        optional: true,
        max : 150,
        blackbox: true
},
client_container : {
        type : String,
	max : 200 , 
	optional : true
     }, 
username : {
        type : String,
        label : " Name " , 
	max : 50,
	optional : true
     }, 
contactnos : {
        type : [Number],
        unique : true,  
        label : " Phone numbers " , 
	optional : true
     }, 
dob : {
        type : Date,
        label : " Date of Birth " , 
	optional : true	

     }, 
gender : {
	type : String , 
	label : " Gender " ,
        optional : true, 
	allowedValues : ["Male", "Female", "Unspecified"] 
     },
date_joined : {
        type : Date,
        label : " Date of joining of User " , 
	optional : true	
     }, 
blood_group : {
	type : String , 
	label : " Blood Group " ,
        optional : true, 
	allowedValues : ["O+", "O-","A+", "A-","B+", "B-","AB+", "AB-","Unspecified"] 
     },
city : {
        type : String,
        label : " City " , 
	max : 20 , 
	optional : true
     }, 

address : {
      	type : Object,
        optional : true
        }, 
'address.street':
	{
   	type : String, 
        optional : true
	},
'address.pin':
	{
   	type : Number, 
        optional : true
	},
is_critical : {
	type:Boolean,
	optional:true,
       },
image : {
	type:String,
	optional:true,
	   },
maritial_status: {
	type: String,
	label : " Maritial Status " ,
        optional : true, 
	allowedValues : ["Married","Un-Married","Divorced"]
},
known_allergies: {
	type: String,
	label : " Known Allergies" ,
        optional : true, 
	allowedValues : ["Etc","y","Skin","X"]
},
major_surgeries: {
	type: String,
	label : " Major Surgeries" ,
        optional : true, 
	allowedValues : ["Heart","Eye","Head","XYZ"]
},
health_condition: {
	type: String,
	label : " Health Condition" ,
        optional : true, 
	allowedValues : ["Good","Bad"]
},
food_habbit: {
	type: String,
	label : " Food Habbit" ,
        optional : true, 
	allowedValues : ["Veg","Non-Veg"]
},
family_physician: {
	type: String,
	label : " Family Physician" ,
        optional : true, 
},

 
}));



Doctor = new Mongo.Collection("doctor");
Doctor.attachSchema(new SimpleSchema({
_id : {
        type : String,
        unique : true,  
        index : true , 
        label : " Doctor ID " ,
        optional : true
     }, 
username : {
        type : String,
        label : " Name" , 
	max : 50,
	optional : true
     }, 
password : {
	        type : String,
        label : " Password " , 
	max : 100,
	optional : true
	},

"emails.$": {
	type: Object,
	optional: true,
	blackbox: true
},
"emails.$.verified" : {
	type: Boolean,
	optional: true
},
"emails.$.address" : {
	type: SimpleSchema.RegEx.Email,
	optional: true
},

services: {
        type: Object,
        optional: true,
        blackbox: true
    },
"services.email.verificationTokens.$" : {
	    type: Object,
        optional: true,
        blackbox: true
},
"services.email.verificationTokens.$.token" : {
	    type: String,
        optional: true,
        blackbox: true
},
"services.email.verificationTokens.$.address" : {
	    type: Object,
        optional: true,
        blackbox: true
},
"services.email.verificationTokens.$.when" : {
	    type: Object,
        optional: true,
        blackbox: true
},
"services.password.bcrypt" : {
	    type: String,
        optional: true,
        max : 150,
        blackbox: true
},

contactnos : {
        type : [Number],
        unique : true,  
        label : " Phone numbers " , 
	optional : true
     }, 
dob : {
        type : Date,
        label : " Date of Birth " , 
	optional : true	

     }, 
     	
gender : {
	type : String , 
	label : " Gender " ,
        optional : true, 
	allowedValues : ["Male", "Female", "Unspecified"] 
     },
    
date_joined : {
        type : Date,
        label : " Date of joining of User " , 
	optional : true	
     }, 
blood_group : {
	type : String , 
	label : " Blood Group " ,
        optional : true, 
	allowedValues : ["O+", "O-","A+", "A-","B+", "B-","AB+", "AB-","Unspecified"] 
     },
city : {
        type : String,
        label : " City " , 
	max : 20 , 
	optional : true
     }, 
client_container : {
        type : String,
	max : 200 , 
	optional : true
     }, 


address : {
      	type : Object,
        optional : true
        }, 
'address.street':
	{
   	type : String, 
        optional : true
	},
'address.pin':
	{
   	type : Number, 
        optional : true
	},
patient_id : {
        type : String,
        optional : true
     }, 
     
doctor_fields : {
      	type : Object, 
	optional : true
        }, 
'doctor_fields.speciality':
	{
   	type : String, 
	optional : true
	},
'doctor_fields.short_description':
	{
   	type : String,
	max:50, 
	optional : true
	},
'doctor_fields.type':
	{
   	type : String, 
	optional : true
	},
'doctor_fields.doctor_qualification':
	{
	type : [Object],
	optional : true
	},
'doctor_fields.doctor_qualification.$.course_name':
	{
   	type : String,
	optional : true,
	max:50
	},
'doctor_fields.doctor_qualification.$.college':
	{
   	type : String,
	optional : true,
	max:50
	},
'doctor_fields.doctor_qualification.$.city':
	{
   	type : String,
	optional : true,
	max:50
	},
'doctor_fields.notes':
	{
	type : [Object],
	optional : true
	},
'doctor_fields.notes.$.date':
	{
   	type : Date,
	optional : true
	},
'doctor_fields.notes.$.content':
	{
   	type : String,
	optional : true,
	max:100
	},
'doctor_fields.pinned_cases':
	{
	type : [Number],
	optional : true,
	},
	
	image : {
	type:String,
	optional:true,
	}

}));

Appointments = new Mongo.Collection("appointments");
Appointments.attachSchema(new SimpleSchema({
_id : {
        type : String,
        unique : true,  
        label : " Appointment ID" ,
        optional : true,
     }, 
case_id : {
        type : String,
        optional : true,
     },
user_id : {
        type : String,
        optional : true,

     },
doctor_id : {
        type : String,
        optional : true,

     },
clinic_id : {
        type : String,
        optional : true,

     },
status : {
        type : String,
	allowedValues: ["open","closed","others"],
	autoValue : function (){ return "open"},
	optional : true,
     },
Date : {
        type : Date,
        optional : true,
	
     },
description : {
        type : String,
        optional : true,
     }
}));

Cases = new Mongo.Collection("cases");
Cases.attachSchema(new SimpleSchema({
_id : {
        type : String,
        unique : true,  
        label : " Cases ID" 
     }, 

owner : {
        type : String
        
     }, 
status : {
        type : String,
	allowedValues: ["open","closed","others"]
     },

appointments : {
        type : [String],
	label: "List of appointment Ids",
	optional : true
     },

case_notes:
	{
	type : [Object],
	optional : true
	},
'case_notes.$.created_by':
	{
   	type : String,
	optional : true, 
	label : "Created by user " 
	},

'case_notes.$.created_at':
	{
   	type : Date,
	optional : true
	},
'case_notes.$.content':
	{
   	type : String,
	optional : true
	}
}));

Workplace = new Meteor.Collection("workplaces");
Workplace.attachSchema(new SimpleSchema({
_id : {
        type : String,
        unique : true,  
        label : " Workplace ID" 
     }, 
doctor_id : { 
	optional : true,
        type : String
     },
name : { 
        optional : true,
	type : String,
	label : " Workplace Name"
     },
city : { 
	optional : true,
        type : String
     },
address : {
      	type : Object,
        optional : true
        }, 
'address.street':
	{
   	type : String, 
        optional : true
	},
'address.pincode':
	{
   	type : Number, 
        optional : true
	},
type : { 
	optional : true,
	type : String,
	allowedValues: ["Clinic", "Hospital"]
     },
slot_duration : { 
	optional : true,        
	type : Number,
	label : "In Minutes "
     },
slots_description : { 
	type : [Object], 
	optional : true
	},
'slots_description.$.days' : {
	type : [String], 
	optional : true
	},
'slots_description.$.start_time' : {
	type : String, 
	optional : true
	},
'slots_description.$.end_time' : {
	type : String, 
	optional : true
	},
slots_booked : { 
	type : [Object], 
	optional : true
	},
'slots_booked.$.time' : { 
	type : Date,
	optional : true
	},
'slots_booked.$.appointment_id' : { 
	type : String,
	optional : true
	},
}));
