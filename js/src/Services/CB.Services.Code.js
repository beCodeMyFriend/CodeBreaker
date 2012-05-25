CB.Services.Code = CUORE.Class(CUORE.Service, {

    init: function() {
        CB.Services.Code.parent.init.call(this);
        this.name = 'CODE';
    },

    generate: function() {
        theMessage = new CUORE.Message();
        theCode = CB.generate();
        theMessage.putOnAnswer("colorCode", theCode);
        this.emit("CODE_generate_EXECUTED", theMessage.asJson());
    },

});