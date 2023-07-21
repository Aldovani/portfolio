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

ScrollReveal({
  mobile: false,
}).reveal(".navigation-links li", slideUp);
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

ScrollReveal().reveal(".project:nth-child(1)", { ...project, delay: 500 });
ScrollReveal().reveal(".project:nth-child(2)", { ...project, delay: 300 });
ScrollReveal().reveal(".project:nth-child(3)", { ...project, delay: 500 });
ScrollReveal().reveal(".project:nth-child(4)", { ...project, delay: 300 });

ScrollReveal().reveal(".slide-down", slideDown);
ScrollReveal().reveal(".slide-down", slideDown);
