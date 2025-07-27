#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n📧 Setting up Contact Form with Resend\n');

// Check if .env.local exists
const envPath = path.join(process.cwd(), '.env.local');
const envExamplePath = path.join(process.cwd(), '.env.local.example');

if (!fs.existsSync(envPath) && fs.existsSync(envExamplePath)) {
  console.log('Creating .env.local file from example...');
  fs.copyFileSync(envExamplePath, envPath);
  console.log('✅ Created .env.local file');
}

// Prompt for Resend API key
rl.question('Enter your Resend API key (from https://resend.com/api-keys): ', (apiKey) => {
  if (!apiKey) {
    console.log('❌ API key is required. Please sign up at https://resend.com');
    rl.close();
    return;
  }

  // Prompt for contact email
  rl.question('Enter the email where you want to receive contact form submissions: ', (contactEmail) => {
    if (!contactEmail) {
      console.log('❌ Contact email is required');
      rl.close();
      return;
    }

    try {
      // Update .env.local file
      let envContent = '';
      
      if (fs.existsSync(envPath)) {
        envContent = fs.readFileSync(envPath, 'utf8');
      }

      // Replace or add RESEND_API_KEY
      if (envContent.includes('RESEND_API_KEY=')) {
        envContent = envContent.replace(/RESEND_API_KEY=.*\n/g, `RESEND_API_KEY=${apiKey}\n`);
      } else {
        envContent += `\nRESEND_API_KEY=${apiKey}\n`;
      }

      // Replace or add CONTACT_EMAIL
      if (envContent.includes('CONTACT_EMAIL=')) {
        envContent = envContent.replace(/CONTACT_EMAIL=.*\n/g, `CONTACT_EMAIL=${contactEmail}\n`);
      } else {
        envContent += `CONTACT_EMAIL=${contactEmail}\n`;
      }

      fs.writeFileSync(envPath, envContent);
      console.log('✅ Updated .env.local with your API key and contact email');

      // Install dependencies
      console.log('\nInstalling dependencies...');
      try {
        execSync('npm install resend', { stdio: 'inherit' });
        console.log('✅ Installed Resend package');
      } catch (error) {
        console.log('⚠️ Failed to install dependencies. Please run "npm install resend" manually.');
      }

      console.log('\n🎉 Setup complete! Your contact form is ready to use.');
      console.log('\nFor more information, check the CONTACT_FORM_README.md file.');
    } catch (error) {
      console.error('❌ Error setting up contact form:', error.message);
    } finally {
      rl.close();
    }
  });
});