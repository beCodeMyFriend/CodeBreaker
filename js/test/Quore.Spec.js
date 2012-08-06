describe("QUORE dsl for CUORE", function() {
    describe("Quore.page", function() {
        it("Puts a Cuore.Page in document.page", function() {
            QUORE.page();
            document.page.should.be.instanceof(CUORE.Page);
        });

        it("returns QUORE", function() {
            QUORE.page().should.equal(QUORE);
        });
    });

    describe("Quore.with", function() {
        it("has a reference to QUORE", function() {
            QUORE.with.should.equal(QUORE);
        });
    });

    describe("Quore.has", function() {
        it("has a reference to QUORE", function() {
            QUORE.with.should.equal(QUORE);
        });
    });

    describe("Quore.service", function() {
        it("adds the service to the document.page", function() {
            document.page={};
            document.page.addService=sinon.spy();
            var aService=new CUORE.Service();
            QUORE.service(aService);
            document.page.addService.should.have.been.calledWith(aService);
        });

        xit("Try to create a Service if not CUORE.Service provided", function() {
            document.page={};
            document.page.addService=sinon.spy();
            CUORE.Services.Dumb=sinon.spy();
            QUORE.service('DUMB');
            CUORE.Services.Dumb.should.have.been.called();
        });

        it("adds a Null Service when no Service given or bad Service", function() {
            document.page={};
            document.page.addService=sinon.spy();
            noService={};
            QUORE.service(noService);
            console.log (document.page.addService);
            document.page.addService.args[0].should.be.instanceof(CUORE.Services.Null);
        });

    });
});