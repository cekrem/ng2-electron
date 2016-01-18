System.register(['angular2/core', './services/license-service', './services/data-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, license_service_1, data_service_1;
    var Remote, WelcomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (license_service_1_1) {
                license_service_1 = license_service_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            Remote = nodeRequire('electron').remote;
            WelcomeComponent = (function () {
                function WelcomeComponent(dataService) {
                    this.mainWindow = Remote.getCurrentWindow();
                    this.licensedTo = license_service_1.license.id;
                    // this.userData = dataService.getData();
                    this.userFeed = dataService.subscribeTo();
                }
                WelcomeComponent.prototype.ngOnInit = function () {
                    this.mainWindow.show();
                };
                WelcomeComponent.prototype.newWindow = function () {
                    var win = new Remote.BrowserWindow({ width: 800, height: 600 });
                    win.loadURL("file://" + __dirname + "/index.html");
                };
                WelcomeComponent = __decorate([
                    core_1.Component({
                        selector: 'welcome',
                        templateUrl: './angular/welcome.html'
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], WelcomeComponent);
                return WelcomeComponent;
            })();
            exports_1("WelcomeComponent", WelcomeComponent);
        }
    }
});
//# sourceMappingURL=welcome.js.map