CB.Components.TryButton = CUORE.Class(CUORE.Components.Button, {

    init: function(name, key) {
        CB.Components.TryButton.parent.init.call(this, name, key);
        this.renderer = new CB.Renderers.TryButton();
        this.myGuestCode = undefined;
        this._addHandlers();
    },

    setGuestCode: function(code) {
        this.myGuestCode = code;
    },

    guestCode: function() {
        return this.myGuestCode;
    },

    updateCode: function(params) {
        var position = CB.Positions.indexOf(params.position);
        this.myGuestCode[position] = params.color;
        return;
    },

    checkCode: function() {
        var params = this.myGuestCode;
        this.execute("CODE", 'check', params);
    },

    _addHandlers: function() {

        this.addExecHandler("CODE_rotate_MADE", 'updateCode');
        this.addExecHandler("BUTTON_tryit_CLICKED", 'checkCode');
    },
});