/**
 * Required External Modules
 */
import express, { request } from "express";
import bodyParser from "body-parser";
import { sendEmailToCostumer } from "./utilities/SendEmail.js";
/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

/**
 * Routes Definitions
 */

app.post("/email", (req, res) => {
  sendEmailToCostumer(req.body);
  res.send();
});

app.get("/", (req, res) => {
  console.log(req.headers);
  res.status(200).send("Headers");
});

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
