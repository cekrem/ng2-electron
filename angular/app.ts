import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { DataService } from './services/data-service';
import { WelcomeComponent } from './welcome';
import { TournamentComponent } from './tournament/tournament';

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
    },
    {
        path: 'tournament/:id',
        name: 'Tournament',
        component: TournamentComponent
    }
])

export class AppComponent {

}