(function(app) {
    document.addEventListener('DOMContentLoaded', function() {
        ng.platformBrowserDynamic.bootstrap(app.AppComponent);
        ng.platformBrowserDynamic.bootstrap(app.AppHeader);
        ng.platformBrowserDynamic.bootstrap(app.AppSideLeft);
        ng.platformBrowserDynamic.bootstrap(app.AppSideRight);

    });

})(window.app || (window.app = {}));