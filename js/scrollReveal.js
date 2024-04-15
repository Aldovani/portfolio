// =============== Scroll Reveal ===============
const slideUp = {
  distance: "30px",
  origin: "bottom",
  delay: 250,
};

const slideDown = {
  distance: "50px",
  origin: "top",
  delay: 500,
};

ScrollReveal({}).reveal(".navigation-links li", {
  ...slideUp,
  interval: 100,
});
ScrollReveal().reveal(".slide-up", slideUp);
ScrollReveal().reveal(".title", {
  distance: "30px",
  origin: "bottom",
  afterReveal: function (el) {
    el.classList.add("visible");
  },
});

ScrollReveal().reveal(".subtitle", {
  distance: "40px",
  origin: "bottom",
  afterReveal: function (el) {
    el.classList.add("visible");
  },
});

ScrollReveal().reveal(".card", {
  distance: "80px",
  origin: "bottom",
});

const project = {
  distance: "80px",
  origin: "bottom",
  viewOffset: {
    top: 300,
  },
};

ScrollReveal().reveal(".project", { ...project, interval: 500 });

ScrollReveal().reveal(".slide-down", slideDown);
