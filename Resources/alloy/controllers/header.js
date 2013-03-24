function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.header = Ti.UI.createView({
        backgroundColor: Alloy.CFG.colors.background,
        height: 62,
        id: "header"
    });
    $.addTopLevelView($.__views.header);
    $.__views.logo = Ti.UI.createLabel({
        font: Alloy.CFG.fonts.title,
        top: 10,
        left: 10,
        color: Alloy.CFG.colors.text.main,
        text: "theCellar",
        id: "logo"
    });
    $.__views.header.add($.__views.logo);
    $.__views.underline = Ti.UI.createView({
        height: 1,
        width: "fill",
        top: 60,
        left: 0,
        backgroundColor: Alloy.CFG.colors.text.main,
        id: "underline"
    });
    $.__views.header.add($.__views.underline);
    $.__views.refresh = Ti.UI.createButton({
        right: 10,
        height: 40,
        width: 40,
        id: "refresh"
    });
    $.__views.header.add($.__views.refresh);
    Alloy.Globals.loadWines ? $.__views.refresh.addEventListener("click", Alloy.Globals.loadWines) : __defers["$.__views.refresh!click!Alloy.Globals.loadWines"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.refresh!click!Alloy.Globals.loadWines"] && $.__views.refresh.addEventListener("click", Alloy.Globals.loadWines);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;