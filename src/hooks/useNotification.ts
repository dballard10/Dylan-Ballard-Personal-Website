import { useEffect } from "react";

type NotificationType = "info" | "success" | "error";

export const useNotification = () => {
  useEffect(() => {
    // Add keyboard navigation for accessibility
    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC key closes notifications
      if (e.key === "Escape") {
        const notifications = document.querySelectorAll(".notification");
        notifications.forEach((notification: Element) => {
          const htmlNotification = notification as HTMLElement;
          htmlNotification.style.transform = "translateX(100%)";
          setTimeout(() => {
            if (notification.parentNode) {
              notification.remove();
            }
          }, 300);
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const showNotification = (
    message: string,
    type: NotificationType = "info"
  ) => {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll(".notification");
    existingNotifications.forEach((notification: Element) =>
      notification.remove()
    );

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
           z-index: 1000;
           max-width: 400px;
           font-weight: 500;
       `;

    notification.textContent = message;
    document.body.appendChild(notification);

    // Auto remove after 4 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 4000);

    // Add click to dismiss
    notification.addEventListener("click", (): void => {
      if (notification.parentNode) {
        notification.remove();
      }
    });
  };

  return { showNotification };
};
