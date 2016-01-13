declare const nodeRequire;
const Remote = nodeRequire('electron').remote;

import { Component, OnInit } from 'angular2/core';

@Component({
	selector: 'my-app',
	templateUrl: './angular/app.html'
})
// @RouteConfig([
//   { path: '/', as: 'Main', component: MainComponent }
// ])

export class AppComponent implements OnInit {
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
		win.loadURL(`file://${__dirname}/index.html#test`);
	}
	
	openFile() {
		Remote.dialog.showOpenDialog({ properties: [ 'openFile' ]}, (files) => alert(files[0]));
	}
}
