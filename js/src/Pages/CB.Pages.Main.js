CB.Pages.Main = CUORE.Class(CUORE.Page, {

	initializeServices: function() {
		this.addService(new CB.Services.Code());
	},
	
	initializeComponents: function() {
		
	},
	
	setUp: function(){
		CB.Pages.Main.parent.setUp.call(this);
		this.generateKey();
	},
	
	generateKey: function(){
		this.getService("CODE").generate();
	}
});