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
});