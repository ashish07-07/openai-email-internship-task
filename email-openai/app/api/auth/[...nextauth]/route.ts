import NextAuth from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: {
          label: "email",
          type: "text",
          placeholder: "bkashishh07@gmail.com",
        },
        password: { label: "Password", type: "text", placeholder: "123456" },
      },
      async authorize(credentials: any) {
        const username = credentials.username;
        const password = credentials.password;
      },
    }),
  ],
});

export const GET = handler;
export const POST = handler;
