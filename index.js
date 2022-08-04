/**
 * Required External Modules
 */
import path from "path";
import express, { request } from "express";
import bodyParser from "body-parser";
import {
  sendEmailToAdmin,
  sendEmailToCostumer,
} from "./utilities/SendEmail.js";
import { fileURLToPath } from "url";

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

// Render Ticket
app.get("/", (req, res) => {
  res.render("ticketAdmin", {
    name: "Edwin Silvestre",
    email: "edwin16x@gmail.com",
    coverage: "State Farm",
    message: "I want info about this",
  });
});

app.get("/emailToCustomer", (req, res) => {
  console.log(
    "viewPug",
    res.render("ticketCustomer", {
      name: "Edwin Silvestre",
      email: "edwin16x@gmail.com",
      coverage: "State Farm",
      message: "I want info about this",
    })
  );
});
/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
