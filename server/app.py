from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from decouple import config

app = Flask(__name__)

SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 587
SMTP_USERNAME = config('SMTP_USERNAME')
SMTP_PASSWORD = config('SMTP_PASSWORD')

@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.get_json()

    # Extract data from the form
    username = data.get('username')
    phoneNumber = data.get('phoneNumber')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')

    # Validate and process the data (you can add more validation logic here)
    if not username or not email or not message:
        return jsonify({'error': 'Missing required fields'}), 400

    # Send email
    send_email(username, email, subject, message)

    # You can save the form data to a database if needed

    return jsonify({'message': 'Form submitted successfully'}), 200

def send_email(username, email, subject, message):
    try:
        msg = MIMEText(f"From: {username}\nEmail: {email}\nSubject: {subject}\nMessage: {message}")
        msg['Subject'] = f"New Contact Form Submission from {username}"
        msg['From'] = SMTP_USERNAME
        msg['To'] = 'trenatto82@gmail.com'  # Replace with your email address

        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SMTP_USERNAME, SMTP_PASSWORD)
        server.sendmail(SMTP_USERNAME, 'trenatto82@gmail.com', msg.as_string())
        server.quit()
    except Exception as e:
        print(f"Email sending failed: {str(e)}")

if __name__ == '__main__':
    app.run(debug=True)
