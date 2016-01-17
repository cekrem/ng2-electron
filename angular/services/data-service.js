System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Firebase, DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Firebase = nodeRequire('Firebase');
            DataService = (function () {
                function DataService() {
                    this.baseUrl = 'https://dc-pro.firebaseio.com/uid'; // TODO: get uid from license?
                }
                // this is best practice for getting read only, and works well with async pipe,
                // but how do we save changes back? 
                DataService.prototype.subscribe = function (tuid) {
                    var _this = this;
                    this.ref = new Firebase(this.baseUrl + tuid);
                    this.tournamentFeed = new core_1.EventEmitter();
                    this.ref.on('value', function (snapshot) { return _this.tournamentFeed.emit(snapshot.val()); });
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