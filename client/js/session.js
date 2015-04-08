state=0;
UI.registerHelper("counter", function(options) {
	if(!options){
	state=state+1;
	}
	return state;
});

