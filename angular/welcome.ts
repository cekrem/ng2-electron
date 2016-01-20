declare const nodeRequire;
const Remote = nodeRequire('electron').remote;

import { Component, OnInit} from 'angular2/core';
import { NgFor } from 'angular2/common';
import { Observable } from 'rxjs/Observable';
import { DataService } from './services/data-service';
import { license } from './services/license-service';
import { UserData, Tournament } from './services/classes';

@Component({
    selector: 'welcome',
    templateUrl: './angular/welcome.html',
    directives: [NgFor]
})

export class WelcomeComponent implements OnInit {
    private _data: DataService;
	private _mainWindow: any;
    private _userData: UserData;

    public licensedTo: string;
    public tournamentsArray: Array<any>;

	constructor(dataService: DataService) {
        this._data = dataService;
		this._mainWindow = Remote.getCurrentWindow();

        this.licensedTo = license.id;
        this.tournamentsArray = [];
        
        dataService.userData
            .subscribe(data => {
                this._userData = data;
                this.tournamentsArray = data.tournamentsArray;
            });
        
        this.loadData();
	}

	ngOnInit() {
		this._mainWindow.show();
	}
    
    loadData() {
        this._data.loadData();
    }
    
    newTournament() {
        let blankTournament = new Tournament();
        let id = blankTournament.id;
        
        this._userData.tournaments[id] = blankTournament;
        this._data.saveData(this._userData)
            .then(() => this.loadData());
        
        // this.openTournament(id);
    }

	openTournament(id) {
        let welcomeWin = Remote.BrowserWindow.getFocusedWindow();
		let win = new Remote.BrowserWindow({ width: 800, height: 600 });
        
		win.loadURL(`file://${__dirname}/index.html#tournament/` + id);
        welcomeWin.destroy();
	}
}
