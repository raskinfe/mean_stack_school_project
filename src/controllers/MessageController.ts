import { Request, Response } from "express";
import { Message } from "../models/Message";

export class MessageController {
  static async getMessages(req: Request, res: Response) {
    let messages: any;
    if (req.params.sender != "null") {
      messages = await Message.find({
        $or: [
          { reciever: req.params.id, sender: req.params.sender },
          { reciever: req.params.sender, sender: req.params.id },
        ],
      })
        .sort({
          time: "ascending",
        })
        .exec();
    } else {
      messages = await Message.aggregate([
        {
          $match: {
            reciever: req.params.id,
          },
        },
        {
          $group: {
            _id: "$group_index",
            sender_name: {
              $push: "$sender_name",
            },
            sender: {
              $push: "$sender",
            },
            avatar: {
              $push: "$sender_avatar",
            },
            time: {
              $push: "$time",
            },
          },
        },
      ])
        .sort({ time: "ascending" })
        .exec();
    }

    if (messages == null) {
      return res.status(404).json({
        success: false,
        message: "No messages found",
      });
    }

    return res.json({
      success: true,
      messages,
    });
  }
}
