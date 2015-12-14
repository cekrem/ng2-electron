import { Component, EventEmitter, NgIf } from 'angular2/angular2';
declare const electron: any;

@Component({
  selector: 'my-app',
  templateUrl: './app/app.html'
})
// @RouteConfig([
//   { path: '/', as: 'Main', component: MainComponent }
// ])

export class AppComponent {
  constructor () {
    const mainWindow = electron.remote.getCurrentWindow();
    
    mainWindow.show();
  }
}
