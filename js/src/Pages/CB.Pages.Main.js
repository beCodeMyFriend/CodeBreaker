CB.Pages.Main = CUORE.Class(CUORE.Page, {

    initializeServices: function() {
        this.addService(new CB.Services.Code());
    },

    initializeComponents: function() {
        var colors = CB.generate();
        this.addComponent(new CB.Components.Feedback(), 'feedback', CUORE.Behaviours.HIJACK);
        this.addComponent(new CB.Components.Color("first", colors[0]), 'first', CUORE.Behaviours.HIJACK);
        this.addComponent(new CB.Components.Color("second", colors[1]), 'second', CUORE.Behaviours.HIJACK);
        this.addComponent(new CB.Components.Color("third", colors[2]), 'third', CUORE.Behaviours.HIJACK);
        this.addComponent(new CB.Components.Color("fourth", colors[3]), 'fourth', CUORE.Behaviours.HIJACK);
    },

    setUp: function() {
        CB.Pages.Main.parent.setUp.call(this);
        this.generateKey();
    },

    generateKey: function() {
        this.getService("CODE").generate();
    }
});