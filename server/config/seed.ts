import UserDAO from '../api/user/dao/user-dao';
import TemplateDAO from '../api/calculation/dao/template-dao';
import InstanceDAO from '../api/calculation/dao/instance-dao';


/**
 * Users
 */

UserDAO.remove({}, err => {});

let user = {
  email: 'simon@calcium.engineering',
  password: UserDAO['generateHash']('password'),
  firstName: 'Simon',
  lastName: 'Robb'
};
UserDAO['createUser'](user);


/**
 * Templates
 */

TemplateDAO.remove({}, err => {});

let concreteBeamTmpl = {
  "name" : "Concrete beam", 
  "templateUrl" : "/tpl/concrete-beam.html", 
  "inputs" : { 
      "b" : { "required" : true, "default" : 400 }, 
      "d" : { "required" : true, "default" : 600 },
      "c" : { "required" : true, "default" : 30 }, 
      "f_c" : { "required" : true, "default" : 32 }, 
      "f_y" : { "required" : true, "default" : 500 }, 
      "A_st" : { "required" : true } 
  }, 
  "calculation" : "ConcreteBeam" 
}
TemplateDAO['createTemplate'](concreteBeamTmpl);


/**
 * Instances
 */

InstanceDAO.remove({}, err => {});