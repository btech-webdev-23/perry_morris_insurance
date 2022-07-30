export const ticketCustomer = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Perry Morris</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap");

      * {
        margin: 0;
        padding: 0;
        border: 0;
      }

      body {
        font-family: "Raleway", sans-serif;
        background-color: #d8dada;
        font-size: 19px;
        max-width: 800px;
        margin: 0 auto;
        padding: 3%;
      }

      img {
        max-width: 100%;
      }

      header {
        width: 98%;
      }

      #title {
        max-width: 120px;
        margin: 3% 0 3% 3%;
        float: left;
      }

      #wrapper {
        background-color: #f0f6fb;
      }

      #list{
        list-style-type: none;
      }
      h1,
      p {
        margin: 3%;
      }

      hr {
        height: 1px;
        background-color: #303840;
        clear: both;
        width: 96%;
        margin: auto;
      }

      #contact {
        text-align: center;
        padding-bottom: 3%;
        line-height: 16px;
        font-size: 12px;
        color: #303840;
      }
    </style>
  </head>
  <body>
    <div id="wrapper">
      <header>
        <div id="title">
          <span>Perry Morrison</span>
        </div>
      </header>
      <div id="banner">
        <img
          src="../assets/img/juliane-liebermann-O-RKu3Aqnsw-unsplash.jpg"
          alt="juliane-liebermann"
        />
      </div>
      <div class="one-col">
        <h1>Thanks For Choosing Me</h1>

        <p>
          Hello, {name} we just receive your message. I wanted to thank you for
          chosse me as an option for your problem. Here is the information that you send me.
          <ul id="list">
            <li>
              <p>Name :</p>
              <p>{name}</p>
            </li>
            <li>
              <p>Email :</p>
              <p>{email}</p>
            </li>
            <li>
              <p>Message :</p>
              <p>{message}</p>
            </li>
          </ul>
        </p>

        <p>
          We will be sending a relpy within 24 hours.
        </p>
        <hr />

        <footer>
          <p id="contact">
            Perrys Morris <br />
            Logan UT <br />
            1234n 123w ,84321 <br />
            perris@gmial.com
          </p>
        </footer>
      </div>
    </div>
  </body>
</html>`;
