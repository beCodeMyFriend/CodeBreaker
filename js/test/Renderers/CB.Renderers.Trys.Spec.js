describe("CB.Renderers.Trys", function() {

    var theRenderer;
    var aComponent;
    var container;


    beforeEach(function() {
        theRenderer = new CB.Renderers.Trys();
        container = createTestContainer();
        theRenderer.setContainer(container.id);
        aComponent = getDummyComponent();
    });

    afterEach(function() {
        clearTestContainer();
    });

    it("is a List Renderer", function() {
        theRenderer.should.be.an.instanceOf(CUORE.Renderers.List);
    });

    it("Renders a row by every Round", function() {
        theRenderer.render(aComponent);
        $('#testingContainer table.try').should.have.length(3);
        $('#testingContainer table.try:first tr').should.have.length(1);
        $('#testingContainer table.try:first tr td').should.have.length(5);
    });

    it("Renders the color code", function() {
        theRenderer.render(aComponent);

        $('#testingContainer table.try:first tr td')[0].className.should.equal('red');
        $('#testingContainer table.try:first tr td')[1].className.should.equal('cyan');
        $('#testingContainer table.try:first tr td')[2].className.should.equal('orange');
        $('#testingContainer table.try:first tr td')[3].className.should.equal('violet');

    });

    it("Renders the veredict", function() {
        theRenderer.render(aComponent);

        $('#testingContainer table.try:first tr td:last').should.have.class('veredict');
        $('#testingContainer table.try:first tr td:last').should.have.text('XX**');

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

            var aRound = {};
            aRound.code = ["red", "cyan", "orange", "violet"];
            aRound.veredict = "XX**";

            var aComponent = buildStandarDummy();
            aComponent.size = sinon.stub().returns(3);
            aComponent.item = sinon.stub().returns(aRound);
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