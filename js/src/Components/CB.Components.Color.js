CB.Components.Color = CUORE.Class(CUORE.Component, {

    init: function(position, color) {
        CB.Components.Color.parent.init.call(this);
        this.renderer = new CB.Renderers.Color();
        this.myPosition = position;
        this.myColor = color;
        this.setName(this.myPosition);
    },

    position: function() {
        return this.myPosition;
    },

    color: function() {
        return this.myColor;
    },

    rotateColor: function() {
        this.myColor = CB.nextColor(this.myColor);
        this.updateRender();
        this._emitRotate();
    },

    _emitRotate: function() {
        params = {};
        params.position = this.myPosition;
        params.color = this.myColor;
        CUORE.Bus.emit("CODE_rotate_MADE", params);
    },
});