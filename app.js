/**
 * Required External Modules
 */
import path from "path";
import express, { request } from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));
console.log("__dirname", path.join(__dirname, "views"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

/**
 * Routes Definitions
 */

app.post("/email", (req, res) => {
  sendEmailToAdmin(req.body);

  res.send();
});

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

// Render Ticket
app.get("/", (req, res) => {
  res.render("ticketAdmin", {
    name: "Edwin Silvestre",
    email: "edwin16x@gmail.com",
    coverage: "State Farm",
    message: "I want info about this",
  });
});

app.post("/emailToCustomer", (req, res) => {
  const sendEmailToCostumer = async (dataForm) => {
    console.log(dataForm);
    const email = "edwin16x@gmail.com";
    const fullName = "Edwin Silvestre";
    const coverage = "StateFarm";
    const message = "OMG is woorking!!!!";
    const pugView = res.render("ticketCustomer", {
      name: fullName,
      email: email,
      coverage: coverage,
      message: message,
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: ` "Insurance:" <edwininsurancex@outlook.com>`, // sender address
      to: "edwin16x@gmail.com", // list of receivers
      subject: "Example", // Subject line
      text: "Hello world?", // plain text body
      html: res.render("ticketCustomer"), // html body view
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  };
  sendEmailToCostumer(req.body);
  res.send();
});
/**
const sendEmailToAdmin = async (dataForm) => {
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
      html: , // html body
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  };
   */

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
