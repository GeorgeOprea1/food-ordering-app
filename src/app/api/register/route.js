import { User } from "./../../models/User";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL);

    // Parse request body
    const body = await req.json();
    const pass = body.password;

    // Validate password length
    if (!pass || pass.length < 5) {
      throw new Error("Password must be at least 5 characters");
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(pass, salt);
    body.password = hashedPassword;

    // Create user in the database
    const createdUser = await User.create(body);

    // Return successful response
    return new Response(JSON.stringify(createdUser), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    // Handle errors
    console.error("Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 500, // Internal Server Error
    });
  } finally {
    // Close MongoDB connection
    mongoose.disconnect();
  }
}
