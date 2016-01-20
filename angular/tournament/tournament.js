System.register(['angular2/core', 'angular2/router', '../services/data-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, data_service_1;
    var Remote, TournamentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            Remote = nodeRequire('electron').remote;
            TournamentComponent = (function () {
                function TournamentComponent(dataService, params) {
                    this.id = params.get('id');
                    this._data = dataService;
                    this._mainWindow = Remote.getCurrentWindow();
                }
                TournamentComponent.prototype.ngOnInit = function () {
                    console.log('Tournament init! YAY!' + this.id);
                    this.loaded = true;
                };
                TournamentComponent = __decorate([
                    core_1.Component({
                        selector: 'tournament',
                        templateUrl: './angular/tournament/tournament.html'
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService, router_1.RouteParams])
                ], TournamentComponent);
                return TournamentComponent;
            })();
            exports_1("TournamentComponent", TournamentComponent);
        }
    }
});
//# sourceMappingURL=tournament.js.map