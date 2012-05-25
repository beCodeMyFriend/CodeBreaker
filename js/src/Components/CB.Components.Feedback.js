CB.Components.Feedback = CUORE.Class(CUORE.Components.List, {

    init: function() {
        CB.Components.Feedback.parent.init.call(this);
        this.renderer = new CB.Renderers.Feedback();
        this.addHandler("CODE_generate_EXECUTED",new CUORE.Handlers.Executor("showCodeGenerated"));
    },

    showCodeGenerated: function(Message) {
        this.list.push("Code generated");
        this.updateRender();
    }
    
});