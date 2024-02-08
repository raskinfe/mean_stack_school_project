import mongoose, { Schema } from "mongoose";

interface IIssue {
  issuer_name: string;
  issuer_email: string;
  subject: string;
  body: string;
  status: string;
  time: Date;
}

const issueSchema = new Schema<IIssue>({
  issuer_name: {
    type: String,
    required: true,
  },
  issuer_email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "open",
  },
  time: Date,
});

export const Issue = mongoose.model("Issue", issueSchema);
