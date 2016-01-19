declare const nodeRequire;

const fs = nodeRequire('fs');
const path = nodeRequire('path');
const app = nodeRequire('electron').remote.app;

import { UserData } from './classes';

export function readFile (file: string = 'userData'): UserData {    
    let filePath = path.join(app.getPath('userData'), file + '.json');
    let fileData;
    
    try {
        fileData = JSON.parse(fs.readFileSync(filePath));
    } catch (error) {
        return new UserData();
    }
    
    return new UserData(fileData);
}

export function writeFile (data, file: string = 'userData'): boolean {
    let filePath = path.join(app.getPath('userData'), file + '.json');
    let jsonData = JSON.stringify(data);
    
    try {
        fs.writeFileSync(filePath, jsonData);
    } catch (error) {
        console.error(error);
        return false;
    }
    
    return true;
}