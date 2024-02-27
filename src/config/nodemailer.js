import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL,
        pass: process.env.PASSWORD
    }
})

export const mailOptions = {
    from: process.env.GMAIL,
    to: process.env.GMAIL,
}