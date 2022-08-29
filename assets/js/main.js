const hamburger = document.querySelector('.icon-hamburger')
const closeMenu = document.querySelector('.close-menu')
const menu = document.querySelector('.menu')

hamburger.addEventListener('click', () => {
  menu.classList.add('menu-active')
  document.body.style = "overflow-y:hidden"
})
closeMenu.addEventListener('click', () => {
  menu.classList.remove('menu-active')
  document.body.style = "overflow-y:visible"

})