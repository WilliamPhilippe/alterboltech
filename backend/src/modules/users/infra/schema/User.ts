import { Schema, model, Document } from "mongoose";

export interface IUserInterfaceDTO {
  name: string;
  username: string;
  password: string;
}

interface IUserInterfaceDocument extends IUserInterfaceDTO, Document {}

const UserSchema = new Schema<IUserInterfaceDocument>({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model<IUserInterfaceDocument>("User", UserSchema);
