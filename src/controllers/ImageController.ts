import { Request, Response } from "express";
import { gfs, displayImage } from "../config/file_upload";
import { User } from "../models/User";

export class ImageController {
  static async storeProfileImage(req: Request, res: Response) {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        avatar: req.file?.filename,
      });
      res.json({
        success: true,
        file: req.file,
      });
    } catch (error) {
      res.json({
        success: false,
        file: req.file,
      });
    }
  }

  static async getProfilePicture(req: Request, res: Response) {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const file = await gfs.files.findOne({ filename: user.avatar });

    if (file == null) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    displayImage(res, file);
  }

  static async getPostImage(req: Request, res: Response) {
    const image = await gfs.files.findOne({ filename: req.params.name });

    if (image == null) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    displayImage(res, image);
  }
}
