import nodemailer from "nodemailer";
import path from "path";

// initialize nodemailer
var transporter = nodemailer.createTransport({
  service: "smtp-mail.outlook.com",
  auth: {
    user: "edwininsurancex@outlook.com",
    pass: "edwininsurance123",
  },
});

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

var mailOptions = {
  from: '"Perrys" <edwininsurancex@outlook.com>', // sender address
  to: "edwin16x@gmail.com", // list of receivers
  subject: "Welcome!",
  template: "emailAdmin", // the name of the template file i.e email.handlebars
  context: {
    name: "Adebola", // replace {{name}} with Adebola
    company: "My Company", // replace {{company}} with My Company
  },
};

// trigger the sending of the E-mail
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: " + info.response);
});

export const sendEmailToAdmin = async (dataForm) => {
  console.log(dataForm);
  const email = "edwin16x@gmail.com";
  const fullName = "Edwin Silvestre";
  const coverage = "StateFarm";
  const message = "I want info";

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: ` "Insurance:" <edwininsurancex@outlook.com>`, // sender address
    to: "edwin16x@gmail.com", // list of receivers
    subject: "New Message Received", // Subject line
    html: `
      <h1>You Have Received a New Message</h1>
      <p>The message has come from ${email}</p>
      <h3>Name of the person:</h3>
      <!-- Indent his p -->
      <p>Hello my name is ${fullName}</p>
      <h3>The message send by ${fullName} is :</h3>
      <!-- Indent this p -->
      <p>${message}</p>
      <h3>My last insurance company was:</h3>
      <p>${coverage}</p>
    `, // html body
  });
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
