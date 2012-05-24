describe("CB.Pages.Main", function() {

    var aPage;

    beforeEach(function() {
        aPage = new CB.Pages.Main("http://www.anydomain.com");
    });

    it("inherits Page", function() {
        aPage.should.be.an.instanceOf(CUORE.Page);
    });

    it("has an CODE Service", function() {
        aPage.getService("CODE").should.be.instanceOf(CB.Services.Code);
    });

    describe("at initialization", function() {
        var fakeService;
        
        beforeEach(function() {
            fakeService = {};
            fakeService.generate = sinon.stub().returns("aCode");
            aPage.getService = sinon.stub().returns(fakeService);
        });
        
        it("at start calls generate key", function() {
            sinon.spy(aPage, "generateKey");
            aPage.setUp();
            aPage.generateKey.should.have.been.called;
        });

        it("generateKey uses CODE service", function() {
            aPage.generateKey();
            aPage.getService.should.have.been.calledWith("CODE");
            fakeService.generate.should.have.been.called;
        });

    });
    
});