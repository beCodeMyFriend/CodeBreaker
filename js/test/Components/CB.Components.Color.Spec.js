describe("CB.Components.Color", function() {

    var aComponent

    beforeEach(function() {
        aComponent = new CB.Components.Color();
    });

    it("is a Component", function() {
        aComponent.should.be.an.instanceOf(CUORE.Component);
    });

    it("has its own renderer", function() {
        aComponent.renderer.should.be.an.instanceOf(CB.Renderers.Color);
    });

    it("instanciates with position and color", function() {
        aComponent = new CB.Components.Color("aPosition", "aColor");
        aComponent.position().should.equal("aPosition");
        aComponent.color().should.equal("aColor");
        aComponent.getName().should.equal("aPosition");
    });

    it("has a method to rotate colors ", function() {
        CB.nextColor = sinon.stub().returns(CB.Colors[1]);
        aComponent = new CB.Components.Color("aPosition", CB.Colors[0]);
        aComponent.updateRender = sinon.spy();
        aComponent.rotateColor();
        aComponent.color().should.be.equal(CB.Colors[1]);
        CB.nextColor.should.have.been.calledWith(CB.Colors[0]);
        aComponent.updateRender.should.have.been.called;
    });

    it("emits changes when rotating ", function() {
        CB.nextColor = sinon.stub().returns(CB.Colors[1]);
        aComponent = new CB.Components.Color("aPosition", CB.Colors[0]);
        CUORE.Bus.emit = sinon.spy();
        aComponent.rotateColor();
        expectedParams = {};
        expectedParams.position = "aPosition";
        expectedParams.color = CB.Colors[1];
        CUORE.Bus.emit.should.have.been.calledWith("CODE_rotate_MADE", expectedParams);
    });

});