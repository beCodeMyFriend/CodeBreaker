describe("CB.Renderers.Feedback", function() {

    var theRenderer;
    var aComponent;
    var container;
    

    beforeEach(function() {
        theRenderer = new CB.Renderers.Feedback();
        container = createTestContainer();
        theRenderer.setContainer(container.id);
        aComponent = getDummyComponent();
    });

    afterEach(function() {
        container = document.getElementById('xhtmlToTest');
        container.innerHTML = '';
    });

    it("is a Renderer", function() {
        theRenderer.should.be.an.instanceOf(CUORE.Renderers.List);
    });
    
    it("Renders every feedback message", function() {
        theRenderer.render(aComponent);
        $('#testingContainer span').should.have.html('A line of feedback');
        $('#testingContainer section').should.contain('br');
    });

    var createTestContainer = function() {
            $('#testingContainer', '#xhtmlToTest').remove();
            var container = document.createElement('div');
            container.id = "testingContainer";
            var panel = document.getElementById("xhtmlToTest");
            panel.appendChild(container);
            return container;
        };

    var getDummyComponent = function() {
            var aComponent = {};

            aComponent.isEnabled = sinon.stub().returns(true);
            aComponent.getText = sinon.stub().returns('anyText');
            aComponent.getName = sinon.stub().returns('anyName');
            aComponent.doYouReplace = sinon.stub().returns(true);
            aComponent.doYouHijack = sinon.stub().returns(false);
            aComponent.getContainer = sinon.stub().returns("testingContainer");
            aComponent.selected = sinon.stub().returns(false);
            aComponent.size = sinon.stub().returns(3);
            aComponent.item = sinon.stub().returns("A line of feedback");
            return aComponent;
        };


});