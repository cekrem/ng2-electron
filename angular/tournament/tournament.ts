declare const nodeRequire;
const Remote = nodeRequire('electron').remote;

import { Component, OnInit} from 'angular2/core';
import { DataService } from '../services/data-service';

@Component({
    selector: 'tournament',
    templateUrl: './angular/tournament/tournament.html'
})

export class TournamentComponent implements OnInit {
    private data: DataService;
    private mainWindow: any;

    constructor(dataService: DataService) {
        this.data = dataService;
		this.mainWindow = Remote.getCurrentWindow();
    }
    ngOnInit() {
        console.log('Tournament init! YAY!');
    }
}