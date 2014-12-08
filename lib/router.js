Router.configure({
	layoutTemplate: function () {
		if(Session.get("page") == 'doctor'){
			return 'LayoutAdmin';
		}
		else if (Session.get("page") == 'patient'){
			return 'LayoutSearch';
		}
		else {
			return 'Empty';
		}
	}, 
	loadingTemplate: 'Loading',
	
});
Router.map(function() {
	this.route('Index', 
	{
		path: '/Index.html',
	
		waitOn: function() {
			return [
				Meteor.subscribe('notifications', Session.get("docId")),
				Meteor.subscribe('loggeddoctor'),
				Meteor.subscribe('appointments', Session.get("docId")),
				Meteor.subscribe('docworkplaces', Session.get("docId")),
				Meteor.subscribe('patients'),
			];
		},
	
	});
	this.route('Front', 
		{
			path: '/Front.html',
			//layoutTemplate: 'empty'
		});
	//this.route('index', {path: '/index.html'});
	this.route('AppointmentWizard', 
	{
		path: '/AppointmentWizard.html',
		waitOn: function() {
			return [
				Meteor.subscribe('notifications', Session.get("docId")),
				Meteor.subscribe('loggeddoctor'),
				Meteor.subscribe('appointments', Session.get("docId")),
				Meteor.subscribe('docworkplaces', Session.get("docId")),
				Meteor.subscribe('patients'),
			];
		},
	});
	this.route('FourZeroFour', 
		{ 
		path: '/404.html',
		//layoutTemplate: 'null'
		});
	this.route('FiveZeroZero', 
		{ 
		path: '/500.html',
		//layoutTemplate: 'null'
		});
	this.route('BadgesLabels', {path: '/BadgesLabels.html'});
	this.route('BasicGallery', {path: '/BasicGallery.html'});
	this.route('BoxedLayout', {path: '/BoxedLayout.html'});
	this.route('Buttons', {path: '/Buttons.html'});
	this.route('Calendar', {path: '/Calendar.html'});
	this.route('Carousel', {path: '/Carousel.html'});
	this.route('Contacts', {path: '/Contacts.html'});
	this.route('CssAnimations', {path: '/CssAnimations.html'});
	this.route('DocSearchTemplate', 
		{
			path: '/DocSearchTemplate.html',
			//layoutTemplate: 'empty'
		});
	this.route('DocSearchTemplateList', 	{path: '/DocSearchTemplateList.html'});
	this.route('DocSelectedTemplate', 	{path: '/DocSelectedTemplate.html'});
	this.route('DraggablePanels', {path: '/DraggablePanels.html'});
	this.route('Dsearch', 
	{
		path: '/Dsearch.html',
		waitOn: function() {
			return [
				Meteor.subscribe('notifications', Session.get("doc_id")),
				Meteor.subscribe('loggeddoctor'),
				Meteor.subscribe('appointments', Session.get("doc_id")),
				Meteor.subscribe('docworkplaces', Session.get("doc_id")),
				Meteor.subscribe('patients'),
			];
		},
	});
	this.route('EmptyPage', {path: '/EmptyPage.html'});
	this.route('FileManager', {path: '/FileManager.html'});
	this.route('Flipster', {path: '/Flipster.html'});
	this.route('FormAdvanced', {path: '/FormAdvanced.html'});
	this.route('FormBasic', {path: '/FormBasic.html'});
	this.route('FormEditors', {path: '/FormEditors.html'});
	this.route('FormFileUpload', {path: '/FormFileUpload.html'});
	this.route('FormWizard', {path: '/FormWizard.html'});
	this.route('FacilityAll', {path: '/Appointments.html'});
	this.route('GraphFlot', {path: '/GraphFlot.html'});
	this.route('GraphMorris', {path: '/GraphMorris.html'});
	this.route('GraphPeity', {path: '/GraphPeity.html'});
	this.route('GraphRickshaw', {path: '/GraphRickshaw.html'});
	this.route('GraphSparkline', {path: '/GraphSparkline.html'});
	this.route('GridOptions', {path: '/GridOptions.html'});
	this.route('Icons', {path: '/Icons.html'});
	this.route('Iframe', {path: '/Iframe.html'});
	this.route('Invoice', {path: '/Invoice.html'});
	this.route('InvoicePrint', {path: '/InvoicePrint.html'});
	this.route('Lockscreen', 
		{ 
		path: '/Lockscreen.html',
		//layoutTemplate: 'empty'
		});
	this.route('Logins', 
		{
		path: '/',
		waitOn: function() {
			return [
				Meteor.subscribe('notifications', Session.get("docId")),
				Meteor.subscribe('loggeddoctor'),
				Meteor.subscribe('appointments', Session.get("docId")),
				Meteor.subscribe('docworkplaces', Session.get("docId")),
				Meteor.subscribe('patients'),
			];
		},
		//layoutTemplate: 'empty'
		});
	this.route('Mailbox', {path: '/Mailbox.html'});
	this.route('MailCompose', {path: '/MailCompose.html'});
	this.route('MailDetail', {path: '/MailDetail.html'});
	this.route('Notifications', {path: '/Notifications.html'});
	this.route('PatientSettings', {
		path: '/PatientSettings.html',
		waitOn: function() {
			return [
				Meteor.subscribe('patients'),
				Meteor.subscribe('loggeddoctor'),
			];
		},
	});
	this.route('PinBoard', {path: '/PinBoard.html'});
	this.route('Polymerdemo', {
		path: '/Polymer.html',
		layoutTemplate: 'Empty',
		waitOn: function() {
			return [
				Meteor.subscribe('notifications', Session.get("docId")),
				Meteor.subscribe('loggeddoctor'),
				Meteor.subscribe('appointments', Session.get("docId")),
				Meteor.subscribe('docworkplaces', Session.get("docId")),
				Meteor.subscribe('patients'),
			];
		},
		}
	);
	this.route('Profile', {path: '/Profile.html'});
	this.route('Register', 
		{
		path: '/Register.html',
		waitOn: function() {
			return [
				Meteor.subscribe('notifications', Session.get("docId")),
				Meteor.subscribe('loggeddoctor'),
				Meteor.subscribe('appointments', Session.get("docId")),
				Meteor.subscribe('docworkplaces', Session.get("docId")),
				Meteor.subscribe('patients'),
			];
		},
		//layoutTemplate: 'empty'
		});
	this.route('ResetPassword' , {
		path : '/ResetPassword/:token', 
		waitOn: function() { Meteor.subscribe('loggeddoctor') ;}
	});
	this.route('SearchResults', {path: '/SearchResults.html'});
	this.route('TableBasic', {path: '/TableBasic.html'});
	this.route('TableDataTables', {path: '/TableDataTables.html'});
	this.route('TabsPanels', {path: '/TabsPanels.html'});
	this.route('Timeline', {path: '/Timeline.html'});
	this.route('Typography', {path: '/Typography.html'});
	
});

Router.onBeforeAction('loading');
