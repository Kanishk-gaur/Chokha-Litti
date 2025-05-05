import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, city, phone, rating, suggestions } = await request.json();

  // Configure email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kgaur9412545040@gmail.com',
      pass: 'emel rchg ecor jcmf',
    },
  });

  // Email content
  const mailOptions = {
    from: 'kgaur9412545040@gmail.com',
    to: 'kanishkg7017@gmail.com',
    subject: `New Feedback from ${name}`,
    html: `
      <h2>New Feedback Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Rating:</strong> ${'★'.repeat(parseInt(rating))}</p>
      <p><strong>Suggestions:</strong> ${suggestions || 'None provided'}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}