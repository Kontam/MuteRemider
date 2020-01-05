"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const passport = require('passport');
const const_1 = __importDefault(require("../const"));
const jwt = require('jsonwebtoken');
const TwitterStrategy = require('passport-twitter');
const passport = require('passport');
exports.passport = passport;
// const twitterConsumerKey = process.env.CONSUMER_KEY;
// const twitterSecretKey = process.env.CONSUMER_SECRET;
const twitterConsumerKey = "AF1zSzO8jstlQbYn7Q5saL7km";
const twitterSecretKey = "OUjeMSBmbxcMJI2PiLEHsrKq4tte7KL9GMGidEa4PqkNyrKTFJ";
const callbackURL = `${const_1.default.BASE_URL}${const_1.default.CALLBACK_SLUG}`;
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});
passport.use(new TwitterStrategy({
    consumerKey: twitterConsumerKey,
    consumerSecret: twitterSecretKey,
    callbackURL: callbackURL,
}, function (token, tokenSecret, profile, done) {
    passport.session.id = profile.id;
    // tokenとtoken_secretをセット
    profile.twitter_token = token;
    profile.twitter_token_secret = tokenSecret;
    done(null, profile);
}));
//# sourceMappingURL=twitterPassport.js.map