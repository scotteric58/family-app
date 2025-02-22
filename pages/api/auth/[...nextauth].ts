// pages/api/auth/[...nextauth].ts

import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // For demonstration purposes, allow any non-empty credentials.
        // In production, replace this with your own user validation logic.
        if (credentials?.username && credentials?.password) {
          return { id: "1", name: credentials.username, email: `${credentials.username}@example.com` };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async session({ session }) {
      // Simply return the session without adding custom properties.
      return session;
    },
    async jwt({ token }) {
      return token;
    }
  }
};

export default NextAuth(authOptions);
