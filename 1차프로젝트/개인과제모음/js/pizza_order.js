// pizza order JS 파일 - pizza_order.js

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


const pizzaList = document.querySelector('.pizza-list');


pizzaList.innerHTML = pizzaInfo.map((v,i)=>`
    <div>
        <a href="#">
        <img src="./피자리스트/피자${i+1}.jpg" alt="피자${i+1}">
        <img src="./피자리스트/피자변환${i+1}.jpg" alt="피자변환${i+1}">
        </a>
        <aside>
        <h2>${v}</h2>
        </aside>
    </div>
`).join('');


// 링크설정하기
pizzaList.querySelectorAll('a').forEach((el,idx)=>{
    el.addEventListener('click',function(e){
        e.preventDefault();
        console.log('링크 클릭됨');
        location.href = `04.pizza_delivery-1.html?no=${idx}`;
    });
}); //////////// forEach //////////////////


// 확인용 ////
let test = pizzaInfo.map((v,i)=>`
    <div>
        <a href="#">
        <img src="./피자리스트/피자${i+1}.jpg" alt="피자${i+1}">
        <img src="./피자리스트/피자변환${i+1}.jpg" alt="피자변환${i+1}">
        </a>
        <aside>
        <h2>${v}</h2>
        </aside>
    </div>
`);


console.log(test);
console.log(test.join(''));

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

