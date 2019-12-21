const passport = require('passport');
const TwitterStrategy = require('passport-twitter');
const Const = require('../const');

const twitterConsumerKey = process.env.CONSUMER_KEY;
const twitterSecretKey = process.env.CONSUMER_SECRET;
const callbackURL = `${Const.BASE_URL}${Const.API_CALLBACK_SLUG}`;

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new TwitterStrategy({
    consumerKey: twitterConsumerKey,
    consumerSecret: twitterSecretKey,
    callbackURL: callbackURL,
  },
  function(token, tokenSecret, profile, done) {
    passport.session.id = profile.id;

    // tokenとtoken_secretをセット
    profile.twitter_token = token;
    profile.twitter_token_secret = tokenSecret;

    done(null, profile);
  }
));

module.exports = { passport: passport };
