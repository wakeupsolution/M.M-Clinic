// app/api/contact/route.js
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, phone, email, segment, cargo } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"PSV Pragadeesh Transport Web" <${process.env.EMAIL_USER}>`,
      to: 'p2srakesh2004@gmail.com',
      replyTo: email,
      subject: `🚚 New Quote Request: ${segment} - ${name}`,
      text: `New Quote Request\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nSegment: ${segment}\nCargo: ${cargo}`, 
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
          <div style="background-color: #1e293b; color: #ffffff; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Quote Request</h1>
            <p style="margin: 5px 0 0; opacity: 0.8;">PSV Transport Website Inquiry</p>
          </div>
          
          <div style="padding: 20px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 40%;">Customer Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Phone Number:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Email Address:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Fleet Segment:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-size: 0.9em;">${segment}</span></td>
              </tr>
            </table>

            <div style="margin-top: 25px;">
              <h3 style="color: #1e293b; margin-bottom: 10px;">Cargo Specifications</h3>
              <div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #1e293b; border-radius: 4px; font-style: italic;">
                ${cargo}
              </div>
            </div>
          </div>

          <div style="background-color: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #64748b;">
            This email was generated from your company website contact form.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}