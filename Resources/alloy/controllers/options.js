function Controller() {
    function login() {
        $.password.blur();
        $.username.blur();
        acs.checkLogin() ? acs.logout(acs.login({
            username: $.username.value,
            password: $.password.value,
            callback: loginAlert
        })) : acs.login({
            username: $.username.value,
            password: $.password.value,
            callback: loginAlert
        });
    }
    function logout() {
        acs.logout({
            callback: logoutAlert
        });
    }
    function loginAlert(e) {
        if (e.success) {
            $.loginView.hide();
            logoutBtn.show();
            acs.pushSubscribe();
            Ti.App.Properties.getString("acs.role") == "staff" && $.notifyView.show();
        } else alert("Please try again.");
    }
    function logoutAlert(e) {
        if (e.success) {
            logoutBtn.hide();
            $.notifyView.hide();
            $.loginView.show();
            Ti.App.Properties.setString("acs.role", null);
        } else alert("Please try again.");
    }
    function sendBroadcast(evt) {
        acs.sendBroadcast({
            message: $.message.value,
            badge: $.badge.value,
            payload: null
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.win3 = Ti.UI.createWindow({
        backgroundColor: Alloy.CFG.colors.background,
        navBarHidden: "true",
        layout: "vertical",
        id: "win3"
    });
    $.addTopLevelView($.__views.win3);
    $.__views.header = Alloy.createController("header", {
        id: "header"
    });
    $.__views.header.setParent($.__views.win3);
    $.__views.__alloyId9 = Ti.UI.createView({
        id: "__alloyId9"
    });
    $.__views.win3.add($.__views.__alloyId9);
    $.__views.loginView = Ti.UI.createView({
        layout: "vertical",
        id: "loginView"
    });
    $.__views.__alloyId9.add($.__views.loginView);
    $.__views.username = Ti.UI.createTextField({
        top: 10,
        height: 40,
        width: 280,
        borderColor: Alloy.CFG.colors.black,
        backgroundColor: Alloy.CFG.colors.white,
        color: Alloy.CFG.colors.black,
        paddingLeft: 10,
        hintText: "Username",
        id: "username"
    });
    $.__views.loginView.add($.__views.username);
    $.__views.password = Ti.UI.createTextField({
        top: 10,
        height: 40,
        width: 280,
        borderColor: Alloy.CFG.colors.black,
        backgroundColor: Alloy.CFG.colors.white,
        color: Alloy.CFG.colors.black,
        paddingLeft: 10,
        hintText: "Password",
        passwordMask: !0,
        id: "password"
    });
    $.__views.loginView.add($.__views.password);
    login ? $.__views.password.addEventListener("return", login) : __defers["$.__views.password!return!login"] = !0;
    $.__views.login = Ti.UI.createButton({
        top: 10,
        height: 40,
        width: 200,
        title: "Login",
        id: "login"
    });
    $.__views.loginView.add($.__views.login);
    login ? $.__views.login.addEventListener("click", login) : __defers["$.__views.login!click!login"] = !0;
    $.__views.notifyView = Ti.UI.createView({
        layout: "vertical",
        visible: !1,
        id: "notifyView"
    });
    $.__views.__alloyId9.add($.__views.notifyView);
    $.__views.message = Ti.UI.createTextField({
        top: 10,
        height: 40,
        width: 280,
        borderColor: Alloy.CFG.colors.black,
        backgroundColor: Alloy.CFG.colors.white,
        color: Alloy.CFG.colors.black,
        paddingLeft: 10,
        hintText: "Broadcast a Message",
        id: "message"
    });
    $.__views.notifyView.add($.__views.message);
    $.__views.badge = Ti.UI.createTextField({
        top: 10,
        height: 40,
        width: 280,
        borderColor: Alloy.CFG.colors.black,
        backgroundColor: Alloy.CFG.colors.white,
        color: Alloy.CFG.colors.black,
        paddingLeft: 10,
        hintText: "App Badge Number?",
        id: "badge"
    });
    $.__views.notifyView.add($.__views.badge);
    $.__views.send = Ti.UI.createButton({
        top: 10,
        title: "Send Broadcast",
        id: "send"
    });
    $.__views.notifyView.add($.__views.send);
    sendBroadcast ? $.__views.send.addEventListener("click", sendBroadcast) : __defers["$.__views.send!click!sendBroadcast"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var acs = require("acs"), logoutBtn = $.header.button;
    logoutBtn.backgroundImage = "logout.png";
    logoutBtn.addEventListener("click", logout);
    __defers["$.__views.password!return!login"] && $.__views.password.addEventListener("return", login);
    __defers["$.__views.login!click!login"] && $.__views.login.addEventListener("click", login);
    __defers["$.__views.send!click!sendBroadcast"] && $.__views.send.addEventListener("click", sendBroadcast);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;