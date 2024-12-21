import mongoose, { Schema, Document, Model } from "mongoose";

type Comment = {
  user: string;
  comment: string;
  time: Date;
};

export interface Portfolio extends Document {
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  image: string;
  image_alt: string;
  tags?: string[];
  links?: {
    github?: string;
    liveDemo?: string;
  };
  comments: Comment[];
}

const commentSchema = new Schema<Comment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, default: Date.now },
});

const projectSchema = new Schema<Portfolio>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, default: Date.now },
  description: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  tags: { type: [String], default: [] },
  links: {
    github: { type: String, default: null },
    liveDemo: { type: String, default: null },
  },
  comments: [commentSchema],
});

const ProjectModel: Model<Portfolio> =
  mongoose.models["projects"] || mongoose.model<Portfolio>("projects", projectSchema);

export default ProjectModel;
