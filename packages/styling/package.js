Package.describe({
	summary: "Local styling method"
});

Package.on_use(function (api){
	api.add_files('load.js', 'client');
});
