CB.Renderers.TryButton = CUORE.Class(CUORE.Renderers.Button, {

    init: function() {
        CUORE.Renderers.Button.parent.init.call(this);
        this.setTagName('button');
        this.DOMClass = 'button';
    },



    _adjustBehaviour: function(component) {
        var notAnAnchor = this.container.tagName !== 'BUTTON';
        if (notAnAnchor && component.doYouHijack()) {
            component.behave(CUORE.Behaviours.APPEND);
        }
    },

});