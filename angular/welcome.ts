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
    private data: DataService;
	private mainWindow: any;
    private userData: UserData;
    public licensedTo: string;
    public tournamentsArray: any; // this works fine with ngfor | async

	constructor(dataService: DataService) {
        this.data = dataService;
		this.mainWindow = Remote.getCurrentWindow();
        this.licensedTo = license.id;
        
        this.loadData();
	}

	ngOnInit() {
		this.mainWindow.show();
	}
    
    loadData() {
        this.tournamentsArray = this.data.loadData()
            .then(data => {
                this.userData = data;
                return data.tournamentsArray;
            });
    }
    
    // observable would be ideal, but whatever...
    loadData2() {
        this.tournamentsArray = this.data.loadDataEmitter();
    }
    
    newTournament() {
        let blankTournament = new Tournament();
        let id = blankTournament.id;
        
        this.userData.tournaments[id] = blankTournament;
        this.data.saveData(this.userData)
            .then(() => this.loadData());
        
        this.openTournament(id);
    }

	openTournament(id) {
        let welcomeWin = Remote.BrowserWindow.getFocusedWindow();
		let win = new Remote.BrowserWindow({ width: 800, height: 600 });
        
		win.loadURL(`file://${__dirname}/index.html#tournament/` + id);
        welcomeWin.destroy();
	}
}
