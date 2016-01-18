System.register(['rxjs/Rx', 'angular2/platform/browser', 'angular2/router', './services/data-service', './app'], function(exports_1) {
    var browser_1, router_1, data_service_1, app_1;
    return {
        setters:[
            function (_1) {},
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.AppComponent, [router_1.ROUTER_PROVIDERS, data_service_1.DataService]);
        }
    }
});
//# sourceMappingURL=bootstrap.js.map