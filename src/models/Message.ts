import mongoose, { Schema } from "mongoose";

interface IMessage {
  body: string;
  reciever: string;
  sender: string;
  sender_name: string;
  sender_avatar?: string;
  time: Date;
  group_index: string;
}

const messageSchema = new Schema<IMessage>({
  body: String,
  reciever: String,
  sender: String,
  sender_name: String,
  time: Date,
  group_index: String,
  sender_avatar: String,
});

export const Message = mongoose.model("Message", messageSchema);
