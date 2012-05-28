CB.Services.Code = CUORE.Class(CUORE.Service, {

    init: function() {
        CB.Services.Code.parent.init.call(this);
        this.name = 'CODE';
        this.code = undefined;
    },

    generate: function() {
        theMessage = new CUORE.Message();
        theCode = CB.generate();
        this.code = theCode;
        theMessage.putOnAnswer("colorCode", theCode);
        this.emit("CODE_generate_EXECUTED", theMessage.asJson());
    },

    lastCode: function() {
        return this.code;
    },
});