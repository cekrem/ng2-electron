declare const nodeRequire;
const Firebase = nodeRequire('Firebase');

import { Injectable, EventEmitter } from 'angular2/core';

@Injectable()
export class DataService {
    private baseUrl: string;
    private ref: any;
    public tournamentFeed: EventEmitter<any>;
    
    constructor() {
        this.baseUrl = 'https://dc-pro.firebaseio.com/uid'; // TODO: get uid from license?
    }
    
    // this is best practice for getting read only, and works well with async pipe,
    // but how do we save changes back? 
    subscribe(tuid: string) { 
        this.ref = new Firebase(this.baseUrl + tuid);
        this.tournamentFeed = new EventEmitter();
        
        this.ref.on('value', snapshot => this.tournamentFeed.emit(snapshot.val()));
    }
}