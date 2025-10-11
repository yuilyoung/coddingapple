//import { connectDB } from "@/util/database"; // export 형식 차이

import connectDB from "@/util/database";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23liDbRLQNfckJKlCX',
      clientSecret: '4318e42eef1183816524782d7a8c03fd344752aa',
    }),
  ],
  secret : 'qwer1234',
  adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions);
