# Email Integration with Resend API

This document explains how the Resend API integration works for the contact form functionality.

## 🚀 Quick Start

### For Development & Testing

1. **Install dependencies** (if not already installed):

   ```bash
   npm install
   ```

2. **For local testing with the full email functionality**:

   ```bash
   npm run dev:full
   ```

   This builds the project and starts a local server with API support on `http://localhost:3001`

3. **For regular development** (UI only):
   ```bash
   npm run dev
   ```
   This starts the Vite dev server on `http://localhost:3000` (email functionality won't work)

### For Production Deployment

The project is set up to work seamlessly with **Vercel**:

1. **Deploy to Vercel**:

   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect the serverless functions in the `/api` folder

2. **Set Environment Variables in Vercel**:
   - Go to your Vercel project settings
   - Add environment variable: `RESEND_API_KEY` with your actual API key
   - Remove the hardcoded API key from `api/send-email.js` before deploying

## 📧 How It Works

### Frontend (Contact Form)

- Located in `src/components/Contact.tsx`
- Uses `src/utils/emailApi.ts` to send requests to the API
- Provides real-time validation and user feedback
- Shows success/error notifications using the existing notification system

### Backend (API Endpoint)

- Located in `api/send-email.js`
- Serverless function compatible with Vercel
- Validates form data server-side
- Sends beautifully formatted HTML emails using Resend
- Includes proper error handling and CORS support

### Email Template

The API sends professional HTML emails with:

- Sender's contact information
- Formatted message content
- Professional styling
- Plain text fallback

## 🔧 Configuration

### Resend API Setup

1. **Get your API key**:

   - Sign up at [resend.com](https://resend.com)
   - Get your API key from the dashboard

2. **Update the sender email**:
   In `api/send-email.js`, update this line:

   ```javascript
   from: 'onboarding@resend.dev', // Change to your verified domain
   ```

3. **Verify your domain** (for production):
   - Add your domain to Resend
   - Complete DNS verification
   - Update the `from` field to use your domain

### Environment Variables

**For local development** (create `.env` file):

```
RESEND_API_KEY=your_actual_api_key_here
```

**For Vercel deployment**:
Set the `RESEND_API_KEY` environment variable in your Vercel project settings.

## 📁 File Structure

```
├── api/
│   └── send-email.js          # Serverless email function
├── src/
│   ├── components/
│   │   └── Contact.tsx        # Updated contact form
│   └── utils/
│       └── emailApi.ts        # API utility functions
├── server.js                  # Development server (optional)
├── vercel.json               # Vercel configuration
└── EMAIL_SETUP.md            # This documentation
```

## 🧪 Testing

### Test the Contact Form

1. **Start the development server**:

   ```bash
   npm run dev:full
   ```

2. **Visit** `http://localhost:3001`

3. **Fill out the contact form** and submit

4. **Check your email** at `dylanballard55@gmail.com`

### API Testing (Advanced)

You can test the API directly using curl:

```bash
curl -X POST http://localhost:3001/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "phone": "123-456-7890",
    "message": "This is a test message"
  }'
```

## 🔒 Security Notes

- **Never commit your API key** to version control
- **Use environment variables** for sensitive data
- **The current setup includes a fallback API key for testing** - remove this in production
- **Add your `.env` file to `.gitignore`**

## 🚨 Troubleshooting

### Common Issues

1. **"Failed to send email"**:

   - Check your Resend API key
   - Verify your sender domain
   - Check the browser's network tab for error details

2. **API endpoint not found**:

   - Make sure you're using `npm run dev:full` for local testing
   - For Vercel, ensure the `vercel.json` is properly configured

3. **CORS errors**:
   - The API includes CORS headers
   - If issues persist, check your deployment platform's settings

### Getting Help

- Check the browser console for error messages
- Verify the API response in the Network tab
- Test the API endpoint directly using curl or Postman

## 🎯 Next Steps

1. **Deploy to Vercel** for production use
2. **Set up your custom domain** with Resend
3. **Update the sender email** to use your domain
4. **Set environment variables** securely
5. **Remove hardcoded API keys** from the code

---

**Note**: The current implementation includes a test API key for development. Make sure to replace it with your actual key and use environment variables for production deployment.
