// Initialize Lucide icons
document.addEventListener("DOMContentLoaded", function () {
  lucide.createIcons();

  // Initialize animations
  initScrollAnimations();

  // Initialize contact form
  initContactForm();

  // Add smooth scrolling for navigation links
  initSmoothScrolling();
});

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, observerOptions);

  // Observe elements that should animate on scroll
  const animatedElements = document.querySelectorAll(
    ".timeline-item, .education-card, .skill-category, .project-card"
  );
  animatedElements.forEach((el) => observer.observe(el));
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Contact form functionality
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = {
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      message: form.message.value.trim(),
    };

    // Basic validation
    if (!validateForm(formData)) {
      return;
    }

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      // Create mailto link
      const subject = encodeURIComponent(
        `Contact from ${formData.firstName} ${formData.lastName}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.firstName} ${formData.lastName}\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone}\n\n` +
          `Message:\n${formData.message}`
      );

      const mailtoLink = `mailto:dylanballard55@gmail.com?subject=${subject}&body=${body}`;

      // Open default email client
      window.location.href = mailtoLink;

      // Show success message
      showNotification(
        "Message prepared! Your email client should open with the message ready to send.",
        "success"
      );

      // Reset form
      form.reset();

      // Reset button
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1000);
  });
}

// Form validation
function validateForm(data) {
  const errors = [];

  if (!data.firstName) {
    errors.push("First name is required");
  }

  if (!data.lastName) {
    errors.push("Last name is required");
  }

  if (!data.email) {
    errors.push("Email is required");
  } else if (!isValidEmail(data.email)) {
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
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach((notification) => notification.remove());

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${
          type === "error"
            ? "#ef4444"
            : type === "success"
            ? "#10b981"
            : "#3b82f6"
        };
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        max-width: 400px;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

  // Handle multiline messages
  if (message.includes("\n")) {
    const lines = message.split("\n");
    notification.innerHTML = lines.map((line) => `<div>${line}</div>`).join("");
  } else {
    notification.textContent = message;
  }

  // Add to page
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, 5000);

  // Add click to dismiss
  notification.addEventListener("click", () => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  });
}

// Add scroll effects for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".hero");
  if (parallax) {
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
  }
});

// Add typing effect to tagline (optional enhancement)
function initTypingEffect() {
  const tagline = document.querySelector(".tagline");
  if (!tagline) return;

  const text = tagline.textContent;
  tagline.textContent = "";
  tagline.style.borderRight = "2px solid #3b82f6";

  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      tagline.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    } else {
      // Remove cursor after typing
      setTimeout(() => {
        tagline.style.borderRight = "none";
      }, 1000);
    }
  };

  // Start typing after a delay
  setTimeout(typeWriter, 1000);
}

// Initialize typing effect on load
// window.addEventListener('load', initTypingEffect);

// Add intersection observer for counting animations (if you want to add stats later)
function initCountingAnimations() {
  const counters = document.querySelectorAll("[data-count]");

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute("data-count"));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
          if (current < target) {
            current += step;
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };

        updateCounter();
        counterObserver.unobserve(counter);
      }
    });
  });

  counters.forEach((counter) => counterObserver.observe(counter));
}

// Add keyboard navigation for accessibility
document.addEventListener("keydown", function (e) {
  // ESC key closes notifications
  if (e.key === "Escape") {
    const notifications = document.querySelectorAll(".notification");
    notifications.forEach((notification) => {
      notification.style.transform = "translateX(100%)";
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove();
        }
      }, 300);
    });
  }
});

// Add focus visible for better accessibility
document.addEventListener("DOMContentLoaded", function () {
  // Add focus-visible polyfill behavior
  const focusableElements = document.querySelectorAll(
    "a, button, input, textarea, select"
  );

  focusableElements.forEach((element) => {
    element.addEventListener("focus", function () {
      if (!this.classList.contains("mouse-focused")) {
        this.style.outline = "2px solid #3b82f6";
        this.style.outlineOffset = "2px";
      }
    });

    element.addEventListener("blur", function () {
      this.style.outline = "";
      this.style.outlineOffset = "";
    });

    element.addEventListener("mousedown", function () {
      this.classList.add("mouse-focused");
    });

    element.addEventListener("keydown", function () {
      this.classList.remove("mouse-focused");
    });
  });
});

// Add loading animation for external links
document.addEventListener("DOMContentLoaded", function () {
  const externalLinks = document.querySelectorAll('a[target="_blank"]');

  externalLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Add loading indicator for external links
      const icon = this.querySelector("i");
      if (icon) {
        const originalIcon = icon.getAttribute("data-lucide");
        icon.setAttribute("data-lucide", "loader-2");
        icon.style.animation = "spin 1s linear infinite";
        lucide.createIcons();

        // Reset after 2 seconds
        setTimeout(() => {
          icon.setAttribute("data-lucide", originalIcon);
          icon.style.animation = "";
          lucide.createIcons();
        }, 2000);
      }
    });
  });
});

// Add CSS for spinner animation
const style = document.createElement("style");
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
