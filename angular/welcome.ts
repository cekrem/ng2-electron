declare const nodeRequire;
const Remote = nodeRequire('electron').remote;

import { Component, OnInit, EventEmitter } from 'angular2/core';
import { NgIf } from 'angular2/common';
import { Observable } from 'rxjs/Observable';
import { license } from './services/license-service';
import { DataService } from './services/data-service';

@Component({
    selector: 'welcome',
    templateUrl: './angular/welcome.html'
})

export class WelcomeComponent implements OnInit {
	private mainWindow: any;
    public licensedTo: string;
    public userData: Observable<any>;

	constructor(dataService: DataService) {
		this.mainWindow = Remote.getCurrentWindow();
        this.licensedTo = license.id;
        
        this.userData = dataService.getData('');
	}

	ngOnInit() {
		this.mainWindow.show();
	}

	newWindow() {
		let win = new Remote.BrowserWindow({ width: 800, height: 600 });
		win.loadURL(`file://${__dirname}/index.html`);
	}
}
