var CB = CB || {};

CB.VERSION = '0.1';

CB.Pages = CB.Pages || {};
CB.Components = CB.Components || {};
CB.Handlers = CB.Handlers || {};
CB.Services = CB.Services || {};
CB.Renderers = CB.Renderers || {};
CB.Decorations = CB.Decorations || {};

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
    var currentIndex=CB.Colors.indexOf(color);
    if (currentIndex == CB.Colors.length-1) currentIndex=-1;
    return CB.Colors[currentIndex+1];
};

CB.Colors = ["red", "cyan", "orange", "violet", "green", "yellow"];

CB._randomColor = function() {
    var index = Math.floor(Math.random() * (6));
    return CB.Colors[index];
};

CB._notContained = function(aColor, aCode) {
    for (var i = 0; i < aCode.length; i++) {
        if (aCode[i] == aColor) return false;
    }
    return true;
};