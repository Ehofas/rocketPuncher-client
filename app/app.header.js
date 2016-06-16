(function(app) {
    app.AppHeader =
        ng.core.Component({
            selector: 'app-header',
            templateUrl: '/app/templates/header.html'
        })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));