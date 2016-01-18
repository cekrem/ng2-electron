System.register([], function(exports_1) {
    var ipc, license;
    return {
        setters:[],
        execute: function() {
            ipc = nodeRequire('electron').ipcRenderer;
            exports_1("license", license = ipc.sendSync('licenseQuery'));
        }
    }
});
//# sourceMappingURL=license-service.js.map