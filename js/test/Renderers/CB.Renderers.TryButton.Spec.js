describe("CB.Renderers.TryButton", function() {

    var theRenderer;
    var aComponent;
    var container;


    beforeEach(function() {
        container = createTestContainer();

        theRenderer = new CB.Renderers.TryButton();
        theRenderer.setContainer(container.id);

        aComponent = getDummyComponent();
    });

    afterEach(function() {
        clearTestContainer();
    });

    it("is a  Button Renderer", function() {
        theRenderer.should.be.an.instanceOf(CUORE.Renderers.Button);
    });

    it("has button as tagname", function() {
        theRenderer.tagName.should.be.equal("button");
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

            var aComponent = buildStandarDummy();

            aComponent.selected = sinon.stub().returns(false);
            aComponent.position = sinon.stub().returns("aPosition");
            aComponent.color = sinon.stub().returns("aColor");

            return aComponent;
        };


    var buildStandarDummy = function() {
            var aComponent = {};

            aComponent.isEnabled = sinon.stub().returns(true);
            aComponent.getText = sinon.stub().returns('anyText');
            aComponent.getName = sinon.stub().returns('aPosition');
            aComponent.doYouReplace = sinon.stub().returns(true);
            aComponent.doYouHijack = sinon.stub().returns(false);
            aComponent.getContainer = sinon.stub().returns("testingContainer");

            return aComponent;
        };

    var clearTestContainer = function() {
            container = document.getElementById('xhtmlToTest');
            container.innerHTML = '';
        };

});