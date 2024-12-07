import mongoose, { Schema } from "mongoose";

type Project = {
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
};

const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, default: new Date() },
  description: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  tags: { type: [String], default: [] }, 
  links: {
    github: { type: String, default: null },
    liveDemo: { type: String, default: null },
  },
});

const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
