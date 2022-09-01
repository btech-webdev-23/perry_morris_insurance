/**
 * Required External Modules
 */
import express from "express";
import bodyParser from "body-parser";
import { body, check, validationResult } from "express-validator";
import path from "path";
import { fileURLToPath } from "url";
import {
  sendEmailToAdmin,
  sendEmailToCustomer,
} from "./utilities/SendEmail.js";

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

app.post(
  "/email",
  [
    check("name", "This must be 4+ characters long")
      .exists({ checkFalsy: true })
      .isLength({ min: 4 }),
    check("email", "Email is not valid").isEmail().normalizeEmail(),
    check("provider", "This must be 4+ characters long")
      .exists({ checkFalsy: true })
      .isLength({ min: 4 }),
    check("message", "This must be 4+ characters long")
      .exists({ checkFalsy: true })
      .isLength({ min: 4 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array());
    } else {
      await sendEmailToCustomer(req.body);
      await sendEmailToAdmin(req.body);
      res.redirect("http://127.0.0.1:5500/frontend/index.html");
    }
  }
);

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
