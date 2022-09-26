const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
libero et velit interdum, ac aliquet odio mattis.`;

const skills = {
  html: {
    name: "HTML",
    description: lorem,
  },
  css: {
    name: "css",
    description: lorem,
  },
  javascript: {
    name: "javascript",
    description: lorem,
  },
  sass: {
    name: "sass",
    description: lorem,
  },
  react: {
    name: "react",
    description: lorem,
  },
  next: {
    name: "next",
    description: lorem,
  },
  mongo: {
    name: "mongo",
    description: lorem,
  },
  typescript: {
    name: "typescript",
    description: lorem
  },
  node: {
    name: "node",
    description: lorem,
  },
  adonis: {
    name: "adonis",
    description: lorem,
  },
  mysql: {
    name: "mysql",
    description: lorem,
  },
  express: {
    name: "express",
    description: lorem,
  },
};
const languageName = document.querySelector(".language-name");
const languageDescription = document.querySelector(".language-description");

const iconFrontEnd = document.querySelectorAll(".icon-front-end");
const iconBackEnd = document.querySelectorAll(".icon-back-end");
let lastActiveFront;
let lastActiveBack;

const form = document.querySelector("form");

form.addEventListener("change", (e) => {
  if (e.target.value == "front") {
    document.querySelector(".languages#front-end").classList.add("active");
    document.querySelector(".languages#back-end").classList.remove("active");
    if (lastActiveBack == undefined) {
      activeIcon("html");
    } else {
      activeIcon(lastActiveFront);
    }
  } else {
    document.querySelector(".languages#back-end").classList.add("active");
    document.querySelector(".languages#front-end").classList.remove("active");
    if (lastActiveBack == undefined) {
      activeIcon("node");
    } else {
      activeIcon(lastActiveBack);
    }
  }
});

iconFrontEnd.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    languageName.textContent = skills[element.dataset.name].name;
    languageDescription.textContent = skills[element.dataset.name].description;

    iconFrontEnd.forEach((e) => {
      e.classList.remove("active");
    });

    element.classList.add("active");
    lastActiveFront = element.dataset.name;
  });
});

iconBackEnd.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    languageName.textContent = skills[element.dataset.name].name;
    languageDescription.textContent = skills[element.dataset.name].description;

    iconBackEnd.forEach((e) => {
      e.classList.remove("active");
    });

    element.classList.add("active");
    lastActiveBack = element.dataset.name;
  });
});

function activeIcon(iconName) {
  languageName.textContent = skills[iconName].name;
  languageDescription.textContent = skills[iconName].description;
}
