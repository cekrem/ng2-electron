declare const nodeRequire;
const Firebase = nodeRequire('Firebase');

import { Injectable, EventEmitter } from 'angular2/core';
import { Observable } from 'rxjs/Observable';

import { license } from './license-service';
import { readFile, writeFile } from './file-service';
import { UserData } from './classes';

@Injectable()
export class DataService {
    // private _baseUrl: string;
    private _userDataObserver: any;
    
    public userData: Observable<UserData>;
    
    constructor() {
        // this._baseUrl = 'https://dc-pro.firebaseio.com/users/' + license.id;
        this.userData = new Observable(observer => 
            this._userDataObserver = observer).share();
        
        this.userData
            .subscribe(data => console.warn(data));
    }
    
    // For now, only loads offline data
    // TODO: compare with online, and return most recent
    loadData(path: string = '') {        
        let offlineData = readFile();
        
        this._userDataObserver.next(offlineData);
    }
    
    // For now, only saves offline
    // TODO: write to firebase as well
    saveData(data, path: string = ''): Promise<string> {
        let promise = new Promise((resolve, reject) => {
            let writeStatus = writeFile(data);
            console.log('writeStatus');
            
            if(writeStatus) {
                resolve('Data saved!')
            }
            else {
                reject('Data not saved!');
            }
        });
        
        return promise;
    }
}