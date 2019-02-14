import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './'
import { HomeComponent } from './home';
import { RegisterComponent } from './register';
import { LoginComponent } from './login';
import { AlertComponent } from './_directives';
import { AlertService } from './_services/alert.service';

describe('AppComponent', () => {
    const routes: Routes = [
        {path: <string> '', component:  AppComponent },
        {path: <string> 'login', component:  LoginComponent },
        {path: <string> 'register', component:  RegisterComponent },
    ];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                HomeComponent,
                RegisterComponent,
                LoginComponent,
                AlertComponent
            ],
            imports: [
                RouterModule.forRoot(routes),
                ReactiveFormsModule
            ],
            providers: [
                {provide: APP_BASE_HREF, useValue: '/'},
                AlertService
            ]
        }).compileComponents();
    }));

    it('should run successfully as it is my first unit test.', async(() => {
        var a = "mohit";
        expect(a).toEqual("mohit");
    }));

    it(`should have as description 'Angular 6 User Registration and Login Example & Tutorial'`, async() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        const compile = fixture.debugElement.nativeElement;
        expect(app.description).toEqual('Angular 6 User Registration and Login Example & Tutorial');
    });

    it(`should have as web-link 'JasonWatmore.com'`, async() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        const compile = fixture.debugElement.nativeElement;
        expect(app.webLink).toEqual('JasonWatmore.com');
    });
});