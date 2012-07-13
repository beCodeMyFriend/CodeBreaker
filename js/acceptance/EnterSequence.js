var Browser = require("zombie");
var assert = require("assert");
var should = require("should");

describe("In the CodeBreaker application", function() {

    var firstColor, secondColor, thirdColor, fourthColor;
    var browser = new Browser({
        maxWait: 7500
    });

    before(function(done) {
        browser.visit("http://127.0.0.1:8125/index.html").then(done);
    });


    describe('when I click the first button', function() {
        it("then the first color code changes", function(done) {

            var element = browser.document.getElementById("first");
            firstColor = element.className;
            browser.fire('click', element).then(function() {

                browser.document.getElementById("first").className.should.not.be.equal(firstColor);
            }).then(done, done);

        });
    });


    describe('when I click the second button', function() {

        it("then the second color code changes", function(done) {
            var element = browser.document.getElementById("second");
            secondColor = element.className;
            browser.fire('click', element).then(function() {

                browser.document.getElementById("second").className.should.not.be.equal(secondColor);
            }).then(done, done);
        });
    });

    describe('when I click the third button', function() {
        it("then the third color code changes", function(done) {

            var element = browser.document.getElementById("third");
            thirdColor = element.className;
            browser.fire('click', element).then(function() {

                browser.document.getElementById("third").className.should.not.be.equal(thirdColor);
            }).then(done, done);
        });
    });

    describe('when I click the fourth button', function() {
        it("then the fourth color code changes", function(done) {

            var element = browser.document.getElementById("fourth");
            fourthColor = element.className;
            browser.fire('click', element).then(function() {

                browser.document.getElementById("fourth").className.should.not.be.equal(fourthColor);
            }).then(done, done);
        });
    });

});