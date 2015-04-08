Template.Imap.rendered = function (){
	var client = new BrowserBox('localhost', 143, {
		auth: {
			user: 'testuser',
			pass: 'testpass'
		},
		id: {
			name: 'My Client',
			version: '0.1'
		}
	});
	client.connect();
	
};
