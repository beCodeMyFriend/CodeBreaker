describe("CB", function() {

    it("has a  function to generate", function() {
        CB.generate.should.be.an("funtion");
    });

    it("generates an array of 4 distinc colors", function() {
        var code = CB.generate();
        code.should.have.length(4);

        expect(CB.Colors).toContain(code[0]);
        expect(CB.Colors).toContain(code[1]);
        expect(CB.Colors).toContain(code[2]);
        expect(CB.Colors).toContain(code[3]);

        code[0].should.not.be.equal(code[1]);
        code[0].should.not.be.equal(code[2]);
        code[0].should.not.be.equal(code[3]);

        code[1].should.not.be.equal(code[2]);
        code[1].should.not.be.equal(code[3]);

        code[2].should.not.be.equal(code[3]);

    });

    it("generates a new code every call", function() {
        var code = CB.generate();
        code.should.have.length(4);
        expect(CB.generate()).not.toEqual(code);
    });

    it("returns the next color in CB.Color", function() {
        CB.nextColor(CB.Colors[0]).should.be.equal(CB.Colors[1]);
        CB.nextColor(CB.Colors[4]).should.be.equal(CB.Colors[5]);
        CB.nextColor(CB.Colors[5]).should.be.equal(CB.Colors[0]);
    });

    it("has a  function to check", function() {
        CB.check.should.be.an("function");
    });

    it("detects colors in place", function() {
        var code = ["orange", "violet", "blue", "red"];
        CB.check(["orange", "violet", "blue", "red"], code).should.eql("XXXX");
        CB.check(["orange", "violet", "", ""], code).should.eql("XX");
        CB.check(["violet", "violet", "violet", "violet"], code).should.eql("X");
        CB.check(["", "", "", ""], code).should.eql("");
    });

    it("detects presence of colors in wrong place", function() {
        var code = ["orange", "violet", "blue", "red"];
        CB.check(["blue", "red", "orange", "violet"], code).should.eql("****");

    });

});