import mongoose, { Schema, Document, Model } from "mongoose";

type Comment = {
  user: string;
  comment: string;
  time: Date;
};

export interface Blog extends Document {
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  image: string;
  image_alt: string;
  comments: Comment[];
}

const commentSchema = new Schema<Comment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, default: Date.now },
});

const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, default: Date.now },
  description: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  comments: [commentSchema],
});

const BlogModel: Model<Blog> =
  mongoose.models["blogs"] || mongoose.model<Blog>("blogs", blogSchema);

export default BlogModel;
