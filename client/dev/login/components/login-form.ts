import {
  Component,
  Inject
} from '@angular/core';

import {
  FormBuilder,
  Validators,
  ControlGroup,
  Control
} from '@angular/common';

import {
  Router
} from '@angular/router-deprecated';

import {AuthService} from '../../auth/services/auth-service';

@Component({
  selector: 'login-form',
  templateUrl: 'client/dev/login/templates/login-form.html'
})
export class LoginForm {
  
  loginForm: ControlGroup;
  formError: string;
  
  constructor(@Inject(FormBuilder) fb:FormBuilder, 
    @Inject(Router) private _router: Router, 
    @Inject(AuthService) private _authService: AuthService
  ) {
    
    this.loginForm = fb.group({
      "email": ["", Validators.required],
      "password": ["", Validators.required]
    });
  }
  
  public login(email: string, password: string) {

    this.formError = '';

    if (!this.loginForm.valid) {

      this.formError = 'Please complete all fields';
      return;
    }

    this._authService
        .login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe(
          user => { this._router.navigate(['Dashboard']); },
          message => { this.formError = message; });
  }
}