import { model, Schema, Document } from "mongoose";

export interface UserDoc extends Document {
  name: { type: string };
  email: { type: string };
  password: { type: string };
  isAdmin?: { type: boolean };
}

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const User = model<UserDoc>("user", userSchema);
