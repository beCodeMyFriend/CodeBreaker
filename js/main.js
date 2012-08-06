CUORE.Dom.ready(function() {
    // cache for labelService
    var currentLocale = (navigator.language || navigator.browserLanguage);
    document.labels = {};
    document.labels[currentLocale] = {
        
       "codebreaker.try": "Try It! ",
        
    };
    //CUORE.Bus.enableDebug();
    
    /*
    document.page = new CB.Pages.Main("http://www.anydomain.com");
    document.page.draw();
    */

    QUORE.page().has.service('CODE');
    QUORE.component(new CB.Components.FeedBack()).hijacks('feedback');
    QUORE.execute('generate').from.service('CODE');
});