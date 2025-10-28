// pizza delivery JS - pizza_delivery.js


// 햄버거 버튼 클릭 시 모바일 메뉴 열기/닫기
document.addEventListener('DOMContentLoaded', () => {
  const btnHam = document.querySelector('.btn-ham');
  const topArea = document.getElementById('top-area');
  const mWindow = document.querySelector('.m-right-menu');

  if (btnHam && topArea && mWindow) {
    // 초기 상태: 메뉴 닫힘
    mWindow.style.transform = 'translateX(100%)';
    mWindow.style.transition = 'transform 0.4s ease-in-out';
    mWindow.style.marginTop =  '11.6vh';

    btnHam.addEventListener('click', () => {
      topArea.classList.toggle('on');

      if (topArea.classList.contains('on')) {
        // 메뉴 열기
        mWindow.style.transform = 'translateX(-0%)';
      } else {
        // 메뉴 닫기
        mWindow.style.transform = 'translateX(100%)';
      }
    });
  }
});
// 화면의 넓이가 1024px 이하인 경우 size-area안의 글자 L사이즈를 L사이즈 <br><br> 30,900원으로 바꾸기 1024px 이상이면 'L사이즈'로 바꾸기
window.addEventListener('resize', () => {
  if (window.innerWidth < 1024) {
    const sizeArea = document.querySelector('.size-area button');
    sizeArea.innerHTML = 'L사이즈 <br><br> 30,900원';
  }
  else {
    const sizeArea = document.querySelector('.size-area button');
    sizeArea.innerHTML = 'L사이즈';
  }
});//resize//////////


// 화면의 넓이가 1024px 이하인 경우 size-area안의 글자 M사이즈를 M사이즈 <br><br> 24,900원으로 바꾸기
window.addEventListener('resize', () => {
  if (window.innerWidth < 1024) {
    const sizeArea = document.querySelector('.size-area button:nth-child(2)');
    sizeArea.innerHTML = 'M사이즈 <br><br> 24,900원';
  }
  else {
    const sizeArea = document.querySelector('.size-area button:nth-child(2)');
    sizeArea.innerHTML = 'M사이즈';
  }
});//resize//////////

// button.order-btn 의 ul > li:last-child 클릭시 h2 텍스트를 "총 1개 26,200원 담기"로 바꾸기!
const orderBtn = document.querySelector('.order-btn');
const orderBtnLast = document.querySelector('.order-btn ul > li:last-child');
const orderPrice = orderBtn.querySelector('h2');

orderBtnLast.addEventListener('click', () => {
  orderPrice.innerHTML = '총 1개 26,200원 담기';
  // console.log(orderPrice);
});

// button.order-btn 의 ul > li:first-child 클릭시 h2 텍스트를 "총 1개 38,200원 담기"로 바꾸기!
const orderBtnFirst = document.querySelector('.order-btn ul > li:first-child');

orderBtnFirst.addEventListener('click', () => {
  orderPrice.innerHTML = '총 1개 38,200원 담기';
});