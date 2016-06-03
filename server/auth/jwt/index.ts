
import * as passport from 'passport';
import {Strategy} from 'passport-jwt';
import UserDAO from '../../api/user/dao/user-dao';

export class JwtStrategy {

  static register() {
    
    passport.use('jwt-signup', new Strategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
      }, function(req, email, password, done) {
        
        UserDAO
          ['findOne']({ email: email })
          .then(user => {
            
            if (user) {
              done(null, false);
            }
            
            UserDAO
              ['createUser']({
                email: email,
                password: UserDAO['generateHash'](password)
              })
              .then(user => {
                done(null, user);
              })
              .catch(error => done(error));
          })
          .catch(error => done(error));
      }
    ));
  
    passport.use('jwt-login', new Strategy({
        usernameField: 'email',
        passwordField: 'password'
      }, 
      function(email, password, done) {
        
        UserDAO
          ['findOne']({ email: email })
          .then(user => {
            
            if (!user) {
              done(null, false);
            }
            
            if (!user.validPassword(password)) {
              done(null, false);
            }
            
            done(null, user);
          })
          .catch(error => done(error)); 
      }
    )); 
  }
}