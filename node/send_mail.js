const nodemailer = require('nodemailer');

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
    host: "smtphz.qiye.163.com",
    port: 465,
    secure: true, // use STARTTLS (upgrade connection to TLS after connecting)
    auth: {
        user: 'joshua@thesunowner.com',
        pass: 'Zyx820317',
    },
});

transporter.sendMail({
    from: 'joshua@thesunowner.com',
    to: 'joshua@thesunowner.com',
    subject: 'Local Sendmail Test',
    text: 'Sent via local sendmail binary'
});