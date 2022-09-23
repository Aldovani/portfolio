const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
libero et velit interdum, ac aliquet odio mattis.`

const skillsFrontEnd = {
  html: {
    name: 'HTML',
    description: lorem
  },
  css: {
    name: 'css',
    description: lorem
  },
  javascript: {
    name: 'javascript',
    description: lorem
  },
  sass: {
    name: 'sass',
    description: lorem
  },
  react: {
    name: 'react',
    description: lorem
  },
  next: {
    name: 'next',
    description: lorem
  },
}
const languageName = document.querySelector('.language-name')
const languageDescription = document.querySelector('.language-description')


window.addEventListener('load', () => {


  const iconFrontEnd = document.querySelectorAll('.icon-front-end')

  iconFrontEnd.forEach(e => {
    e.addEventListener('mouseenter', () => {
      languageName.textContent = skillsFrontEnd[e.dataset.name].name
      languageDescription.textContent = skillsFrontEnd[e.dataset.name].description
    })
  })
})