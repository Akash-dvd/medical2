Files = new FS.Collection("files", {
  stores: [new FS.Store.GridFS("filesStore")]
});


Patient = new Mongo.Collection("patients");
Patient.attachSchema(new SimpleSchema({
contactnos : {
        type : [Number],
        unique : true,  
        label : " Phone numbers " , 
	optional : true
     }, 
blood_group : {
	type : String , 
	label : " Blood Group " ,
        optional : true, 
	allowedValues : ["O+", "O-","A+", "A-","B+", "B-","AB+", "AB-","Unspecified"] 
     },
is_critical : {
	type:Boolean,
	optional:true,
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
contactnos : {
        type : [Number],
        unique : true,  
        label : " Phone numbers " , 
	optional : true
     }, 
blood_group : {
	type : String , 
	label : " Blood Group " ,
        optional : true, 
	allowedValues : ["O+", "O-","A+", "A-","B+", "B-","AB+", "AB-","Unspecified"] 
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
}));




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


