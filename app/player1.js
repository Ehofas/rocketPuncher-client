(function(app) {
    app.Player =
        ng.core.Component({
            selector: 'app-player',
            template: '<h2>Player:</h2><h3>Lina</h3>'
        })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));