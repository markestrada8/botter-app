import NextAuth from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter';
// import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    // OAuth authentication providers
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    // Sign in with passwordless email link
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: '2.0', //opt-in to Twitter OAuth 2.0
    }),
  ],
  // callbacks: {},
  // secret: process.env.NEXTAUTH_SECRET,
});
