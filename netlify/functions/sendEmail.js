const nodemailer = require('nodemailer');
const { SMTP_USERNAME, SMTP_PASSWORD } = process.env;

exports.handler = async function (event, context) {
  const data = JSON.parse(event.body);

  // Extract data from the JSON payload
  const { username, phoneNumber, email, subject, message } = data;

  // Validate and process the data (you can add more validation logic here)
  if (!username || !phoneNumber || !email || !subject || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing required fields' }),
    };
  }

  // Handle pre-flight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ message: 'Preflight request successful' }),
    };
  }

  // Send email
  try {
    await sendEmail(username, phoneNumber, email, subject, message);

    // Return the response with CORS headers
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ message: 'Form submitted successfully' }),
    };
  } catch (error) {
    console.error(`Email sending failed: ${error}`);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Email sending failed' }),
    };
  }
};

async function sendEmail(username, phoneNumber, email, subject, message) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: SMTP_USERNAME,
      pass: SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: SMTP_USERNAME,
    to: 'tamunotonyebriggz@gmail.com',
    subject: `New Contact Form Submission from ${username}`,
    text: `From: ${username}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
  };

  await transporter.sendMail(mailOptions);
}
