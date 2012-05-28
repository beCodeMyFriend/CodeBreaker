CB.Renderers.Feedback = CUORE.Class(CUORE.Renderers.List, {

    init: function() {
        CB.Renderers.Feedback.parent.init.call(this);
        this.setTagName('section');
    },
    
    _addItem: function(item) {
        var DOMitem = CUORE.Dom.createElement('span', null, this.panel);
        DOMitem.innerHTML=item;
        CUORE.Dom.createElement('br', null, this.panel);
    },


});