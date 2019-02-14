import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../home';
import { LoginComponent } from '../login';
import { RegisterComponent } from './';
import { AlertComponent } from '../_directives';
import { AlertService } from '../_services/alert.service';
import { UserService } from '../_services/user.service'

describe('RegisterComponent', () => {
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
                ReactiveFormsModule,
                HttpClientModule
            ],
            providers: [
                {provide: APP_BASE_HREF, useValue: '/'},
                AlertService,
                UserService
            ]
        }).compileComponents();
    }));

    it('should run successfully as it is first register unit test.', async(() => {
        var a = "mohit";
        expect(a).toEqual("mohit");
    }));

    it(`should have as username label 'Username'`, async() => {
        const fixture = TestBed.createComponent(RegisterComponent);
        const register = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        const compile = fixture.debugElement.nativeElement;
        const usernameLabel = compile.querySelector('label[for="username"]').textContent;
        expect(register.usernameLabel).toEqual(usernameLabel);
        expect(register.usernameLabel).toEqual('Username');
    });
    
    it(`should have as password label 'Password'`, async() => {
        const fixture = TestBed.createComponent(RegisterComponent);
        const register = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        const compile = fixture.debugElement.nativeElement;
        const passwordLabel = compile.querySelector('label[for="password"]').textContent;
        
        expect(register.passwordLabel).toEqual(passwordLabel);
        expect(register.passwordLabel).toEqual('Password');
    })

    it(`should have as firstName label 'First Name'`, async() => {
        const fixture = TestBed.createComponent(RegisterComponent);
        const register = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        const compile = fixture.debugElement.nativeElement;
        const firstNameLabel = compile.querySelector('label[for="firstName"]').textContent;
        
        expect(register.firstNameLabel).toEqual(firstNameLabel);
        expect(register.firstNameLabel).toEqual('First Name');
    });

    it(`should have as lastName label 'Last Name'`, async() => {
        const fixture = TestBed.createComponent(RegisterComponent);
        const register = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        const compile = fixture.debugElement.nativeElement;
        const lastNameLabel = compile.querySelector('label[for="lastName"]').textContent;
        
        expect(register.lastNameLabel).toEqual(lastNameLabel);
        expect(register.lastNameLabel).toEqual('Last Name');
    });
});