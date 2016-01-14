declare const nodeRequire;
const Remote = nodeRequire('electron').remote;

import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'welcome',
    template: '<h1>Welcome</h1>'
})

export class WelcomeComponent implements OnInit {
	private mainWindow: any;

	constructor() {
		this.mainWindow = Remote.getCurrentWindow();
	}

	ngOnInit() {
		let menu = Remote.Menu.buildFromTemplate([
			{
				label: 'dc-electron',
				submenu: [{
					label: 'Credits',
					click: function() {
						alert('Built by Christian Ekrem!');
					}
				}]
			}
		]);

		// Remote.Menu.setApplicationMenu(menu);
		this.mainWindow.show();
	}

	newWindow() {
		let win = new Remote.BrowserWindow({ width: 800, height: 600 });
		win.loadURL(`file://${__dirname}/index.html`);
	}
	
	openFile() {
		Remote.dialog.showOpenDialog({ properties: [ 'openFile' ]}, (files) => alert(files[0]));
	}
}
