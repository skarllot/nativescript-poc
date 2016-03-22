var frameModule = require("ui/frame");
var createViewModel = require("./main-view-model").createViewModel;

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
}
exports.onNavigatingTo = onNavigatingTo;

exports.signin = function() {
    frameModule.topmost().navigate("dash/dash");
};