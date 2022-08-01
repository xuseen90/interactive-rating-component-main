let btn5 = document.querySelector('.btn5')
let btn4 = document.querySelector('.btn4')
let btn = document.querySelector('.submit')
let ct1 = document.querySelector('.ct1')
let ct2 = document.querySelector('.ct2')

btn5.addEventListener('mouseenter', () => {
  btn4.classList.add('btn-4')
})
btn5.addEventListener('mouseleave', () => {
  btn4.classList.remove('btn-4')
})

btn.addEventListener('click', () => {
  ct1.classList.add('hide')
  ct2.classList.add('show')
})
