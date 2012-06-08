CB.Services.Code = CUORE.Class(CUORE.Service, {

    init: function() {
        CB.Services.Code.parent.init.call(this);
        this.name = 'CODE';
        this.code = undefined;
    },

    generate: function() {
        theCode = CB.generate();
        this.code = theCode;
        
        theMessage = new CUORE.Message();
        theMessage.putOnAnswer("colorCode", theCode);
        
        this.emit("CODE_generate_EXECUTED", theMessage.asJson());
    },

    lastCode: function() {
        return this.code;
    },
    
    check: function(code) {
        theMessage = new CUORE.Message();
        theMessage.putOnAnswer("code", code);
        this.emit("CODE_check_EXECUTED", theMessage.asJson());
    },
});