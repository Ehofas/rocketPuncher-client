(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/header.html'
        })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));