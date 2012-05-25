CB.Renderers.Feedback = CUORE.Class(CUORE.Renderer, {

    init: function() {
        CB.Renderers.Feedback.parent.init.call(this);
        this.setTagName('section');
    },
    
    _addItem: function(item) {
        var DOMitem = CUORE.Dom.createElement('li', null, this.panel);
        DOMitem.innerHTML=item;
    },


});