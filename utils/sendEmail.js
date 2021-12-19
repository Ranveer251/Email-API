require('dotenv').config();
const nodemailer = require('nodemailer');

const etherealTransporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'piper.hackett50@ethereal.email',
        pass: 'k7KKSEpuq7w6tvXyZu'
    }
});

const gmailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    } 
});

const sendEtherealEmail = (reciever, content) => {

    var text = `${content}`;

    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dummy Email</title>
        <style>
        @media (max-width: 500px) {
                        .form-wrapper {
                            max-width: 300px;
                        }
                    }
        </style>
    </head>
    <body style="font-family: 'Verdana', sans-serif;padding: 0;margin: 0;">
        <center>
            <div class="form-wrapper" style="max-width: 600px;padding-top: 5em;padding-bottom: 5em;">
                <center>
                    <h1>New Email!</h1>
                    <p>${content}</p>
                </center>
            </div>
        </center>
    </body>
    </html>`;

    var mailOptions = {
        from: `piper.hackett50@ethereal.email`,
        to: reciever,
        subject: "New Dummy Email!",
        text: text,
        html: html,
    };
    let val = 0;
    var error = {};
    etherealTransporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          val = -1;
          console.log(`Some error occured\n${err}`);
        } else {
          val = 1;  
          console.log("Email sent: " + info.response);
        }
    });
    return val,error;
}

const sendGmail = (reciever, content) => {
    var text = `${content}`;

    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dummy Email</title>
        <style>
        @media (max-width: 500px) {
                        .form-wrapper {
                            max-width: 300px;
                        }
                    }
        </style>
    </head>
    <body style="font-family: 'Verdana', sans-serif;padding: 0;margin: 0;">
        <center>
            <div class="form-wrapper" style="max-width: 600px;padding-top: 5em;padding-bottom: 5em;">
                <center>
                    <h1>New Email!</h1>
                    <p>${content}</p>
                </center>
            </div>
        </center>
    </body>
    </html>`;

    var mailOptions = {
        from: `iit2019080@iiita.ac.in`,
        to: reciever,
        subject: "New Dummy Email!",
        text: text,
        html: html,
    };
    let val = 0;
    var error = {};
    gmailTransporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          val = -1;
          console.log(`Some error occured\n${err}`);
        } else {
          val = 1;  
          console.log("Email sent: " + info.response);
        }
    });
    return val,error;
}



module.exports = {
    sendEtherealEmail,
    sendGmail
}

