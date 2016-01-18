declare const nodeRequire;
const Firebase = nodeRequire('Firebase');

import { Injectable, EventEmitter } from 'angular2/core';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { license } from './license-service';

@Injectable()
export class DataService {
    private http: Http;
    private baseUrl: string;
    
    constructor(http: Http) {
        this.http = http;
        this.baseUrl = 'https://dc-pro.firebaseio.com/users/' + license.id;
    }
    
    getData(path: string = '') {
        return this.http.get(this.baseUrl + path + '.json')
            .map((res) => res.json())
    }

    // not quite working because of firebase crap, see downmost comment
    subscribeTo(path: string = '') {
        let ref = new Firebase(this.baseUrl + path);
        let emitter: EventEmitter<any> = new EventEmitter();
        let fakeEmitter = new EventEmitter();

        ref.on('value', snapshot =>  {
            emitter.emit({snapshot.val()});
        });
        
        // This sucks, but I have yet to find out how to do change detection on the firebase callback otherwise!
        // setInterval(()=> fakeEmitter.emit(Math.random()), 1000);
        
        return emitter;
    }    
}