import bodyParser from "body-parser";
import express from "express";
import { transporter } from "./config-email.js";
import { emailTemplates } from "./email-templates.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/mail", async (req, res) => {
  const { to, params, subject, templateId } = req.body;
  const body = emailTemplates(templateId, params);

  try {
    await transporter.sendMail({
      from: '"Mormedi" <antoniocllanos@mormedi.com>',
      to: to.email,
      subject: subject,
      html: body,
    });
    res.status(200).json({
      success: true,
      message: "Email send",
    });
    // return res.status(200).send("ENVIADO!!!");
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Email not send",
    });
    // return res.status(400).send("ERROR!!!");
  }
});

app.listen(3000);
console.log("Server on port", 3000);
