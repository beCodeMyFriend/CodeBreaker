describe("CB.Services.Code", function() {

    var aService

    beforeEach(function() {
        aService = new CB.Services.Code();
    });

    it("is a Service", function() {
        aService.should.be.an.instanceOf(CUORE.Service);
    });
    describe("CB.Services.Code", function() {

        beforeEach(function() {
            CUORE.Bus.emit=sinon.spy();       
        });

        it("has a syncronous method for generating color keys", function() {
            aService.generate();
            CUORE.Bus.emit.should.have.been.calledWith("CODE_generate_EXECUTED");
        });

        it("delegates generation to a helper", function() {
            CB.generate = sinon.stub().returns("generatedCode");
            aService.generate();
            CB.generate.should.have.been.called;
            CUORE.Bus.emit.lastCall.args[1].getFromAnswer("colorCode").should.be("generatedCode");
        });
    });
});