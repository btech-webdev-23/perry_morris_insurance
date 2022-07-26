import nodemailer from "nodemailer";
import path from "path";
import hbs from "handlebars";

// point to the template folder
const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve("./views/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./views/"),
};

// use a template file with nodemailer
transporter.use("compile", hbs(handlebarOptions));

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

export const sendEmailToCostumer = async (dataForm) => {
  console.log(dataForm);
  const email = "edwin16x@gmail.com";
  const fullName = "Edwin Silvestre";
  const coverage = "StateFarm";
  const message = "I want info";

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: ` "Insurance:" <edwininsurancex@outlook.com>`, // sender address
    to: "edwin16x@gmail.com", // list of receivers
    subject: "Example", // Subject line
    text: "Hello world?", // plain text body
    html: "emailAdmin", // html body
    context: { email: email, fullName: fullName },
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
