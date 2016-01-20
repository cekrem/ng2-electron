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
    private _data: DataService;
    private _mainWindow: any;
    
    public id: string;
    public loaded: boolean;

    constructor(dataService: DataService, params: RouteParams) {
        this.id = params.get('id');
        this._data = dataService;
		this._mainWindow = Remote.getCurrentWindow();
    }
    
    ngOnInit() {
        console.log('Tournament init! YAY!' + this.id);
        this.loaded = true;
    }
}