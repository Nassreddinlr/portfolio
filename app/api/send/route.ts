import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { name, email, subject, message } = await request.json();
    
    // Validate the required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <contact@web01.tech>', // Using verified domain
      to: process.env.CONTACT_EMAIL || 'larbiaissanassreddine@gmail.com', // The email where you want to receive contact form submissions
      subject: `New Contact Form Submission: ${subject}`,
      reply_to: email,
      react: EmailTemplate({ name, email, subject, message }),
    });

    // Handle errors from Resend
    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}