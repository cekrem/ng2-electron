declare const nodeRequire;
const Firebase = nodeRequire('Firebase');

import { Injectable, EventEmitter } from 'angular2/core';

import { license } from './license-service';
import { readFile, writeFile } from './file-service';
import { UserData } from './classes';

@Injectable()
export class DataService {
    private baseUrl: string;
    public baseRef: Firebase;
    public userData: EventEmitter<UserData>;
    
    constructor() {
        this.baseUrl = 'https://dc-pro.firebaseio.com/users/' + license.id;
        this.baseRef = new Firebase(this.baseUrl);
        this.userData = new EventEmitter();
    }
    
    // For now, only loads offline data
    // TODO: compare with online, and return most recent
    loadData(path: string = ''): Promise<UserData> {        
        let promise = new Promise((resolve, reject) => {
            let offlineData = readFile();
            console.warn(offlineData);
            
            resolve(offlineData);
        });
        
        return promise;
    }
    
    // this would be better, but let's not dwell...
    loadDataEmitter(path: string = ''): EventEmitter<UserData> {
        let offlineData = readFile(path);
        
        this.userData.emit(offlineData);
        
        return this.userData;
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