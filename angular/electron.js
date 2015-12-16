/// <reference path="./typings/github-electron.d.ts" />
System.register([], function(exports_1) {
    var Electron, Remote;
    return {
        setters:[],
        execute: function() {
            exports_1("Electron", Electron = requireNative('electron'));
            exports_1("Remote", Remote = Electron.remote);
        }
    }
});
//# sourceMappingURL=electron.js.map