import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { SocialAuthService } from 'angularx-social-login';
import { AppModule } from '../app.module';
import { Observable } from 'rxjs';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: SocialAuthService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [{ provide: SocialAuthService }],
      imports: [AppModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.get(SocialAuthService);
  });

  it('Service instance chek ', () => {
    expect(authService instanceof SocialAuthService).toBeTruthy();
  });
  it('Service instance chek by Inject Service ', inject([SocialAuthService], (injectedService: SocialAuthService) => {
    expect(injectedService).toBeTruthy();
    expect(injectedService instanceof SocialAuthService).toBeTruthy();
  }));
  it('sign in with google ', () => {
    expect(component.signInWithGoogle()).toBeUndefined();
  });
});
