import NextAuth from "next-auth";

//import Credential from 'next-auth/providers'; //v3
import CredentialProvider from "next-auth/providers/credentials"; //v4

import { verifyPassword } from "../../../helpers/auth";
import { connectDatabase } from "../../../helpers/db-util";

export const authOptions = {
  session: {
    //jwt: true   //v3
    strategy: "jwt", //v4
  },
  // secret: "",
  providers: [
    //next-auth v3 method
    // Providers.Credentials({
    //   async authorize(credentials){
    //     const client = await connectDatabase(process.env.mongodb_database);
    //     const usersCollection = client.db().collection('users');
    //     const user = await usersCollection.findOne({email: credentials.email});
    //     if(!user){
    //       client.close();
    //       throw new Error('no user found!');
    //     }
    //     const isValid = await verifyPassword(credentials.password, user.password);
    //     if(!isValid){
    //       throw new Error('could not log you in');
    //     }
    //     client.close();
    //     return {email: user.email};  //you dont want to return whole user object because it contains the hashed password
    //   }
    // })

    //next-auth v4
    CredentialProvider({
      name: "credentials",
      authorize: async (credentials) => {
        const client = await connectDatabase(process.env.mongodb_database);
        const usersCollection = client.db().collection("users");
        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("no user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error("could not log you in");
        }

        client.close();
        return { email: user.email }; //object merged with actual token -> you dont want to return whole user object because it contains the hashed password
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = { email: token.email }; //added to the session -> this would override session.user
      return session;
    },
  },
};

export default NextAuth(authOptions);
