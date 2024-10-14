import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../../Domain/Models/User';

const googleClientID = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const googleCallbackURL = process.env.GOOGLE_CALLBACK_URL;

if (!googleClientID || !googleClientSecret || !googleCallbackURL) {
    throw new Error('Google OAuth environment variables are not set');
}

passport.use(new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: googleCallbackURL
}, async (accessToken, refreshToken, profile, done) => {
    try {

        if (!profile.emails || profile.emails.length === 0) {
            throw new Error('No email found in Google profile');
        }

        const email = profile.emails[0].value;
        let user = await User.findOne({ email });
        if (user) {
            return done(null, user);
        }
        const newUser = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: email
        });
        done(null, newUser);
    } catch (error) {
        done(error);
    }
}));

passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

export default passport;