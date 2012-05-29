CB.Renderers.Color = CUORE.Class(CUORE.Renderer, {

    init: function() {
        CB.Renderers.Color.parent.init.call(this);
        this.setTagName('td');
    },
    
    paint: function (component) {
        CB.Renderers.Color.parent.paint.call(this,component);
        this.panel.innerHTML="&nbsp;";
        this._clickEvent(component);
        this.updateWhenDrawn(component);
    },

    updateWhenDrawn: function(component) {
        CB.Renderers.Color.parent.updateWhenDrawn.call(this,component);
        this._setColorClass(component);
    },
    
    
    _setColorClass: function(component) {
        this.panel.className="";
        this.panelClasses = [];
        this.addClass(component.color());
        this.setCurrentClasses();
    },
    
    _clickEvent: function (component) {
        var componentRotateColor = CUORE.Core.bind(component, component.rotateColor);
        CUORE.Dom.Event.stopDefault(this.panel, 'click');
        CUORE.Dom.Event.add(this.panel, 'click', componentRotateColor);
    },
});