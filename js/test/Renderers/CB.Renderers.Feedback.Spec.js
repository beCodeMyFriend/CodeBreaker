describe("TagPointListRenderer", function() {

    var theRenderer;
    var aComponent;
    var container;
    var $container;

    beforeEach(function() {
        theRenderer = new HH.Renderers.TagPointList();
        container = createTestContainer();
        $container = $(container);
        theRenderer.setContainer(container.id);
        aComponent = getDummyComponent();

    });

    afterEach(function() {
        container = document.getElementById('xhtmlToTest');
        container.innerHTML = '';
    });

    it("is a Renderer", function() {
        theRenderer.render(aComponent);
        theRenderer.should.be.an.instanceOf(CUORE.Renderers.List);
    });

    it("renderizes an li by item", function() {
        theRenderer.render(aComponent);
        var DOMElement = document.getElementById(container.id);
        var innerElement = DOMElement.childNodes[0];
        innerElement.childNodes.should.have.length(3);
        innerElement.getElementsByTagName('li').should.have.length(3);

    });

    it("renderizes every li with its index", function() {
        theRenderer.render(aComponent);
        var $index = $('ul>li>div.index', $container).filter(':first');

        $index.should.have.text('1');
        $index.should.have.class('index');
    });

    it("renderizes every li with its Brand", function() {
        theRenderer.render(aComponent);
        var $brand = $('ul>li>div.brand', $container).filter(':first');

        $brand.should.have.class('brand');
        $brand.should.have.text('description1');
    });

    it("renderizes the tag point selected with a different style", function() {
        aComponent.selected = sinon.stub().returns('1');
        theRenderer.render(aComponent);

        var $selected = $('ul>li>div.selected', $container);
        $selected.should.have.length(1);
        $selected.should.have.html('1');
    });

    it("does not selects any tag point from the list if any tag point is selected", function() {
        theRenderer.render(aComponent);

        var $selected = $('ul>li>div.selected', $container);
        $selected.should.have.length(0);
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

            var items = [{
                'ordinal': '1',
                'description': 'description1'
            }, {
                'ordinal': '2',
                'description': 'description2'
            }, {
                'ordinal': '3',
                'description': 'description3'
            }];

            aComponent.item = sinon.stub();
            aComponent.item.withArgs(0).returns(items[0]);
            aComponent.item.withArgs(1).returns(items[1]);
            aComponent.item.withArgs(2).returns(items[2]);
            aComponent.size = sinon.stub().returns(3);
            return aComponent;
        };


});