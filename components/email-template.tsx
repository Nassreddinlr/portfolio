import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div style={{
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    padding: '20px',
    maxWidth: '600px',
  }}>
    <h1 style={{ color: '#4a5568', marginBottom: '20px' }}>
      New Contact Form Submission
    </h1>
    <div style={{ marginBottom: '15px' }}>
      <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Name:</p>
      <p style={{ margin: '5px 0' }}>{name}</p>
    </div>
    <div style={{ marginBottom: '15px' }}>
      <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Email:</p>
      <p style={{ margin: '5px 0' }}>{email}</p>
    </div>
    <div style={{ marginBottom: '15px' }}>
      <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Subject:</p>
      <p style={{ margin: '5px 0' }}>{subject}</p>
    </div>
    <div style={{ marginBottom: '15px' }}>
      <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Message:</p>
      <p style={{ margin: '5px 0', whiteSpace: 'pre-wrap' }}>{message}</p>
    </div>
    <div style={{ marginTop: '30px', fontSize: '14px', color: '#718096' }}>
      <p>This email was sent from your portfolio website contact form.</p>
    </div>
  </div>
);