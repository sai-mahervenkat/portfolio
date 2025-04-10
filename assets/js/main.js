// MENU TOGGLE
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

// GSAP ANIMATIONS
// Animate overlays to slide out of view
gsap.to(".first", {
  delay: 0.5,
  duration: 1.5,
  top: "-100%",
  ease: "expo.inOut"
});

gsap.to(".second", {
  delay: 0.7,
  duration: 1.5,
  top: "-100%",
  ease: "expo.inOut"
});

gsap.to(".third", {
  delay: 0.9,
  duration: 1.5,
  top: "-100%",
  ease: "expo.inOut"
});

// Animate the hero image from right with a fade effect
gsap.from(".hero-image img", {
  opacity: 0,
  duration: 2,
  delay: 2,
  x: 60
});

// Animate the hero text from below
gsap.from(".hero-text", {
  opacity: 0,
  duration: 3,
  delay: 2.3,
  y: 25
});

// Stagger the appearance of text elements with class "anime-text"
gsap.from(".anime-text", {
  opacity: 0,
  duration: 3,
  delay: 2.3,
  y: 25,
  ease: "expo.out",
  stagger: 0.3
});

// Animate navigation logo and list items from below
gsap.from(".nav__logo", {
  opacity: 0,
  duration: 3,
  delay: 3.2,
  y: 25,
  ease: "expo.out"
});
gsap.from(".nav__item", {
  opacity: 0,
  duration: 3,
  delay: 3.2,
  y: 25,
  ease: "expo.out",
  stagger: 0.2
});

// Animate social icons with stagger
gsap.from(".home__social-icon", {
  opacity: 0,
  duration: 3,
  delay: 4,
  y: 25,
  ease: "expo.out",
  stagger: 0.2
});
