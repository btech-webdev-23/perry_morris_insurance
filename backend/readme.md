# .env variables

Set up the env variables. These variables handle the authentication needed for nodemailer to work.

- EMAIL_USER = email@doamin.com
- EMAIL_PASSWORD = $password123
- EMAIL_HOST = hostProvider
- EMAIL_PORT = 587

# SendEmail.js

### SendEmailToCustomer

This function receives the data from the form and then sends an email to the customer displaying the information they send.
Also, a greeting message chosen by the admin.

> These call the template ticketCustomer.pug
>
> > template: `ticketcustomer`
>
> These are found on the folder views.

### SendEmailToAdmin

This Function sends an email to the admin with the information on the form.

> These call the template ticketAdmin.pug
>
> > template: `ticketAdmin`
>
> These are found on the folder views.

> Check erros on validation if something goes wrong with autehticahtion
>
> > 'ransporter.verify(function (error, success)'
>
> It console.log(error) if found

# Views Folder

This folder has all the emails' images, styles, and templates.

### layout.pug

It contains the head and starts the body for the templates. it it use on 'ticketCustomer' & 'ticketAdmin'

### ticketCustomer & ticketAdmin

Both are extended from 'layout.pug'
Each ticket has the same variables: name, email, provider, and message. These are declared at 'SendEmail.js.'
**Img atribute** For the img use a URL

# Third Party Plug-ins :

- Nodemailer :
  https://nodemailer.com/about/
- Nodemailer-pug-engine:
  https://www.npmjs.com/package/nodemailer-pug-engine
- Express:
  https://expressjs.com/en/guide/routing.html
- Pug JS
  https://pugjs.org/api/getting-started.html
- Express-validator
  https://express-validator.github.io/docs/
