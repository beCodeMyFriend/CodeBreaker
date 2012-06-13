var CB = CB || {};

CB.VERSION = '0.1';

CB.Pages = CB.Pages || {};
CB.Components = CB.Components || {};
CB.Handlers = CB.Handlers || {};
CB.Services = CB.Services || {};
CB.Renderers = CB.Renderers || {};
CB.Decorations = CB.Decorations || {};

CB.Colors = ["red", "cyan", "orange", "violet", "green", "yellow"];
CB.Positions = ["first", "second", "third", "fourth"];


CB.generate = function(code) {
    var aCode = code || [];
    if (aCode.length == 4) return aCode;
    var aColor = CB._randomColor();
    if (CB._notContained(aColor, aCode)) {
        aCode.push(aColor);
    }
    CB.generate(aCode);
    return aCode;
};

CB.nextColor = function(color) {
    var currentIndex = CB.Colors.indexOf(color);
    if (currentIndex == CB.Colors.length - 1) currentIndex = -1;
    return CB.Colors[currentIndex + 1];
};

CB.check = function(toTest, code) {

    var resultOK = CB._checkCorrect(toTest, code);
    var resultKO = CB._checkOutOfPlace(toTest, code);

    var newLength = resultKO.length - resultOK.length;
    resultKO = resultKO.substring(0, newLength);

    return resultOK + resultKO;
};



CB._checkCorrect = function(toTest, code) {
    var OK = "X";
    var resultOK = "";
    for (var i = 0; i < toTest.length; i++) {
        if (toTest[i] == code[i]) resultOK = resultOK + OK;
    }
    return resultOK;
};


CB._checkOutOfPlace = function(toTest, code) {
    var reducedTestCode = CB._reduce(toTest);
    var KO = "*";
    var resultKO = "";
    for (var i = 0; i < reducedTestCode.length; i++) {
        if (CB._contained(reducedTestCode[i], code)) resultKO = resultKO + KO;
    }
    return resultKO;
};

CB._randomColor = function() {
    var index = Math.floor(Math.random() * (6));
    return CB.Colors[index];
};

CB._reduce = function(toReduce) {

    result = [], obj = {};

    for (var i = 0; i < toReduce.length; i++) {
        obj[toReduce[i]] = 0;
    }
    for (i in obj) {
        result.push(i);
    }
    return result;
};

CB._notContained = function(aColor, aCode) {
    return !CB._contained(aColor, aCode);
};

CB._contained = function(aColor, aCode) {
    for (var i = 0; i < aCode.length; i++) {
        if (aCode[i] == aColor) return true;
    }
    return false;
};