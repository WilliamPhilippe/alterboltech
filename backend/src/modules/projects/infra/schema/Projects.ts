import { Schema, model, Document } from "mongoose";

export interface IProjectDTO {
  name: string;
  ownerId: string;
}

interface IProjectDocument extends IProjectDTO, Document {}

const ProjectSchema = new Schema<IProjectDocument>({
  name: {
    type: String,
    required: true,
  },
  ownerId: {
    type: String,
    required: true,
  },
});

export default model<IProjectDocument>("Projects", ProjectSchema);
