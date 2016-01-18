declare const nodeRequire;
const Firebase = nodeRequire('Firebase');

import { Injectable, EventEmitter } from 'angular2/core';
import { Observable } from 'rxjs/Observable';

import { license } from './license-service';

@Injectable()
export class DataService {
    private baseUrl: string;
    public activeRef: Firebase;
    
    constructor() {
        this.baseUrl = 'https://dc-pro.firebaseio.com/users/' + license.id;
    }
    
    connectTo(path: string = '') {
        this.activeRef = new Firebase(this.baseUrl + path);
    }
    
    getData(path: string = '') {
        let ref = new Firebase(this.baseUrl + path);
        
        let promise = new Promise((resolve, reject) => {
            ref.on('value', snapshot => {
               resolve(snapshot.val()); 
            });
        })
        
        return promise;
    }

    // not quite working because of firebase crap, see downmost comment
    subscribeTo(path: string = '') {
        let ref = new Firebase(this.baseUrl + path);
        
        let observable = Observable.create(observer => {
            ref.on('value', snapshot => {
                observer.next(snapshot.val());
                this.cdRef.markForCheck();
            });
        })
        
        // This sucks, but I have yet to find out how to do change detection on the firebase callback otherwise!
        // setInterval(()=> fakeEmitter.emit(Math.random()), 1000);
        
        return observable;
    }    
}