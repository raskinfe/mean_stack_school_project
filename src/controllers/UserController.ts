import { User } from "../models/User";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { Message } from "../models/Message";
import { Post } from "../models/Post";
import { transporter } from "../config/mail_service";

export class UserController {
  constructor() {}

  static async registerUser(req: Request, res: Response) {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });

    /**
     * Hashing the plain password before sabing the user to the db
     */
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);

    newUser.password = hash;

    try {
      await newUser.save();
      res.json({
        success: true,
        message: "user created successfuly",
      });
    } catch (error) {
      if (error instanceof Error) {
        res.json({
          success: false,
          message: error.message,
        });
      }
    }
  }

  static async authenticate(req: Request, res: Response) {
    const user: any = await UserController.getUserByEmail(req.body.email);

    if (user == null) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    const isMatch = await UserController.comparePassword(
      req.body.password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "wrong Password!",
      });
    }

    const _user = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    const secret: any = process.env.SECRET_KEY;
    const token = jsonwebtoken.sign({ _user }, secret, { expiresIn: 7200 });

    return res.json({
      success: true,
      token: `jwt ${token}`,
      user: _user,
    });
  }

  /**
   * Returns user profile
   */

  static async getProfile(req: Request, res: Response) {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
    });
  }

  static async updateProfile(req: Request, res: Response) {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
      });
      return res.json({
        success: true,
        message: "successfully updated",
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.json({
          success: false,
          message: error.message,
        });
      }
    }
  }

  static async destroy(req: Request, res: Response) {
    User.deleteOne({ _id: req.body.id })
      .then(async (acknowledged) => {
        await Message.deleteOne({
          $or: [
            {
              sender: req.body.id,
            },
            {
              reciever: req.body.id,
            },
          ],
        })
          .then(async (success) => {
            await Post.deleteOne({ user_id: req.body.id }).then((result) => {
              return res.json({
                success: true,
              });
            });
          })
          .catch((error) => {
            res.status(404).json({
              success: false,
              message: error.message,
            });
          });
      })
      .catch((error) => {
        res.status(404).json({
          success: false,
          message: error.message,
        });
      });
  }

  static async updatePassword(req: Request, res: Response) {
    const user = await User.findById(req.params.id);
    if (user === null) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }
    const isMatch = await UserController.comparePassword(
      req.body.old_password,
      user.password
    );

    if (!isMatch) {
      return res.json({
        status: false,
        message: "Password doesn't match",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.new_password, salt);
    await User.findByIdAndUpdate(req.params.id, { password: hash });
    return res.json({
      success: true,
      message: "Update successful",
    });
  }

  static getUserById(id: string, callback: Function) {
    User.findById(id, callback);
  }

  static async getUserByEmail(_email: string) {
    return await User.findOne({ email: _email });
  }

  static async comparePassword(plainPassword: string, hashedPassword: string) {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }

  static async resetPassword(req: Request, res: Response) {
    const user = await User.findOne({ email: req.params.email });
    if (user == null) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const randomString = Math.random().toString(36).slice(-8);
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(randomString, salt);

    try {
      await User.findByIdAndUpdate(user._id, { $set: { password: hash } });
      await transporter.sendMail({
        from: "noreply@example.com",
        to: req.params.email,
        subject: "Password reset",
        html: `<p>you have requested a password reset. here is your new password <strong>${randomString}</strong>.
				Please don't forget to change your password. If you didn't request this service please contact the admin.</p>`,
      });
      return res.json({
        success: true,
        message: "Password has been sent via email successfully!",
      });
    } catch (error: any) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
}
