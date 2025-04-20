let fruits = ['Aple', 'Banana', 'Cherry'];
console.log(fruits[1]);

function hello () {
  console.log('Hello~');                              
}

hello();

// const boxEl = document.querySelector('.box')
// console.log(boxEl.textContent);

// const boxEl = document.addEventListener('click', function () {
//   console.log('Hello~')
// })  오답. 문제에서  const boxEl = document.querySelector('.box')를
// 제시해 주었기 때문에 객체 boxEl의 값에 리스너만 추가하면됨
boxEl.addEventListener('click', function () {
  console.log('Hello~')
})

