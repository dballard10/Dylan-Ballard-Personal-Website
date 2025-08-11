// Simple development server for testing the email API locally
import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Import the API handler
import emailHandler from "./api/send-email.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from dist folder
app.use(express.static(join(__dirname, "dist")));

// API routes
app.all("/api/send-email", (req, res) => {
  emailHandler(req, res);
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
