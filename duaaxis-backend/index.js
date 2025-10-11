const express = require('express');
const serverless = require('serverless-http');
const {validate} = require('deep-email-validator');

require('dotenv').config();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 3000
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.post('/contact', async(req, res) => {
    const {name, email, number, company, message} = req.body;
    
    if (!name || !email || !message ){
        return res.status(400).json({ status: 'error', message: 'Missing required fields'})
    }
    const validEmail = await validate({
        email,
        validateSMTP: false
    });
    if (!validEmail || !validEmail.valid){
        return res.status(400).json({
            status:'error',
            message:'Email is not valid',
            details: validEmail.validators
        });
    }
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New contact form from ${name}`,
        text: message,
    })
    res.status(200).json({
        status:'Success',
        message:'Email sent'
    })
})
if (process.env.NODE_ENV !== "lambda") {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
module.exports.handler = serverless(app);
