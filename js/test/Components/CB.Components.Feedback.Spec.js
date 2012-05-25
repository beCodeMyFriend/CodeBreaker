describe("CB.Feedback", function() {

    var aTagBrand

    beforeEach(function() {
        aComponent = new CB.Components.Feedback();
    });

    it("is a List", function() {
        aComponent.should.be.an.instanceOf(CUORE.Components.List);
    });

    it("Handles generation of codes inserting a message in the list", function() {
        aComponent.getManagedEvents().should.include('CODE_generate_EXECUTED');
        aComponent.eventDispatch('CODE_generate_EXECUTED',undefined);
        aComponent.size().should.be(1);
    });
    
    it("has its own renderer", function() {
        aComponent.renderer.should.be.an.instanceOf(CB.Renderers.Feedback);
    });    

});