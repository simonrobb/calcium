import * as express from 'express';
import {AuthRoutes} from '../auth/auth-routes';
import {UserRoutes} from '../api/user/routes/user-routes';
import {CalculationRoutes} from '../api/calculation/routes/calculation-routes';
import {InstanceRoutes} from '../api/calculation/routes/instance-routes';
import {TemplateRoutes} from '../api/calculation/routes/template-routes';
import {StaticDispatcher} from '../commons/static/index';

export class Routes {
  
   static init(app: express.Application, router: express.Router) {
     
     AuthRoutes.init(router);
     UserRoutes.init(router);
     CalculationRoutes.init(router);
     InstanceRoutes.init(router);
     TemplateRoutes.init(router);
     
     router
       .route('*')
       .get(StaticDispatcher.sendIndex);

     app.use('/', router);
   }
}
