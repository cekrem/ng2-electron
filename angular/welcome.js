System.register(['angular2/core', 'angular2/common', './services/data-service', './services/license-service', './services/classes'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, data_service_1, license_service_1, classes_1;
    var Remote, WelcomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (license_service_1_1) {
                license_service_1 = license_service_1_1;
            },
            function (classes_1_1) {
                classes_1 = classes_1_1;
            }],
        execute: function() {
            Remote = nodeRequire('electron').remote;
            WelcomeComponent = (function () {
                function WelcomeComponent(dataService) {
                    var _this = this;
                    this._data = dataService;
                    this._mainWindow = Remote.getCurrentWindow();
                    this.licensedTo = license_service_1.license.id;
                    this.tournamentsArray = [];
                    dataService.userData
                        .subscribe(function (data) {
                        _this._userData = data;
                        _this.tournamentsArray = data.tournamentsArray;
                    });
                    this.loadData();
                }
                WelcomeComponent.prototype.ngOnInit = function () {
                    this._mainWindow.show();
                };
                WelcomeComponent.prototype.loadData = function () {
                    this._data.loadData();
                };
                WelcomeComponent.prototype.newTournament = function () {
                    var _this = this;
                    var blankTournament = new classes_1.Tournament();
                    var id = blankTournament.id;
                    this._userData.tournaments[id] = blankTournament;
                    this._data.saveData(this._userData)
                        .then(function () { return _this.loadData(); });
                    // this.openTournament(id);
                };
                WelcomeComponent.prototype.openTournament = function (id) {
                    var welcomeWin = Remote.BrowserWindow.getFocusedWindow();
                    var win = new Remote.BrowserWindow({ width: 800, height: 600 });
                    win.loadURL(("file://" + __dirname + "/index.html#tournament/") + id);
                    welcomeWin.destroy();
                };
                WelcomeComponent = __decorate([
                    core_1.Component({
                        selector: 'welcome',
                        templateUrl: './angular/welcome.html',
                        directives: [common_1.NgFor]
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