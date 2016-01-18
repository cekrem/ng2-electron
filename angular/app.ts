import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { DataService } from './services/data-service';
import { WelcomeComponent } from './welcome';

@Component({
	selector: 'my-app',
	templateUrl: './angular/app.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/welcome',
        name: 'Welcome',
        component: WelcomeComponent,
        useAsDefault: true
    }
])

export class AppComponent {
    
}