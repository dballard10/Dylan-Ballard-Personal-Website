import { useEffect } from "react";
import "./styles.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useScrollAnimations } from "./hooks/useScrollAnimations";

// Type declarations for Lucide (global)
declare global {
  const lucide: {
    createIcons(): void;
  };
}

function App() {
  // Initialize Lucide icons and scroll animations
  useEffect(() => {
    lucide.createIcons();
  }, []);

  // Initialize scroll animations
  useScrollAnimations();

  // Add accessibility features
  useEffect(() => {
    // Add focus-visible polyfill behavior
    const focusableElements = document.querySelectorAll(
      "a, button, input, textarea, select"
    );

    const handleFocus = function (this: HTMLElement): void {
      if (!this.classList.contains("mouse-focused")) {
        this.style.outline = "2px solid #3b82f6";
        this.style.outlineOffset = "2px";
      }
    };

    const handleBlur = function (this: HTMLElement): void {
      this.style.outline = "";
      this.style.outlineOffset = "";
    };

    const handleMouseDown = function (this: HTMLElement): void {
      this.classList.add("mouse-focused");
    };

    const handleKeyDown = function (this: HTMLElement): void {
      this.classList.remove("mouse-focused");
    };

    focusableElements.forEach((element: Element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.addEventListener("focus", handleFocus);
      htmlElement.addEventListener("blur", handleBlur);
      htmlElement.addEventListener("mousedown", handleMouseDown);
      htmlElement.addEventListener("keydown", handleKeyDown);
    });

    return () => {
      focusableElements.forEach((element: Element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.removeEventListener("focus", handleFocus);
        htmlElement.removeEventListener("blur", handleBlur);
        htmlElement.removeEventListener("mousedown", handleMouseDown);
        htmlElement.removeEventListener("keydown", handleKeyDown);
      });
    };
  }, []);

  // Add external link loading animation
  useEffect(() => {
    const handleExternalLinkClick = function (this: HTMLAnchorElement): void {
      const icon = this.querySelector("i");
      if (icon) {
        const originalIcon = icon.getAttribute("data-lucide");
        icon.setAttribute("data-lucide", "loader-2");
        icon.style.animation = "spin 1s linear infinite";
        lucide.createIcons();

        // Reset after 2 seconds
        setTimeout(() => {
          if (originalIcon) {
            icon.setAttribute("data-lucide", originalIcon);
          }
          icon.style.animation = "";
          lucide.createIcons();
        }, 2000);
      }
    };

    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach((link: Element) => {
      link.addEventListener("click", handleExternalLinkClick);
    });

    return () => {
      externalLinks.forEach((link: Element) => {
        link.removeEventListener("click", handleExternalLinkClick);
      });
    };
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
