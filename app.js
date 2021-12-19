const express = require('express');
const {sendEtherealEmail,sendGmail} = require('./utils/sendEmail');
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/sendEtherealMail",(req,res)=>{
    var reciever = req.body.reciever;
    var content = req.body.content;

    var val,err = sendEtherealEmail(reciever,content);
    if(val==-1){
        res.status(400).json({
          "success": "False",
          "message": `${err}`
        });
    } else {
        res.status(200).json({
          "success": "True",
          "message" : "Email sent successfully"
        })
    }
});

app.post("/sendGmail",(req,res)=>{
  var reciever = req.body.reciever;
  var content = req.body.content;

  var val,err = sendGmail(reciever,content);
  if(val==-1){
      res.status(400).json({
        "success": "False",
        "message": `${err}`
      });
  } else {
      res.status(200).json({
        "success": "True",
        "message" : "Email sent successfully"
      })
  }
});


module.exports = app;

