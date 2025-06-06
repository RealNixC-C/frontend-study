// HTML에서 해당 요소를 검색하여 찾은 모든 요소들을 반환
const boxEls = document.querySelectorAll('.box');
console.log(boxEls); // 찾은 요소들의 리스트가 반환됨 => 
// 앞에서 사용한 DOM API 들을 바로 쓸 수가 없음

// 위에서 찾은 Nodelist안의 요소들을 반복문으로 꺼내오기
// forEach() 메소드 사용: 배열에서 각 요소에 대한 반복 처리를 수행
// 인수(인자값)로 반복을 돌면서 꺼내온 요소를 처리하는 함수 작성
// 처리 함수 작성 시 매개변수(현재 가져온 요소, 요소의 인덱스) 순서가 중요!! =>
// boxEl과 index는 매개변수 작명
boxEls.forEach(function (boxEl, index) {
  console.log(index, boxEl);

  // boxEl.classList.add('order-' + (index + 1));
  boxEl.classList.add(`order-${index + 1}`); // 백틱 활용
});

// 요소의 내용 확인 및 수정
const boxEl = document.querySelector('.box')
console.log(boxEl.textContent); // 요소의 내용 출력

boxEl.textContent = 'CHANGE!!' // 요소의 내용 수정
console.log(boxEl.textContent);
// (참고) innerHTML: HTML 태그까지 조작하거나 삽입하고 싶을 때
boxEl.innerHTML = '<b>CHANGE!!</b>' // 요소의 내용 수정
