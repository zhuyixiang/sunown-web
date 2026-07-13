const express = require('express')
const app = express()
const port = 3000
// const bodyParser=require("body-parser")
const nodemailer = require("nodemailer");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send('Hello World!')
})




app.post('/api/contact', function (req,res, next){
    console.log(req.body)
    var message = "name: " + req.body.name + "\r\n";
    message += "email: " + req.body.email + "\r\n";
    if(req.body.phone){
        message += "phone: " + req.body.phone + "\r\n";
    }
    if(req.body.phone){
        message += "phone: " + req.body.phone + "\r\n";
    }
    if(req.body.company){
        message += "company: " + req.body.company + "\r\n";
    }
    if(req.body.subject){
        message += "subject: " + req.body.subject + "\r\n";
    }
    message += "content: " + req.body.content + "\r\n";

    const transporter = nodemailer.createTransport({
        host: "smtphz.qiye.163.com",
        port: 465,
        secure: true, // use STARTTLS (upgrade connection to TLS after connecting)
        auth: {
            user: 'joshua@nutraqueenbio.com',
            pass: 'Zyx820317',
        },
    });
    transporter.sendMail({
        from: 'joshua@nutraqueenbio.com',
        to: 'sales@nutraqueenbio.com',
        subject: 'From nutra queen inc Web',
        text: message
    });
    console.log('ok')
    res.send('{}')
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})