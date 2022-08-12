import nodemailer from "nodemailer";
import { pugEngine } from "nodemailer-pug-engine";
import { rootPath } from "../index.js";
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "edwininsurancex@outlook.com", // generated ethereal user
    pass: "edwininsurance123", // generated ethereal password
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
    from: ` "Insurance:" <edwininsurancex@outlook.com>`, // sender address
    to: "edwin16x@gmail.com", // list of receivers
    subject: "Perrys Insurance", // Subject line
    template: `ticketCustomer`, // html body view
    ctx: {
      email: email,
      fullName: fullName,
      coverage: coverage,
      message: message,
    },
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

export const sendEmailToAdmin = async (dataForm) => {
  console.log(dataForm);
  const email = "edwin16x@gmail.com";
  const fullName = "Edwin Silvestre";
  const coverage = "StateFarm";
  const message = "I want info";

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: ` "Insurance:" <edwininsurancex@outlook.com>`, // sender address
    to: "edwininsurancex@outlook.com", // list of receivers
    subject: "New Message Received", // Subject line
    template: "ticketAdmin",
    ctx: { name: "Perry" }, // html body
  });
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
