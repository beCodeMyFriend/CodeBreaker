var QUORE = QUORE || {};

QUORE.VERSION = '0.1';

QUORE.with=QUORE;
QUORE.has=QUORE;

QUORE.page = function() {
    document.page=new CUORE.Page();
    return this;
};

QUORE.service = function(aService) {
	var theService=aService;
	if (this._notAService(aService)){
		theService=this._getServiceInstance(aService);}
		console.log(new CUORE.Services.Null());
	document.page.addService(theService);
};

QUORE._getServiceInstance = function(aService) {
	var theService= new CUORE.Services.Null();
	return theService;
};

QUORE._notAService = function(aService) {
	return ! (aService instanceof CUORE.Service);
};
QUORE._capitalise=function(string)
{
    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}