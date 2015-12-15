import { Component } from 'angular2/core';
import { electron } from './electron';

@Component({
  selector: 'my-app',
  templateUrl: './angular/app.html'
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
