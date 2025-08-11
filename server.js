// Simple development server for testing the email API locally
import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from dist folder
app.use(express.static(join(__dirname, "dist")));

// API routes - Simple fallback for development
app.post("/api/send-email", (req, res) => {
  // For local development, just log the form data and return success
  console.log("📧 Contact form submission (development mode):", req.body);

  // Simulate email sending delay
  setTimeout(() => {
    res.json({
      message:
        "Email sent successfully! (Development mode - no actual email sent)",
      id: `dev_${Date.now()}`,
    });
  }, 1000);
});

app.options("/api/send-email", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).end();
});

// Fallback to serve index.html for client-side routing
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(
    `📧 Email API available at http://localhost:${PORT}/api/send-email`
  );
});
