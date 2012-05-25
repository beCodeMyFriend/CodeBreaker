describe("CB.generate", function() {

    it("is a function", function() {
        CB.generate.should.be.an("funtion");
    });

    it("returns an array of 4 distinc colors", function() {
        console.log(CB.generate());
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

    it("returns a new code every call", function() {
        var code = CB.generate();
        code.should.have.length(4);
        expect(CB.generate()).not.toEqual(code);
    });


});