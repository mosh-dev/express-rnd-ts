import * as passport from 'passport';
import {Strategy, StrategyOptions} from 'passport-google-oauth20';

const OPTIONS: StrategyOptions = {
  clientID: '829918182669-ah42pu7ffopdeuo0t0ada9v833lcah32.apps.googleusercontent.com',
  clientSecret: '12HmBRT_ML9JuIsSwh6S0G-g'
};

function verifyCb() {
  console.log('GoogleStrategy Verify');
}

passport
  .use(new Strategy(OPTIONS, verifyCb));
