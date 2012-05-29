describe("CB.Renderers.Color", function() {

    var theRenderer;
    var aComponent;
    var container;


    beforeEach(function() {
        theRenderer = new CB.Renderers.Color();
        container = createTestContainer();
        theRenderer.setContainer(container.id);
        aComponent = getDummyComponent();
    });

    afterEach(function() {
        container = document.getElementById('xhtmlToTest');
        container.innerHTML = '';
    });

    it("is a Renderer", function() {
        theRenderer.should.be.an.instanceOf(CUORE.Renderer);
    });

    it("Renders as a td ", function() {
        theRenderer.render(aComponent);
        $('#testingContainer td').should.have.html('&nbsp;');
    });

    it("put position as id an color as class", function() {
        theRenderer.render(aComponent);
        
        $('#testingContainer td').should.have.class('aColor');
        $('#testingContainer td').should.have.id('aPosition');
    });

    it('has a click event over the color for rotation', function() {
        aComponent.rotateColor = sinon.spy();
        theRenderer.render(aComponent);

        var theColor = container.children[0];
        CUORE.Dom.Event.hasEvents(theColor, 'click').should.be.true;
        theColor.dispatchEvent(clickEvent());
        aComponent.rotateColor.should.have.been.called;
    });

    it("updates the color class", function() {
        theRenderer.render(aComponent);
        
        $('#testingContainer td').should.have.class('aColor');
        aComponent.color = sinon.stub().returns("anotherColor");
        
        theRenderer.render(aComponent);
        $('#testingContainer td').should.not.have.class('aColor');
        $('#testingContainer td').should.have.class('anotherColor');
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