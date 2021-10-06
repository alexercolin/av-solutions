/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
require("dotenv").config();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      let nodemailer = require("nodemailer");
      const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: "av.tech.sorocaba@gmail.com",
          pass: process.env.NEXT_PUBLIC_EMAILPASSWORD,
        },
        secure: true,
      });
      const mailData = {
        from: req.body.email,
        to: "av.tech.sorocaba@gmail.com",
        subject: `Message From ${req.body.name} - ${req.body.company}`,
        text: req.body.message,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}.</p><p>Phone number:
        ${req.body.telephone}.</p>`,
      };
      await transporter.sendMail(mailData, function (err: any, info: any) {
        if (err) res.status(400).json({ status: "Erro no envio de email!" });
        else {
          console.log(info);
          res.status(200).json({ status: "Ok" });
        }
      });
    } catch (e) {
      console.log(e);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};
