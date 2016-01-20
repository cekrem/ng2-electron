System.register(['angular2/core', 'rxjs/Observable', './file-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1, file_service_1;
    var Firebase, DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (file_service_1_1) {
                file_service_1 = file_service_1_1;
            }],
        execute: function() {
            Firebase = nodeRequire('Firebase');
            DataService = (function () {
                function DataService() {
                    var _this = this;
                    // this._baseUrl = 'https://dc-pro.firebaseio.com/users/' + license.id;
                    this.userData = new Observable_1.Observable(function (observer) {
                        return _this._userDataObserver = observer;
                    }).share();
                    this.userData
                        .subscribe(function (data) { return console.warn(data); });
                }
                // For now, only loads offline data
                // TODO: compare with online, and return most recent
                DataService.prototype.loadData = function (path) {
                    if (path === void 0) { path = ''; }
                    var offlineData = file_service_1.readFile();
                    this._userDataObserver.next(offlineData);
                };
                // For now, only saves offline
                // TODO: write to firebase as well
                DataService.prototype.saveData = function (data, path) {
                    if (path === void 0) { path = ''; }
                    var promise = new Promise(function (resolve, reject) {
                        var writeStatus = file_service_1.writeFile(data);
                        console.log('writeStatus');
                        if (writeStatus) {
                            resolve('Data saved!');
                        }
                        else {
                            reject('Data not saved!');
                        }
                    });
                    return promise;
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DataService);
                return DataService;
            })();
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data-service.js.map