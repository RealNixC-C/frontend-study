

const introEl = document.querySelector('#int')
const aboutEl = document.querySelector('#abt')
const learnEl = document.querySelector('#lrn')
const projectEl = document.querySelector('#prj')

const introliEl = document.querySelector('.menu-list-intro')
const aboutliEl = document.querySelector('.menu-list-about')
const learnliEl = document.querySelector('.menu-list-skill')
const projectliEl = document.querySelector('.menu-list-project')

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



