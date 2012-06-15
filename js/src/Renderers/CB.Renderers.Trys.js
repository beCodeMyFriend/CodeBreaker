CB.Renderers.Trys = CUORE.Class(CUORE.Renderers.List, {

    init: function() {
        CB.Renderers.Trys.parent.init.call(this);
    },

    _addItem: function(item) {
        var DOMitem = CUORE.Dom.createElement('li', null, this.panel);

        var table = CUORE.Dom.createElement('table', null, DOMitem);
        CUORE.Dom.addClass(table, 'try');

        var row = CUORE.Dom.createElement('tr', null, table);

        for (var i = 0, len = item.code.length; i < len; i++) {
            CUORE.Dom.createElement('td', {
                'className': item.code[i],
                'innerHTML': '&nbsp;'
            }, row);
        }

        var veredict = CUORE.Dom.createElement('td', {
            'className': 'veredict'
        }, row);
        veredict.innerHTML = item.veredict;

    },

});