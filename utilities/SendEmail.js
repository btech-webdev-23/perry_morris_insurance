import nodemailer from "nodemailer";
import { pugEngine } from "nodemailer-pug-engine";
import * as dotenv from "dotenv";
dotenv.config();
const emailUser = process.env.EMAIL_USER;
const emailPassword = process.env.EMAIL_PASSWORD;
const port = process.env.EMAIL_PORT;
const host = process.env.EMAIL_HOST;
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: host,
  port: port,
  secure: false, // true for 465, false for other ports
  auth: {
    user: emailUser, // generated ethereal user
    pass: emailPassword, // generated ethereal password
  },
});

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

  let info = {
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
  };
  transporter.verify(function (error, success) {
    if (error) {
      console.log("Error Found:" + error);
    } else {
      transporter.sendMail(info, (err, result) => {
        if (err) {
          console.log(err);
          return false;
        } else {
          console.log(result);
        }
      });
    }
  });
};

export const sendEmailToAdmin = async (dataForm) => {
  console.log(dataForm);
  const email = dataForm.email;
  const fullName = dataForm.fullName;
  const coverage = dataForm.coverage;
  const message = dataForm.message;
  let info = {
    from: ` "Insurance:" <${emailUser}>`, // sender address
    to: `<${emailUser}>`, // list of receivers
    subject: "New Message Received", // Subject line
    template: "ticketAdmin",
    ctx: {
      email: email,
      coverage: coverage,
      message: message,
    },
  };
  transporter.verify(function (error, success) {
    if (error) {
      console.log("Error found: " + error);
    } else {
      transporter.sendMail(info, (err, result) => {
        if (err) {
          console.log("Error Found: " + err);
          return false;
        } else {
          console.log("Email sent" + result);
        }
      });
    }
  });
};
