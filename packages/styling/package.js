Package.describe({
	summary: "Local styling method"
});

Package.on_use(function (api){
	api.use(['jquery'], 'client');
	api.add_files(['load.js','metismenu.js','pace.min.js','jquery.flipster.min.js'], 'client');
});
