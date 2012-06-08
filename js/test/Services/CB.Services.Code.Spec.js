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
            var busCall = CUORE.Bus.emit.lastCall.args[1];

            CB.generate.should.have.been.called;
            busCall.getFromAnswer("colorCode").should.be(generatedCode);
        });

    });

    it("stores last key generated", function() {
        CB.generate = sinon.stub().returns(generatedCode);
        aService.generate();

        aService.lastCode().should.be(generatedCode)
    });

});