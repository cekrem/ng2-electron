import 'rxjs/Rx'; // needed to acces .map and other observable rx-stuff

import { provide } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser'
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import { DataService } from './services/data-service';

import { AppComponent } from './app';

bootstrap(AppComponent, [ROUTER_PROVIDERS,
                         provide(LocationStrategy, { useClass: HashLocationStrategy}), 
                         DataService]);