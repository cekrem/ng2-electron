declare const nodeRequire;
const Remote = nodeRequire('electron').remote;

import { Component, OnInit} from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { DataService } from '../services/data-service';

@Component({
    selector: 'tournament',
    templateUrl: './angular/tournament/tournament.html'
})

export class TournamentComponent implements OnInit {
    private data: DataService;
    private mainWindow: any;
    public id: string;

    constructor(dataService: DataService, params: RouteParams) {
        this.id = params.get('id');
        this.data = dataService;
		this.mainWindow = Remote.getCurrentWindow();
    }
    ngOnInit() {
        console.log('Tournament init! YAY!' + this.id);
    }
}