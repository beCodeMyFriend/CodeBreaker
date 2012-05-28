var Browser = require("zombie");
var assert = require("assert");


describe("visit", function() {
  
  before(function(done) {
    this.browser = new Browser();
    this.browser
      .visit("http://127.0.0.1:8125/index.html")
      .then(done, done);
  });

  it("should load the promises page", function() {
    assert.equal(this.browser.text("title"), "CodeBreaker");
  });
  
  it("should have generated the code", function() {
    assert.equal(this.browser.text("#feedback span"),"Code generated" );
    
  });
  
});