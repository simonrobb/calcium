
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import {HeaderCmp} from '../../header/components/header-cmp';
import {DashboardView} from '../../dashboard/components/dashboard-view';
import {InstanceView} from '../../instance/components/instance-view';
import {LoginForm} from '../../login/components/login-form';
import {AuthService} from '../../auth/services/auth-service';

import 'rxjs/Rx'

@Component({
  selector: 'application-cmp',
  directives: [HeaderCmp, ROUTER_DIRECTIVES],
  providers: [AuthService],
  templateUrl: 'client/dev/application/templates/application-cmp.html',
})
@RouteConfig([
  { name: 'Login', path: '/login', component: LoginForm },
  { name: 'Dashboard', path: '/dashboard', component: DashboardView },
  { name: 'Instance', path: '/calculation/:id', component: InstanceView }
])
export class ApplicationCmp {
  
}