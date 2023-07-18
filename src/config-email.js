import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "antoniocllanos@gmail.com",
    pass: "lovxwhwatrwvdxku",
  },
});
