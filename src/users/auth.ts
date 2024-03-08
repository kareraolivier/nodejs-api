const passport = require("passport");
import { Request } from "express";
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
      callbackURL: process.env.CALLBACKURL,
      passReqToCallback: true,
    },
    async function (
      request: Request,
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: Function
    ) {
      return done(null, profile);
    }
  )
);
passport.serializeUser(function (user: any, done: any) {
  done(null, user);
});
passport.deserializeUser(function (user: any, done: any) {
  done(null, user);
});
