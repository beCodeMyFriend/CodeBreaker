CB.Components.Feedback = CUORE.Class(CUORE.Components.List, {

    init: function() {
        CB.Components.Feedback.parent.init.call(this);
        this.renderer = new CB.Renderers.Feedback();
        this.addExecHandler("CODE_generate_EXECUTED", "showCodeGenerated");
        this.addExecHandler("CODE_check_EXECUTED", "showResponse");
    },

    showCodeGenerated: function(Message) {
        this.list.push("Code generated");
        this.updateRender();
    },

    showResponse: function(Message) {
        this.list.push("a validation");
        this.updateRender();
    }
});