import { useEffect } from "react";

export const useScrollAnimations = () => {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      observerOptions
    );

    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll(
      ".timeline-item, .education-card, .skill-category, .project-card"
    );
    animatedElements.forEach((el: Element) => observer.observe(el));

    // Cleanup function
    return () => {
      animatedElements.forEach((el: Element) => observer.unobserve(el));
    };
  }, []);
};
