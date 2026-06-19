import { transporter } from '@/app/lib/email';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, phone, city, experience } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !city) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Simple email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Admin email content
    const adminMailOptions = {
      from: `"Neysa Website" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `📦 New Distributor Interest from ${name}`,
      html: `
        <h2>Distributor Interest Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City/Region:</strong> ${city}</p>
        <p><strong>Experience:</strong> ${experience || 'Not provided'}</p>
        <hr>
        <p style="color: #64748b; font-size: 12px;">Sent from Neysa Distributor Interest Form</p>
      `,
      replyTo: email,
    };

    await transporter.sendMail(adminMailOptions);

    return NextResponse.json(
      { message: 'Your interest has been submitted successfully! We will contact you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Distributor form error:', error);
    return NextResponse.json(
      { error: 'Unable to submit your request. Please try again later.' },
      { status: 500 }
    );
  }
}