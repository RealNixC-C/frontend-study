const spyEls = document.querySelectorAll('section.scroll-spy');
console.log(spyEls);

const controller = new ScrollMagic.Controller();
spyEls.forEach(function (spyEl) {
  
  new ScrollMagic.Scene({ 
    triggerElement: spyEl, 
    triggerHook: 0.5 
  })
  .setClassToggle(spyEl, 'show') 
  .addTo(controller); 
});


const introEl = document.querySelector('#id-intro');
const aboutEl = document.querySelector('#id-about');
const skillEl = document.querySelector('#id-skill');
const projectEl = document.querySelector('#id-project');
const contactEl = document.querySelector('#id-contact');

const introliEl = document.querySelector('.menu-list-intro');
const aboutliEl = document.querySelector('.menu-list-about');
const skill_liEl = document.querySelector('.menu-list-skill');
const projectliEl = document.querySelector('.menu-list-project');
const contactliEl = document.querySelector('.menu-list-contact');

introEl.addEventListener('mouseover', function () {
  introliEl.classList.add('mouseover') 
}); 
introEl.addEventListener('mouseout', function () {
  introliEl.classList.remove('mouseover') 
});

aboutEl.addEventListener('mouseover', function () {
  aboutliEl.classList.add('mouseover') 
}); 
aboutEl.addEventListener('mouseout', function () {
  aboutliEl.classList.remove('mouseover') 
}); 
skillEl.addEventListener('mouseover', function () {
  skill_liEl.classList.add('mouseover') 
}); 
skillEl.addEventListener('mouseout', function () {
  skill_liEl.classList.remove('mouseover') 
}); 

projectEl.addEventListener('mouseover', function () {
  projectliEl.classList.add('mouseover') 
}); 
projectEl.addEventListener('mouseout', function () {
  projectliEl.classList.remove('mouseover') 
});

contactEl.addEventListener('mouseover', function () {
  contactliEl.classList.add('mouseover') 
});
contactEl.addEventListener('mouseout', function () {
  contactliEl.classList.remove('mouseover') 
});

const toTopEl = document.querySelector('.to-top');
const idEl = document.querySelector('#id');


window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  
  if (window.scrollY > 500) {
    toTopEl.style.opacity = 1;
    toTopEl.style.transform = "translate(0)";


  } else {
    toTopEl.style.opacity = 0;
    toTopEl.style.transform = "translateX(100px)";
  }
});


const yearEl = document.querySelector('.this-year');
console.log(new Date().getFullYear());
yearEl.textContent =new Date().getFullYear();


const modalBtn = document.querySelector('.project .btn-modal');
const modalEl = document.querySelector('btn-modal');
const closeBtn = document.querySelector('#modal .btn-close');

const imageModalBtnList = document.querySelectorAll('.project .btn-modal-image');
const imagemodalEl = document.querySelector('#imageModal');
const imagecloseBtn = document.querySelector('#imageModal .btn-close');
const imageEl = document.querySelector('#imageModal img');


const headerMenuEl = document.querySelector('.inner .header-menu');
const MenuListEl = document.querySelector('.inner .header-menu .menu-list');
const hamburgerEl = document.querySelector('.btn-hamburger span');
const menuListEls = document.querySelectorAll('.header .menu-list a');

hamburgerEl.addEventListener('click', function () {
  headerMenuEl.classList.toggle('active');
});

menuListEls.forEach(function (menuListEl) {
  menuListEl.addEventListener('click', function () {
    headerMenuEl.classList.remove('active');
  })
});




















// hamburgerEl.addEventListener('click', function () {
  
//   if (headerMenuEl.style.display = 'block' === 1) {
//     headerMenuEl.style.display = 'none'
//   } else {
//     headerMenuEl.style.display = 'block'
//   }
// })

// hamburgerEl.addEventListener('click', function () {
//   headerMenuEl.classList.toggle('appearance')
//   if (headerMenuEl.classList.contains('appearance')) {
//     headerMenuEl.style.display = 'block'
//   } else {
//     headerMenuEl.style.display = 'none'
//   }
// })

// menuListEls.forEach(function (menuListEl) {
//   menuListEl.addEventListener('click', function () {
//     headerMenuEl.style.display = 'none'
//   })
// })

// modalBtn.addEventListener('click', function () {
//   modalEl.style.display = "flex";
// })
// closeBtn.addEventListener('click', function () {
//   modalEl.style.display = "none";
// })

// imageModalBtnList.forEach(function (imageModalBtn, index) {
//   imageModalBtn.addEventListener('click', function () {
//     imageEl.src = imageModalBtn.dataset.imageSrc;
//     imagemodalEl.style.display = "flex"
//   })  
// });
// imagecloseBtn.addEventListener('click', function () {
//   imagemodalEl.style.display = "none"
// });