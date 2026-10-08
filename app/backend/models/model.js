import mongoose from "mongoose";
import { hashPassword, verifyPassword } from "../services/authService.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 80,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 254,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(_document, value) {
        delete value.password;
        delete value.__v;
        return value;
      },
    },
  },
);

userSchema.pre("save", async function hashPasswordBeforeSave() {
  if (this.isModified("password")) {
    this.password = await hashPassword(this.password);
  }
});

userSchema.methods.comparePassword = function comparePassword(candidate) {
  return verifyPassword(candidate, this.password);
};

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
