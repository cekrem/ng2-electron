// Main renderer. For browser renderer, see ./angular

'use strict';
const electron = require('electron');
const ipc = electron.ipcMain;

const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.
const Menu = electron.Menu;

const fs = require('fs');
const path = require('path');
const licensePath = path.join(app.getPath('userData'), 'license.json')

loadLicense();

// Create a blank menu
// Menu.setApplicationMenu(new Menu());

// Report crashes to our server.
// electron.crashReporter.start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // Load welcome screen when no documents are open (like photoshop)
    loadWelcome();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function () {
    // Load welcome screen
    loadWelcome();

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
});

function loadWelcome() {
    mainWindow = new BrowserWindow({ 
        width: 600, 
        height: 300,
        center: true,
        alwaysOnTop: false,
        transparent: false,
        resizable: false,
        frame: false,
        show: true });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
}

function loadLicense() {
    let license; 
    
    try {
        let licenseFromFile = JSON.parse(fs.readFileSync(licensePath, 'utf-8'));
        
        if(licenseFromFile.key == btoa(licenseFromFile.id)) {
            license = licenseFromFile;
        }
        else {
            throw new Error('Invalid license!');
        }
    }
    
    catch(error) {
        console.error(error);
        console.log('Continuing in demo mode!');
        
        license = {
            id: 'demo'
        }
    }
    
    ipc.on('licenseQuery', function(event) {
        event.returnValue = license;
    });
}