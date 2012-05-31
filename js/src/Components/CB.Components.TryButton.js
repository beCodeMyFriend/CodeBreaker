CB.Components.TryButton = CUORE.Class(CUORE.Components.Button, {

    init: function(name, key) {
        CB.Components.TryButton.parent.init.call(this, name, key);
        this.renderer = new CB.Renderers.TryButton();
        this.myGuestCode = undefined;
    },

    setGuestCode: function(code) {
        this.myGuestCode = code;
    },

    guestCode: function() {
        return this.myGuestCode;
    },


});