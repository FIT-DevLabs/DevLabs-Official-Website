import { transporter, mailOptions } from '../../../config/nodemailer'

import { NextResponse } from "next/server";

export async function POST(request) {
    const data = await request.json();

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: "DevLabs Form Response",
            text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
            html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Message: ${data.message}</p>`
        });
    } catch (
    error
    ) {
        
    }
    return new NextResponse(JSON.stringify(data));
};