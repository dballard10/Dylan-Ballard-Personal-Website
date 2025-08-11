interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface EmailResponse {
  message: string;
  id?: string;
}

export const sendContactEmail = async (
  formData: ContactFormData
): Promise<EmailResponse> => {
  try {
    // Determine the API endpoint based on environment
    const baseUrl = import.meta.env.PROD
      ? "" // Use relative path in production
      : "http://localhost:3001"; // Use the full server with API support

    const response = await fetch(`${baseUrl}/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send email");
    }

    return data;
  } catch (error) {
    // Check if this is a network error (API server not running)
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error(
        "Email API not available. Please run 'npm run dev:full' to test email functionality, or continue with 'npm run dev' for UI development only."
      );
    }

    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to send email. Please try again later.");
  }
};
