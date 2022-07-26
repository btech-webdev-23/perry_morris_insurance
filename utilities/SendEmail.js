import nodemailer from "nodemailer";
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
    html: viewAdmin(dataForm), // html body
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
