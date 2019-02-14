import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent { 
    description: String = 'Angular 6 User Registration and Login Example & Tutorial';
    webLink: String = 'JasonWatmore.com'; 

    constructor(){}
}