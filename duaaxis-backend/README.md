# Duaaxis Landing Page Backend

This backend handles contact form submissions for the Duaaxis landing page. It validates user inputs and sends messages directly to our company inbox using Nodemailer. The app is built with Express.js and deployed as a serverless function on AWS Lambda through the Serverless Framework.

---

## Features
- Serverless architecture (AWS Lambda)
- Email sending via Nodemailer
- Environment variable support with dotenv
- Input validation
- Easy local testing with Serverless Offline

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/duaaxis-backend.git
cd duaaxis-backend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file in the project root

```bash
EMAIL_USER=youremail@example.com
EMAIL_PASS=yourpassword
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
```

> ⚠️ Make sure `.env` is included in your `.gitignore` 

---

## Running Locally

To run the backend locally, use Serverless Offline:

```bash
npx serverless offline start
```

The server will start on:

```
http://localhost:3000/dev/contact
```

You can test it using curl:

```bash
curl -X POST http://localhost:3000/dev/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Salma","email":"salma@example.com","message":"Testing contact form"}'
```

---

## API Reference

### POST `/contact`

**Description:**
Receives contact form submissions and sends them as an email.

**Request URL Examples**

* Local: `http://localhost:3000/dev/contact`
* Production: `https://<your-api-id>.execute-api.us-east-1.amazonaws.com/prod/contact`

**Headers**

```
Content-Type: application/json
```

**Request Body Example**

```json
{
  "name": "John",
  "email": "john@example.com",
  "number": "0109123456",
  "company": "Example Co.",
  "message": "Hello! I’d like to know more about your services."
}
```

**Success Response**

```json
{
  "status": "Success",
  "message": "Email sent"
}
```

**Error Responses**

| Code | Message                 | Description                          |
| ---- | ----------------------- | ------------------------------------ |
| 400  | Missing required fields | One or more form fields are missing. |
| 400  | Email is not valid      | Invalid or malformed email address.  |
| 500  | Failed to send email    | SMTP or server error while sending.  |

---

## Deployment

To deploy to AWS Lambda:

```bash
npx serverless deploy
```

Once deployed, you’ll receive an endpoint like:

```
https://abc123.execute-api.us-east-1.amazonaws.com/prod/contact
```

---

## Notes

* Ensure `.env` is correctly configured before deployment.
* If you’re using Gmail, generate an App Password instead of your main password.

---

