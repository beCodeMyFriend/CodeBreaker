describe("CB.Renderers.TryButton", function() {

    var theRenderer;
    var aComponent;
    var container;


    beforeEach(function() {
        theRenderer = new CB.Renderers.TryButton();
        container = createTestContainer();
        theRenderer.setContainer(container.id);
        aComponent = getDummyComponent();
    });

    afterEach(function() {
        container = document.getElementById('xhtmlToTest');
        container.innerHTML = '';
    });

    it("is a  Button Renderer", function() {
        theRenderer.should.be.an.instanceOf(CUORE.Renderers.Button);
    });

    it("has button as tagname", function() {
        theRenderer.tagName.should.be.equal("button");
    });

    var clickEvent = function() {
            var clickEvent = document.createEvent("MouseEvents");
            clickEvent.initMouseEvent("click", true, true, window, 0, 0, 0, 10, 11, false, false, false, false, 0, null);
            return clickEvent;
        };

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
            aComponent.getName = sinon.stub().returns('aPosition');
            aComponent.doYouReplace = sinon.stub().returns(true);
            aComponent.doYouHijack = sinon.stub().returns(false);
            aComponent.getContainer = sinon.stub().returns("testingContainer");
            aComponent.selected = sinon.stub().returns(false);
            aComponent.position = sinon.stub().returns("aPosition");
            aComponent.color = sinon.stub().returns("aColor");
            return aComponent;
        };


});