"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var a,i=arguments.length,c=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(c=(3>i?a(c):i>3?a(t,r,c):a(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},__metadata=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},__param=this&&this.__param||function(e,t){return function(r,o){t(r,o,e)}},core_1=require("@angular/core"),common_1=require("@angular/common"),router_deprecated_1=require("@angular/router-deprecated"),auth_service_1=require("../../auth/services/auth-service"),LoginForm=function(){function e(e,t,r){this._router=t,this._authService=r,this.loginForm=e.group({email:["",common_1.Validators.required],password:["",common_1.Validators.required]})}return e.prototype.login=function(e,t){var r=this;this._authService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(function(e){r._router.navigate(["Dashboard"])})},e=__decorate([core_1.Component({selector:"login-form",templateUrl:"client/dev/login/templates/login-form.html"}),__param(0,core_1.Inject(common_1.FormBuilder)),__param(1,core_1.Inject(router_deprecated_1.Router)),__param(2,core_1.Inject(auth_service_1.AuthService)),__metadata("design:paramtypes",[common_1.FormBuilder,router_deprecated_1.Router,auth_service_1.AuthService])],e)}();exports.LoginForm=LoginForm;