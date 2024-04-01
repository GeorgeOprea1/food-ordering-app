import mongoose from "mongoose";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"; // Import bcrypt for password comparison
import { User } from "../../../models/User";

mongoose.connect(process.env.MONGO_URL); // Connect to MongoDB

const handler = NextAuth({
  secret: process.env.SECRET,

  providers: [
    CredentialsProvider({
      name: "credentials",
      id: "credentials",

      credentials: {
        username: {
          label: "Email",
          type: "text",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const { email, password } = credentials;

        try {
          const user = await User.findOne({ email });
          if (!user) return null;

          const passwordOk = bcrypt.compareSync(password, user.password);
          if (!passwordOk) return null;

          return user;
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
