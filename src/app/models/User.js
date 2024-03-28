import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

const UserModel = models || {};

export const User = UserModel.User || model("User", UserSchema);

if (!UserModel.User) {
  User.catch((err) => {
    console.error("Error creating User model:", err);
  });
}
