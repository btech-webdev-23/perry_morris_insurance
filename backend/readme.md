# .env variables

Set up the env variables. These variables handle the authentication needed for nodemailer to work.
- EMAIL_USER = adminEmail@doamin.com
- EMAIL_PASSWORD = password
- EMAIL_HOST = hostProvider
- EMAIL_PORT = port

# SendEmail.js
### SendEmailToCustomer
This function receive the data from the form and then sends a eamil to the customer displaying the information that they send.
Also a greeting message choosen by the admin.
> These call the template ticketCustomer.pug
>>template: `ticketcustomer`
>
> These is found on the folder views.

### SendEmailToAdmin
THis Function send a email to the admin with teh information of the form
> These call the template ticketAdmin.pug
>>template: `ticketAdmin`
>
> These is found on the folder views.
# Sources :

- Nodemailer :
  https://nodemailer.com/about/
- Nodemailer-pug-engine:
  https://www.npmjs.com/package/nodemailer-pug-engine
