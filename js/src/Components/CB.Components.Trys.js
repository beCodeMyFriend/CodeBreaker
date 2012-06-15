CB.Components.Trys = CUORE.Class(CUORE.Components.List, {

    init: function() {
        CB.Components.Trys.parent.init.call(this);
        this.renderer = new CB.Renderers.Trys();
        this.addExecHandler("CODE_check_EXECUTED", "putRound");
    },

    putRound: function(message) {
        var round = {};
        round.code = message.getFromQuery("code");
        round.veredict = message.getFromAnswer("validationResult");
        this.list.push(round);
        this.updateRender();
    },

});