import { useState, FormEvent } from "react";
import { useNotification } from "../hooks/useNotification";
import { sendContactEmail } from "../utils/emailApi";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showNotification } = useNotification();

  const validateForm = (data: ContactFormData): boolean => {
    const errors: string[] = [];

    if (!data.firstName) {
      errors.push("First name is required");
    }

    if (!data.lastName) {
      errors.push("Last name is required");
    }

    if (!data.email) {
      errors.push("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push("Please enter a valid email address");
    }

    if (!data.message) {
      errors.push("Message is required");
    }

    if (errors.length > 0) {
      showNotification(errors.join("\n"), "error");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm(formData)) {
      return;
    }

    setIsSubmitting(true);

    try {
      await sendContactEmail(formData);

      // Show success message
      showNotification(
        "Message sent successfully! I'll get back to you soon.",
        "success"
      );

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      // Show error message
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.";
      showNotification(errorMessage, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-description">
          Whether you're a recruiter, a startup founder, or just someone
          interested in connecting, let's discuss how I can help your team or
          collaborate on new opportunities.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i data-lucide="phone"></i>
              <span>(703) 848-5998</span>
            </div>
            <div className="contact-item">
              <i data-lucide="mail"></i>
              <span>dylanballard55@gmail.com</span>
            </div>
            <div className="contact-item">
              <i data-lucide="map-pin"></i>
              <span>Reston, VA</span>
            </div>
            <div className="contact-item">
              <i data-lucide="github"></i>
              <a
                href="https://github.com/dballard10"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/dballard10
              </a>
            </div>
            <div className="contact-item">
              <i data-lucide="linkedin"></i>
              <a
                href="https://linkedin.com/in/dballard55"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/dballard55
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
