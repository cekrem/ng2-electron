import 'rxjs/Rx' 
import { bootstrap } from 'angular2/platform/browser'
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

import { DataService } from './services/data-service';

import { AppComponent } from './app';

bootstrap(AppComponent, [ROUTER_PROVIDERS, DataService, HTTP_PROVIDERS]);