Package.describe({
	summary: "Package for imap.",
	version: '1.0.0'
});

Npm.depends({
  //"utf7": "1.0.0",
  //"imap": 'https://github.com/mscdex/node-imap'
  "imap-client": '0.10.0'
});

Package.on_use(function (api, where) {
  api.add_files('js/forge.min.js', 'client'); 
  api.add_files('js/bundle.js', 'client');
  api.export(['require'], 'client');
});
