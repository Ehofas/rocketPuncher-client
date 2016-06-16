(function(app) {
    app.AppSideLeft =
        ng.core.Component({
            selector: 'app-side-left',
            templateUrl: '/app/templates/side.html'
        })
            .Class({
                constructor: function() {
                    playerNames: 'getGameJson()'
                }
            });
})(window.app || (window.app = {}));