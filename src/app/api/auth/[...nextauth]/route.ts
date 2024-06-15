import AXIOSSERVER from "@/utils/axiosConfig";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "custom-email",
      id: "custom-email",
      type: "credentials",
      async authorize(credentials) {
        try {
          const response = await  AXIOSSERVER.post('/login', credentials as AuthCredentials)
          return response as never;
        } catch (error: any) {
          //Throw error to catch error in toast 
          throw new Error((error?.error as string) || "Wrong Credentials");
        }
      },
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
    }),
  ],
  callbacks: {

    // return true status = 200 || false status = 401 with error 
    signIn({ user }) {
      return user ? true : false;
    },

    jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    session({ session, token }) {
      if (token && token.user) {
        session.user = token.user;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
