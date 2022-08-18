import nodemailer from "nodemailer";
import { pugEngine } from "nodemailer-pug-engine";
import * as dotenv from "dotenv";
dotenv.config();
const emailUser = process.env.EMAIL_USER;
const emailPassword = process.env.EMAIL_PASSWORD;
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: emailUser, // generated ethereal user
    pass: emailPassword, // generated ethereal password
  },
});

// C:\Users\Edwin\OneDrive\Desktop\Team Dev Class\Insurance\insurance-service\utilities
transporter.use(
  "compile",
  pugEngine({
    templateDir: "./views",
    pretty: true,
  })
);
export const sendEmailToCostumer = async (dataForm) => {
  console.log(dataForm);
  const email = dataForm.email;
  const fullName = dataForm.fullName;
  const coverage = dataForm.coverage;
  const message = dataForm.message;

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: ` "Perrys Insurance:" <${emailUser}>`, // sender address
    to: `<${email}>`, // list of receivers
    subject: "We have received your information", // Subject line
    template: `ticketCustomer`, // html body view
    ctx: {
      email: email,
      fullName: fullName,
      coverage: coverage,
      message: message,
    },
  });
  console.log("Message sent: %s", info.response);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

export const sendEmailToAdmin = async (dataForm) => {
  console.log(dataForm);
  const email = dataForm.email;
  const fullName = dataForm.fullName;
  const coverage = dataForm.coverage;
  const message = dataForm.message;

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: ` "Insurance:" <${emailUser}>`, // sender address
    to: `<${emailUser}>`, // list of receivers
    subject: "New Message Received", // Subject line
    template: "ticketAdmin",
    ctx: {
      email: email,
      fullName: fullName,
      coverage: coverage,
      message: message,
    }, // html body
  });
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
