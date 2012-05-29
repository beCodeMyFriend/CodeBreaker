CB.Pages.Main = CUORE.Class(CUORE.Page, {

    initializeServices: function() {
        this.addService(new CB.Services.Code());
    },

    initializeComponents: function() {
        this.addComponent(new CB.Components.Feedback(), 'feedback', CUORE.Behaviours.HIJACK);
        this.addComponent(new CB.Components.Color("first", CB.Colors[0]), 'first', CUORE.Behaviours.HIJACK);
        this.addComponent(new CB.Components.Color("second", CB.Colors[0]), 'second', CUORE.Behaviours.HIJACK);
        this.addComponent(new CB.Components.Color("third", CB.Colors[0]), 'third', CUORE.Behaviours.HIJACK);
        this.addComponent(new CB.Components.Color("fourth", CB.Colors[0]), 'fourth', CUORE.Behaviours.HIJACK);
    },

    setUp: function() {
        CB.Pages.Main.parent.setUp.call(this);
        this.generateKey();
    },

    generateKey: function() {
        this.getService("CODE").generate();
    }
});