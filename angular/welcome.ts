declare const nodeRequire;
const Remote = nodeRequire('electron').remote;

import { Component, OnInit } from 'angular2/core';
import { license } from './app';

@Component({
    selector: 'welcome',
    templateUrl: './angular/welcome.html'
})

export class WelcomeComponent implements OnInit {
	private mainWindow: any;
    public licensedTo: string;

	constructor() {
		this.mainWindow = Remote.getCurrentWindow();
        this.licensedTo = license.id;
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
        console.log(license);
	}

	newWindow() {
		let win = new Remote.BrowserWindow({ width: 800, height: 600 });
		win.loadURL(`file://${__dirname}/index.html`);
	}
	
	openFile() {
		Remote.dialog.showOpenDialog({ properties: [ 'openFile' ]}, (files) => alert(files[0]));
	}
}
