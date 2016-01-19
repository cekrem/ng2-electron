System.register([], function(exports_1) {
    var UserData, Tournament;
    return {
        setters:[],
        execute: function() {
            UserData = (function () {
                function UserData(data) {
                    if (data === void 0) { data = { tournaments: {}, settings: {} }; }
                    this.tournaments = data.tournaments;
                    this.settings = data.settings;
                }
                Object.defineProperty(UserData.prototype, "tournamentsArray", {
                    get: function () {
                        var array = [];
                        for (var tournament in this.tournaments) {
                            array.push(this.tournaments[tournament]);
                        }
                        return array;
                    },
                    enumerable: true,
                    configurable: true
                });
                return UserData;
            })();
            exports_1("UserData", UserData);
            Tournament = (function () {
                function Tournament(name) {
                    if (name === void 0) { name = 'New tournament'; }
                    this.name = name;
                    this.created = Date.now();
                    this.id = this.created.toString(32);
                }
                return Tournament;
            })();
            exports_1("Tournament", Tournament);
        }
    }
});
//# sourceMappingURL=classes.js.map