import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../home';
import { RegisterComponent } from '../register';
import { LoginComponent } from './';
import { AlertComponent } from '../_directives';
import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentication.service'

describe('LoginComponent', () => {
    const routes: Routes = [
        {path: <string> '', component:  AppComponent },
        {path: <string> 'login', component:  LoginComponent },
        {path: <string> 'register', component:  RegisterComponent },
    ];

    let comp: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let compile: HTMLElement;

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
                AuthenticationService
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(LoginComponent);
            comp = fixture.debugElement.componentInstance;
            compile = fixture.debugElement.nativeElement;
            fixture.detectChanges();
        });
    }));

    it('should run successfully as it is first login unit test.', async(() => {
        var a = "mohit";
        expect(a).toEqual("mohit");
    }));

    it(`should have as username label 'Username'`, async() => {
        const usernameLabel = compile.querySelector('label[for="username"]').textContent;
        expect(comp.usernameLabel).toEqual(usernameLabel);
        expect(comp.usernameLabel).toEqual('Username');
    });
    
    it(`should have as password label 'Password'`, async() => {
        const passwordLabel = compile.querySelector('label[for="password"]').textContent;
        expect(comp.passwordLabel).toEqual(passwordLabel);
        expect(comp.passwordLabel).toEqual('Password');
    });

    it(`should set submitted to true`, async() => {
        comp.onSubmit();
        expect(comp.submitted).toBeTruthy()
    });

    it(`should call onSubmit method`, async() => {
        spyOn(comp, 'onSubmit');

        const button = fixture.debugElement.query(By.css('button.btn.btn-primary')).nativeElement;
        button.click()
    });

    it(`form should be invalid if username is ''`, async(() => {
        comp.loginForm.controls['username'].setValue('');
        comp.loginForm.controls['password'].setValue('password');

        expect(comp.loginForm.valid).toBeFalsy();
    }));

    it(`form should be invalid if password is ''`, async(() => {
        comp.loginForm.controls['username'].setValue('');
        comp.loginForm.controls['password'].setValue('password');

        expect(comp.loginForm.valid).toBeFalsy();
    }));

    it(`form should be invalid if password and username both are ''`, async(() => {
        comp.loginForm.controls['username'].setValue('');
        comp.loginForm.controls['password'].setValue('');

        expect(comp.loginForm.valid).toBeFalsy();
    }));

    it(`form should be valid if password and username both are not ''`, async(() => {
        comp.loginForm.controls['username'].setValue('username');
        comp.loginForm.controls['password'].setValue('password');

        expect(comp.loginForm.valid).toBeTruthy();
    }));
});