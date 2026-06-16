// app/api/subscribe/route.js
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Email transporter configuration
 const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER;
    const siteName = 'Neysa';
    const currentDate = new Date().toLocaleString();

    // Send welcome email to subscriber
    const userMailOptions = {
      from: `"${siteName}" <${fromEmail}>`,
      to: email,
      subject: `Welcome to ${siteName} - You're Subscribed!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to ${siteName}</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f5; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 16px; margin-top: 30px; margin-bottom: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
            .header { text-align: center; padding: 20px 0; border-bottom: 2px solid #e2e8f0; }
            .logo { display: inline-flex; align-items: center; gap: 8px; font-size: 28px; font-weight: bold; color: #0f172a; }
            .logo span { color: #38bdf8; }
            .content { padding: 30px 20px; }
            .button { display: inline-block; background-color: #861981; color: white; padding: 12px 28px; text-decoration: none; border-radius: 40px; font-weight: 500; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
            h1 { color: #0f172a; margin-bottom: 16px; font-size: 24px; }
            .highlight { color: #861981; font-weight: 600; }
          </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f5;">
          <div class="container">
            <div class="header">
              <div class="logo">
                💧 N<span>y</span>esa
              </div>
            </div>
            <div class="content">
              <h1>Welcome to the <span class="highlight">Neysa</span> Family! 💙</h1>
              <p>Thank you for subscribing to our newsletter. You're now part of a community that values <strong>pure hydration</strong> and <strong>powerful branding</strong>.</p>
              <p>Here's what you can expect from us:</p>
              <ul style="margin: 16px 0; padding-left: 20px;">
                <li>✨ Exclusive offers & discounts</li>
                <li>💡 Expert branding tips for your business</li>
                <li>🌍 Sustainable packaging innovations</li>
                <li>🚀 Early access to new product launches</li>
              </ul>
              <div style="text-align: center;">
                <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://Nyesa.com'}/products" class="button">Explore Our Products →</a>
              </div>
              <p style="margin-top: 24px; font-size: 14px; color: #475569;">If you have any questions, feel free to reply to this email. We'd love to hear from you!</p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Wather. All rights reserved.<br>
              Pure hydration, powerful branding — sustainable bottles that make your brand unforgettable.</p>
              <p style="margin-top: 10px;">
                <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://Neysa.com'}/unsubscribe" style="color: #94a3b8; text-decoration: underline;">Unsubscribe</a> 
                | <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://.Neysa.com'}/privacy-policy" style="color: #94a3b8; text-decoration: underline;">Privacy Policy</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `Welcome to Neysa!\n\nThank you for subscribing! You'll now receive exclusive offers, branding tips, and updates about our sustainable bottles.\n\nVisit our website: ${process.env.NEXT_PUBLIC_SITE_URL || 'https://wather.com'}\n\n- The Wather Team`,
    };

    // Send notification to admin
    const adminMailOptions = {
      from: `"${siteName} Subscriptions" <${fromEmail}>`,
      to: adminEmail,
      subject: `🔔 New Newsletter Subscription - ${email}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.5; }
            .box { background: #f8fafc; padding: 20px; border-left: 4px solid #861981; margin: 20px 0; }
          </style>
        </head>
        <body>
          <h2>✨ New Subscriber Alert</h2>
          <div class="box">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subscribed on:</strong> ${currentDate}</p>
            <p><strong>Source:</strong> Website Footer Newsletter</p>
          </div>
          <p>Total subscribers can be tracked in your CRM/database.</p>
          <hr>
          <p style="color: #64748b; font-size: 12px;">Sent from your Wather website subscription system.</p>
        </body>
        </html>
      `,
      text: `New Subscriber: ${email}\nSubscribed on: ${currentDate}\nSource: Website Footer Newsletter`,
    };

    // Send both emails concurrently
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    // Optional: Store in database (uncomment and implement if needed)
    // await saveSubscriberToDatabase(email);

    return NextResponse.json(
      { message: 'Successfully subscribed! Check your email for confirmation.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription email error:', error);
    return NextResponse.json(
      { error: 'Unable to process subscription. Please try again later.' },
      { status: 500 }
    );
  }
}