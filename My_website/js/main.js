

const introEl = document.querySelector('#id-intro')
const aboutEl = document.querySelector('#id-about')
const learnEl = document.querySelector('#id-learn')
const projectEl = document.querySelector('#id-project')
const contactEl = document.querySelector('#id-contact')

const introliEl = document.querySelector('.menu-list-intro')
const aboutliEl = document.querySelector('.menu-list-about')
const learnliEl = document.querySelector('.menu-list-skill')
const projectliEl = document.querySelector('.menu-list-project')
const contactliEl = document.querySelector('.menu-list-contact')

introEl.addEventListener('mouseover', function () {
    introliEl.classList.add('mouseover') 
}) 
introEl.addEventListener('mouseout', function () {
  introliEl.classList.remove('mouseover') 
})

aboutEl.addEventListener('mouseover', function () {
  aboutliEl.classList.add('mouseover') 
}) 
aboutEl.addEventListener('mouseout', function () {
  aboutliEl.classList.remove('mouseover') 
}) 

learnEl.addEventListener('mouseover', function () {
  learnliEl.classList.add('mouseover') 
}) 
learnEl.addEventListener('mouseout', function () {
  learnliEl.classList.remove('mouseover') 
}) 

projectEl.addEventListener('mouseover', function () {
  projectliEl.classList.add('mouseover') 
}) 
projectEl.addEventListener('mouseout', function () {
  projectliEl.classList.remove('mouseover') 
})

contactEl.addEventListener('mouseover', function () {
  contactliEl.classList.add('mouseover') 
}) 
contactEl.addEventListener('mouseout', function () {
  contactliEl.classList.remove('mouseover') 
}) 



