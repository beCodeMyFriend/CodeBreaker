describe("CB.Feedback", function() {

    var aComponent;

    beforeEach(function() {
        aComponent = new CB.Components.Feedback();
    });

    it("is a List", function() {
        aComponent.should.be.an.instanceOf(CUORE.Components.List);
    });

    it("Handles generation of codes inserting a message in the list", function() {
        aComponent.getManagedEvents().should.include('CODE_generate_EXECUTED');
        aComponent.eventDispatch('CODE_generate_EXECUTED', undefined);
        aComponent.size().should.be(1);
    });

    it("Handles validation of codes inserting a message in the list", function() {
        var aMessage = new CUORE.Message();
        aComponent.getManagedEvents().should.include('CODE_check_EXECUTED');
        aMessage.putOnAnswer("validationResult", "XX**");
        aComponent.eventDispatch('CODE_check_EXECUTED', aMessage);
        aComponent.size().should.eql(1);
        aComponent.item(0).should.eql("XX**");

    });

    it("has its own renderer", function() {
        aComponent.renderer.should.be.an.instanceOf(CB.Renderers.Feedback);
    });

});