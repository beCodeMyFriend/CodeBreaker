describe("CB.Services.Code", function() {

    var aService;
    var generatedCode = "generatedCode";

    beforeEach(function() {
        aService = new CB.Services.Code();
    });

    it("is a Service", function() {
        aService.should.be.an.instanceOf(CUORE.Service);
    });

    describe("on generation ", function() {

        beforeEach(function() {
            CUORE.Bus.emit = sinon.spy();
        });

        it("has a syncronous method for generating color keys", function() {
            aService.generate();
            CUORE.Bus.emit.should.have.been.calledWith("CODE_generate_EXECUTED");
        });

        it("delegates generation to a helper", function() {
            CB.generate = sinon.stub().returns(generatedCode);

            aService.generate();
            var messageEmitted = CUORE.Bus.emit.lastCall.args[1];

            CB.generate.should.have.been.called;
            messageEmitted.getFromAnswer("colorCode").should.eql(generatedCode);
        });

    });

    it("stores last key generated", function() {
        CB.generate = sinon.stub().returns(generatedCode);
        aService.generate();

        aService.lastCode().should.be(generatedCode)
    });

	describe("on validation ", function() {

        beforeEach(function() {
            CUORE.Bus.emit = sinon.spy();
            CB.check = sinon.stub().returns("XX**");
        });

        it("has a syncronous method for validating color keys", function() {
            aService.check("colorCode");
            CUORE.Bus.emit.should.have.been.calledWith("CODE_check_EXECUTED");
        });

        it("delegates validation to a helper", function() {

			aService.code="anotherCode";
            aService.check("aColorCode");
            var messageEmitted = CUORE.Bus.emit.lastCall.args[1];
			
            CB.check.should.have.been.calledWith("aColorCode",aService.code);
            messageEmitted.getFromAnswer("validationResult").should.eql("XX**");
			messageEmitted.getFromQuery("code").should.eql("aColorCode");
        });

    });
	
});  