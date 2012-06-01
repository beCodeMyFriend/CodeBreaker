describe("CB.Components.TryButton", function() {

    var aComponent

    beforeEach(function() {
        aComponent = new CB.Components.TryButton();
    });

    it("is a Button", function() {
        aComponent.should.be.an.instanceOf(CUORE.Components.Button);
    });

    it("has its own renderer", function() {
        aComponent.renderer.should.be.an.instanceOf(CB.Renderers.TryButton);
    });

    it("stores the guest code", function() {
        aComponent.setGuestCode("aCode");
        aComponent.guestCode().should.be.equal("aCode");
    });
    
    it("handles changes in color", function() {
        aComponent.updateCode=sinon.spy();
        aComponent.eventDispatch('CODE_rotate_MADE',undefined);
        aComponent.getManagedEvents().should.include('CODE_rotate_MADE');
        aComponent.updateCode.should.have.been.called;
    });
    
    it("Updates guest code when color changes", function() {
        aComponent.setGuestCode(["alfa","beta","gamma","teta"]);
        
        aComponent.updateCode({"position":"first","color":"blue"});
        aComponent.guestCode().should.be.eql(["blue","beta","gamma","teta"]);
        
        aComponent.updateCode({"position":"second","color":"red"});
        aComponent.guestCode().should.be.eql(["blue","red","gamma","teta"]);
        
        aComponent.updateCode({"position":"third","color":"orange"});
        aComponent.guestCode().should.be.eql(["blue","red","orange","teta"]);
        
        aComponent.updateCode({"position":"fourth","color":"violet"});
        aComponent.guestCode().should.be.eql(["blue","red","orange","violet"]);
    });
    
    it("handles its own click in color", function() {
        aComponent.checkCode=sinon.spy();
        aComponent.eventDispatch('BUTTON_tryit_CLICKED',undefined);
        aComponent.getManagedEvents().should.include('BUTTON_tryit_CLICKED');
        aComponent.checkCode.should.have.been.called;
    });
    
    it('checks code when clicked', function() {
        aComponent.execute=sinon.spy();
        aComponent.setGuestCode("aCode");
        aComponent.checkCode();
        aComponent.execute.should.have.been.calledWith('CODE', 'check', 'aCode');
    });
});