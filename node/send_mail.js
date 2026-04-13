const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail'
});


transporter.sendMail({
    from: 'no_replay@zyxtest9929.com',
    to: 'joshua@thesunowner.com',
    subject: 'Local Sendmail Test',
    text: 'Sent via local sendmail binary'
});