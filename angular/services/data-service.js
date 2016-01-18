System.register(['angular2/core', 'angular2/http', './license-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, license_service_1;
    var Firebase, DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (license_service_1_1) {
                license_service_1 = license_service_1_1;
            }],
        execute: function() {
            Firebase = nodeRequire('Firebase');
            DataService = (function () {
                function DataService(http) {
                    this.http = http;
                    this.baseUrl = 'https://dc-pro.firebaseio.com/users/' + license_service_1.license.id;
                }
                DataService.prototype.getData = function (path) {
                    if (path === void 0) { path = ''; }
                    return this.http.get(this.baseUrl + path + '.json')
                        .map(function (res) { return res.json(); });
                };
                // not quite working because of firebase crap, see downmost comment
                DataService.prototype.subscribeTo = function (path) {
                    if (path === void 0) { path = ''; }
                    var ref = new Firebase(this.baseUrl + path);
                    var emitter = new core_1.EventEmitter();
                    var fakeEmitter = new core_1.EventEmitter();
                    ref.on('value', function (snapshot) {
                        emitter.emit({ snapshot: .val() });
                    });
                    // This sucks, but I have yet to find out how to do change detection on the firebase callback otherwise!
                    // setInterval(()=> fakeEmitter.emit(Math.random()), 1000);
                    return emitter;
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataService);
                return DataService;
            })();
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data-service.js.map