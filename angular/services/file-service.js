System.register(['./classes'], function(exports_1) {
    var classes_1;
    var fs, path, app;
    function readFile(file) {
        if (file === void 0) { file = 'userData'; }
        var filePath = path.join(app.getPath('userData'), file + '.json');
        var fileData;
        try {
            fileData = JSON.parse(fs.readFileSync(filePath));
        }
        catch (error) {
            return new classes_1.UserData();
        }
        return new classes_1.UserData(fileData);
    }
    exports_1("readFile", readFile);
    function writeFile(data, file) {
        if (file === void 0) { file = 'userData'; }
        var filePath = path.join(app.getPath('userData'), file + '.json');
        var jsonData = JSON.stringify(data);
        try {
            fs.writeFileSync(filePath, jsonData);
        }
        catch (error) {
            console.error(error);
            return false;
        }
        return true;
    }
    exports_1("writeFile", writeFile);
    return {
        setters:[
            function (classes_1_1) {
                classes_1 = classes_1_1;
            }],
        execute: function() {
            fs = nodeRequire('fs');
            path = nodeRequire('path');
            app = nodeRequire('electron').remote.app;
        }
    }
});
//# sourceMappingURL=file-service.js.map