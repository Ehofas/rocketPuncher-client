(function(app) {
    app.AppSideRight =
        ng.core.Component({
            selector: 'app-side-right',
            templateUrl: '/app/templates/side.html'
        })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));