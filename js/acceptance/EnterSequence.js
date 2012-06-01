var Browser = require("zombie");
var assert = require("assert");
var should = require("should");

describe("visit", function() {
  
  var firstColor,secondColor,thirdColor,fourthColor;
  var browser = new Browser();
  
  before(function(done) {
    
    browser
      .visit("http://127.0.0.1:8125/index.html")
      .then (function(){
        var element=browser.document.getElementById("first");
        firstColor = element.className;
        return browser.fire('click',element);
      })
      .then (function(){
        var element=browser.document.getElementById("second");
        secondColor = element.className;
        return browser.fire('click',element);
      })
      .then (function(){
        var element=browser.document.getElementById("third");
        thirdColor = element.className;
        return browser.fire('click',element);
      })
      .then (function(){
        var element=browser.document.getElementById("fourth");
        fourthColor = element.className;
        return browser.fire('click',element);
      })
      .then (function(){
        return browser.wait(3000);
      })
      .then(done, done);
  });

  it("should have change the first color code", function() {
    browser.document.getElementById("first").className.should.not.be.equal(firstColor);
  });

  it("should have change the second color code", function() {
    browser.document.getElementById("second").className.should.not.be.equal(secondColor);
  });

  it("should have change the third color code", function() {
    browser.document.getElementById("third").className.should.not.be.equal(thirdColor);
  });

  it("should have change the fourth color code", function() {
    browser.document.getElementById("fourth").className.should.not.be.equal(fourthColor);
  });
  
});