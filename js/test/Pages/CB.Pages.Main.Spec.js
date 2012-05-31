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

    describe("at instanciation", function() {

        var aCode = ["alfa", "beta", "gamma", "delta"];

        beforeEach(function() {
            CB.generate = sinon.stub().returns(aCode)
            sinon.spy(aPage, "addComponent");
            aPage.initializeComponents();

        });

        it("has FeedBack", function() {
            var theArguments = aPage.addComponent.args[0];

            aPage.addComponent.should.have.been.called;
            theArguments[0].should.be.an.instanceOf(CB.Components.Feedback);
            theArguments[1].should.equal("feedback");
            theArguments[2].should.be(CUORE.Behaviours.HIJACK);
        });

        it("has first color", function() {
            var theArguments = aPage.addComponent.args[1];

            aPage.addComponent.should.have.been.called;
            theArguments[0].should.be.an.instanceOf(CB.Components.Color);
            theArguments[1].should.equal("first");
            theArguments[2].should.be(CUORE.Behaviours.HIJACK);
        });

        it("has second color", function() {
            var theArguments = aPage.addComponent.args[2];

            aPage.addComponent.should.have.been.called;
            theArguments[0].should.be.an.instanceOf(CB.Components.Color);
            theArguments[1].should.equal("second");
            theArguments[2].should.be(CUORE.Behaviours.HIJACK);
        });

        it("has third color", function() {
            var theArguments = aPage.addComponent.args[3];

            aPage.addComponent.should.have.been.called;
            theArguments[0].should.be.an.instanceOf(CB.Components.Color);
            theArguments[1].should.equal("third");
            theArguments[2].should.be(CUORE.Behaviours.HIJACK);
        });

        it("has fourth color", function() {
            var theArguments = aPage.addComponent.args[4];

            aPage.addComponent.should.have.been.called;
            theArguments[0].should.be.an.instanceOf(CB.Components.Color);
            theArguments[1].should.equal("fourth");
            theArguments[2].should.be(CUORE.Behaviours.HIJACK);
        });

        it("has TryIt Button", function() {
            var theArguments = aPage.addComponent.args[5];

            aPage.addComponent.should.have.been.called;
            theArguments[0].should.be.an.instanceOf(CB.Components.TryButton);
            theArguments[1].should.equal("tryit");
            theArguments[2].should.be(CUORE.Behaviours.HIJACK);
            theArguments[0].guestCode().should.be.equal(aCode);

        });

        it("starts with a random code", function() {
            var theArguments = aPage.addComponent.args[4];

            CB.generate.should.have.been.called;
            aPage.addComponent.args[1][0].color().should.be.equal("alfa");
            aPage.addComponent.args[2][0].color().should.be.equal("beta");
            aPage.addComponent.args[3][0].color().should.be.equal("gamma");
            aPage.addComponent.args[4][0].color().should.be.equal("delta");
        });

    });


});