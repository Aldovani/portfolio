const $buttonMenu = document.querySelector(".button-menu");
const $nav = document.querySelector(".navigation-links");
const $links = $nav.querySelectorAll("li");

$buttonMenu.addEventListener("click", () => {
  $nav.classList.add("open");
});

$links.forEach((link) => {
  link.addEventListener("click", () => {
    $nav.classList.remove("open");
  });
});
