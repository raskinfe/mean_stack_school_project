import mongoose, { Schema } from "mongoose";

interface IPost {
  title: string;
  category: string;
  description: Text;
  price?: string;
  date: Date;
  status: number;
  image?: string[];
  user_id: string;
  user_name: string;
}

const postSchema = new Schema<IPost>({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: String,
  date: Date,
  status: {
    type: Number,
    default: 1,
  },
  image: {
    type: Array,
    default: null,
  },
  user_id: String,
  user_name: String,
});

export const Post = mongoose.model("Post", postSchema);
