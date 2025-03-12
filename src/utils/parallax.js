// Parallax effect handler
export function initParallax() {
  // Only run on client side
  if (typeof window === "undefined") return;

  const parallaxElements = {
    slow: document.querySelectorAll(".parallax-slow"),
    medium: document.querySelectorAll(".parallax-medium"),
    fast: document.querySelectorAll(".parallax-fast"),
  };

  // Initialize scroll position for scroll-based effects
  let scrollY = window.scrollY;

  // Mouse parallax effect
  window.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (mouseX - centerX) / 20;
    const moveY = (mouseY - centerY) / 20;

    // Apply different intensities based on class
    parallaxElements.slow.forEach((element) => {
      element.style.transform = `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
    });

    parallaxElements.medium.forEach((element) => {
      element.style.transform = `translate(${moveX * 1}px, ${moveY * 1}px)`;
    });

    parallaxElements.fast.forEach((element) => {
      element.style.transform = `translate(${moveX * 1.5}px, ${moveY * 1.5}px)`;
    });
  });

  // Scroll-based parallax
  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;

    document.querySelectorAll(".parallax-scroll").forEach((element) => {
      const speed = element.dataset.speed || 0.1;
      element.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });

  // Initialize animations on scroll
  const animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden-animation");
          entry.target.classList.add(
            entry.target.dataset.animation || "animate-fade-in"
          );
          animationObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  // Add all elements with data-animation attribute to the observer
  document.querySelectorAll("[data-animation]").forEach((element) => {
    element.classList.add("hidden-animation");
    animationObserver.observe(element);
  });
}

// Helper for setting delays on animation elements
export function setAnimationDelays() {
  const staggered = document.querySelectorAll("[data-stagger]");
  staggered.forEach((group) => {
    const elements = group.querySelectorAll("[data-animation]");
    elements.forEach((element, index) => {
      element.style.animationDelay = `${index * 100}ms`;
    });
  });
}
