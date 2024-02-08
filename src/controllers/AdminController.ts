import { Request, Response } from "express";
import { User } from "../models/User";

export class AdminController {
  static async getUsers(req: Request, res: Response) {
    const users = await User.find({}).sort({ name: "ascending" }).exec();

    if (users == null) {
      return res.status(404).json({
        success: false,
        message: "No users found",
      });
    }

    return res.json({
      success: true,
      users,
    });
  }

  static async updateUserRole(req: Request, res: Response) {
    await User.findByIdAndUpdate(req.params.id, {
      $set: { role: req.body.role },
    })
      .then((user) => {
        return res.json({
          success: true,
          message: user,
        });
      })
      .catch((error) => {
        return res.json({
          success: false,
          message: error.message,
        });
      });
  }
}
