// pizza delivery JS - pizza_delivery.js

const pizzaInfo = [
    "핫 스파이시 페퍼로니",
    "핫치킨 하와이안클럽",
    "와일드 불고기 할라피뇨",
    "스톰 콤비네이션",
    "리얼 더블불고기",
    "아메리칸 치즈",
    "<h2>88페퍼로니</h2>",
    "허리케인 골드",
    "딥 체다치즈 베이컨",
    "텍사스 풀드포크",
    "두둥! 바이킹쉬림프",
    "보스 포테이토",
];


// 파라미터로 넘어온 값 저장하기
let pm = location.href;
pm = Number(pm.split('=')[1]);
console.log(pm);

// 변경대상
const dImgArea = document.querySelector('.d-img-area');
let tit = dImgArea.querySelector('h2');
let bigImg = dImgArea.querySelector('img');

// 타이틀 넣기
tit.innerHTML = pizzaInfo[pm];
// 이미지 경로 변경하기
bigImg.src = `./피자리스트/피자${pm+1}누끼.png`;
// 이미지 설명 넣기
bigImg.alt = pizzaInfo[pm];

/* 참고 실제코드 구조
<div class="d-img-area">
    <h2>
        핫 스파이시 페퍼로니
    </h2>
    <img src="./피자리스트/피자1누끼.png" alt="핫 스파이시 페퍼로니">
</div>
*/

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