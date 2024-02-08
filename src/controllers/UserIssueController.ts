import { Request, Response } from "express";
import { Issue } from "../models/Issue";

export class UserIssueController {
  static async store(req: Request, res: Response) {
    const newIssue = new Issue({
      issuer_name: req.body.issuer_name,
      issuer_email: req.body.issuer_email,
      subject: req.body.subject,
      body: req.body.body,
      time: Date.now(),
    });

    try {
      await newIssue.save();
      return res.json({
        success: true,
        message: "Successfully saved",
      });
    } catch (error: any) {
      return res.json({
        success: false,
        message: error.message,
      });
    }
  }
}
