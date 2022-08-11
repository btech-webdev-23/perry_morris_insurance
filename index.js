/**
 * Required External Modules
 */
import express from "express";
import bodyParser from "body-parser";
import {
  sendEmailToAdmin,
  sendEmailToCostumer,
} from "./utilities/SendEmail.js";
import path from "path";
import { fileURLToPath } from "url";

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

const __filename = fileURLToPath(import.meta.url);
export const rootPath = path.dirname(__filename);

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

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
