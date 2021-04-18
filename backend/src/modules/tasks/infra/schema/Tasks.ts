import { Schema, model, Document } from "mongoose";

export interface ITaskDTO {
  description: string;
  finished?: boolean;
  created_at: Date;
  finished_at?: Date;
  projectId: string;
}

interface ITaskDocument extends ITaskDTO, Document {}

const TaskSchema = new Schema<ITaskDocument>({
  description: {
    type: String,
    required: true,
  },
  finished: {
    type: Boolean,
    default: false,
  },
  projectId: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
  finished_at: {
    type: Date,
    default: null,
  },
});

export default model<ITaskDocument>("Tasks", TaskSchema);
