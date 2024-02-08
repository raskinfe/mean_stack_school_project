import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "jeanne.dare@ethereal.email",
    pass: "Hk9k2FMg2xsYUt5gY9",
  },
});
