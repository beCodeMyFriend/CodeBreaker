describe("CB.Trys", function() {

    var aComponent;

    beforeEach(function() {
        aComponent = new CB.Components.Trys();
    });

    it("is a List", function() {
        aComponent.should.be.an.instanceOf(CUORE.Components.List);
    });

    it("Handles checking of codes inserting the codes and veredict in the list", function() {
        var aMessage=new CUORE.Message();
        aMessage.putOnQuery("code",["alfa","beta","gamma","delta"]);
        aMessage.putOnAnswer("validationResult","XX**");
        
        aComponent.getManagedEvents().should.include('CODE_check_EXECUTED');
        aComponent.eventDispatch('CODE_check_EXECUTED', aMessage);
        
        aComponent.size().should.eql(1);
        aComponent.item(0).code.should.eql(["alfa","beta","gamma","delta"]);
        aComponent.item(0).veredict.should.eql("XX**");
    });


    it("has its own renderer", function() {
        aComponent.renderer.should.be.an.instanceOf(CB.Renderers.Trys);
    });

    it("calls updateRenderer when rounds added", function() {    
        aComponent.updateRender=sinon.spy();
    
        aComponent.putRound(new CUORE.Message());
        aComponent.updateRender.should.have.been.called;
    });
});