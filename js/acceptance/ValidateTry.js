var Browser = require("zombie");
var assert = require("assert");
var should = require("should");

describe("In the CodeBreaker application", function() {

    var browser = new Browser();

    before(function(done) {
        browser.visit("http://127.0.0.1:8125/index.html").then(done);
    });


    describe('when I click the "Try It" button', function() {

        it("then a row is added in Rounds", function(done) {

            var element = browser.document.getElementById("tryit");
            browser.fire('click', element).then(function() {
                browser.document.getElementById("trys").childNodes.length.should.be.equal(1);
            }).then(done, done);

        });
        
        describe('when I click the "Try It" again', function() {

            it("then another row is added in Rounds", function(done) {

                var element = browser.document.getElementById("tryit");
                browser.fire('click', element).then(function() {
                    browser.document.getElementById("trys").childNodes.length.should.be.equal(2);
                }).then(done, done);

            });
        });
    });

});