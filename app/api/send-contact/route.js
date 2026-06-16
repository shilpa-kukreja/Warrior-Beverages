import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { type, ...data } = body;

    // Determine which form was submitted
    const isHomepageForm = type === 'homepage';
    const isContactPageForm = type === 'contact-page';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // --- Admin email (to you) ---
    let adminSubject = '';
    let adminHtml = '';

    if (isHomepageForm) {
      const { name, phone, email, city, state, message } = data;
      adminSubject = `New Homepage Contact from ${name}`;
      adminHtml = `
        <h2>New message from Homepage Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>City:</strong> ${city || 'Not provided'}</p>
        <p><strong>State:</strong> ${state || 'Not provided'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `;
    } 
    else if (isContactPageForm) {
      const { name, email, company, message } = data;
      adminSubject = `New Contact Page message from ${name}`;
      adminHtml = `
        <h2>New message from Contact Page</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `;
    } else {
      throw new Error('Invalid form type');
    }

    const adminMailOptions = {
      from: `"Neysa Website" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: adminSubject,
      html: adminHtml,
      replyTo: isHomepageForm ? data.email : data.email,
    };

    // --- User confirmation email (only for contact page form – optional for homepage) ---
    let userMailOptions = null;
    if (isContactPageForm) {
      const { name, email, message } = data;
      userMailOptions = {
        from: `"Neysa Website" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'We received your message – Wather',
        html: `
          <div style="font-family: Arial, sans-serif;">
            <h2 style="color: #861981;">Hello ${name},</h2>
            <p>Thank you for reaching out to Wather. We have received your message and will get back to you within 24 hours.</p>
            <p><strong>Your message:</strong><br/>${message}</p>
            <br/>
            <p>Best regards,<br/>The Wather Team</p>
          </div>
        `,
      };
    }

    // Send emails
    const emailPromises = [transporter.sendMail(adminMailOptions)];
    if (userMailOptions) emailPromises.push(transporter.sendMail(userMailOptions));
    await Promise.all(emailPromises);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}