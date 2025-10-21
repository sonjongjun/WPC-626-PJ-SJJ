let xicon = document.querySelector('.review-detail .fa-xmark');
xicon.addEventListener('click', () => {
    document.querySelector('.review-detail').style.top = '-100%';
});

let detailon = document.querySelector('.review-box');
detailon.addEventListener('click', () => {
    document.querySelector('.review-detail').style.top = '0';
});




// 새로 추가할 코드: 이미지 호버 시 텍스트 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    // 로고 이미지들과 텍스트들 선택
    const logoLinks = document.querySelectorAll('.logo-part a');
    const logoTexts = document.querySelectorAll('.logo-font li');
    
    // 각 로고 링크에 마우스 이벤트 추가
    logoLinks.forEach((link, index) => {
        // 마우스 오버 시
        link.addEventListener('mouseenter', () => {
            // 해당하는 텍스트에 active 클래스 추가
            if (logoTexts[index]) {
                logoTexts[index].classList.add('active');
            }
        });/////////마우스들어올때
        
        // 마우스 아웃 시
        link.addEventListener('mouseleave', () => {
            // 해당하는 텍스트에서 active 클래스 제거
            if (logoTexts[index]) {
                logoTexts[index].classList.remove('active');
            }
        });
    });
});

// .sl-piz8에 마우스 클릭시 section.sl-piz-info 의 translate값을(41% 0%)로 변경
let piz8 = document.querySelector('.sl-piz8');
piz8.addEventListener('click', () => {
    document.querySelector('.sl-piz-info8').style.translate = '41% 0%';
     document.querySelector('.sl-piz-info2').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info1').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info3').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info4').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info6').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info5').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info7').style.translate = '100% 0%';
// 트랜지션 효과 부여
    document.querySelector('.sl-piz-info8').style.transition = 'translate 0.5s ease-in-out';
});//click이벤트
// .sl-piz-info8의 x아이콘 클릭시 section.sl-piz-info8 의 translate값을(100% 0%)로 변경
let xicon9 = document.querySelector('.sl-piz-info8 .fa-xmark');
xicon9.addEventListener('click', () => {
    document.querySelector('.sl-piz-info8').style.translate = '100% 0%';
// 트랜지션 효과 부여
    document.querySelector('.sl-piz-info8').style.transition = 'translate 0.5s ease-in-out';
});//click이벤트

// 각각 피자조각에 마우스 클릭시 section.sl-piz-info 의 translate값을(41% 0%)로 변경
let piz1 = document.querySelector('.sl-piz1');
let piz2 = document.querySelector('.sl-piz2');
let piz3 = document.querySelector('.sl-piz3');
let piz4 = document.querySelector('.sl-piz4');
let piz5 = document.querySelector('.sl-piz5');
let piz6 = document.querySelector('.sl-piz6');
let piz7 = document.querySelector('.sl-piz7');
piz1.addEventListener('click', () => {
    document.querySelector('.sl-piz-info1').style.translate = '41% 0%';
    document.querySelector('.sl-piz-info2').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info3').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info4').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info5').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info6').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info7').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info8').style.translate = '100% 0%';
// 트랜지션 효과 부여
    document.querySelector('.sl-piz-info1').style.transition = 'translate 0.5s ease-in-out';
});//click이벤트


piz2.addEventListener('click', () => {
    document.querySelector('.sl-piz-info2').style.translate = '41% 0%';
      document.querySelector('.sl-piz-info1').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info3').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info4').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info5').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info6').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info7').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info8').style.translate = '100% 0%';
// 트랜지션 효과 부여
    document.querySelector('.sl-piz-info2').style.transition = 'translate 0.5s ease-in-out';
});//click이벤트
piz3.addEventListener('click', () => {
    document.querySelector('.sl-piz-info3').style.translate = '41% 0%';
    document.querySelector('.sl-piz-info2').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info1').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info4').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info5').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info6').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info7').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info8').style.translate = '100% 0%';
// 트랜지션 효과 부여
    document.querySelector('.sl-piz-info3').style.transition = 'translate 0.5s ease-in-out';
});//click이벤트
piz4.addEventListener('click', () => {
    document.querySelector('.sl-piz-info4').style.translate = '41% 0%';
     document.querySelector('.sl-piz-info2').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info1').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info3').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info5').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info6').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info7').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info8').style.translate = '100% 0%';
// 트랜지션 효과 부여
    document.querySelector('.sl-piz-info4').style.transition = 'translate 0.5s ease-in-out';
});//click이벤트
piz5.addEventListener('click', () => {
    document.querySelector('.sl-piz-info5').style.translate = '41% 0%';
     document.querySelector('.sl-piz-info2').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info1').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info3').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info4').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info6').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info7').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info8').style.translate = '100% 0%';
// 트랜지션 효과 부여
    document.querySelector('.sl-piz-info5').style.transition = 'translate 0.5s ease-in-out';
});//click이벤트
piz6.addEventListener('click', () => {
    document.querySelector('.sl-piz-info6').style.translate = '41% 0%';
     document.querySelector('.sl-piz-info2').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info1').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info3').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info4').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info5').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info7').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info8').style.translate = '100% 0%';
// 트랜지션 효과 부여
    document.querySelector('.sl-piz-info6').style.transition = 'translate 0.5s ease-in-out';
});//click이벤트
piz7.addEventListener('click', () => {
    document.querySelector('.sl-piz-info7').style.translate = '41% 0%';
     document.querySelector('.sl-piz-info2').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info1').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info3').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info4').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info6').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info5').style.translate = '100% 0%';
    document.querySelector('.sl-piz-info8').style.translate = '100% 0%';
// 트랜지션 효과 부여
    document.querySelector('.sl-piz-info7').style.transition = 'translate 0.5s ease-in-out';
});//click이벤트


let xicon2 = document.querySelector('.sl-piz-info1 .fa-xmark');
xicon2.addEventListener('click', () => {
    document.querySelector('.sl-piz-info1').style.translate = '100% 0%';
// 트랜지션 효과 부여
    document.querySelector('.sl-piz-info1').style.transition = 'translate 0.5s ease-in-out';
});//click이벤트
let xicon3 = document.querySelector('.sl-piz-info2 .fa-xmark');
xicon3.addEventListener('click', () => {
    document.querySelector('.sl-piz-info2').style.translate = '100% 0%';
// 트랜지션 효과 부여
    document.querySelector('.sl-piz-info2').style.transition = 'translate 0.5s ease-in-out';
});//click이벤트
let xicon4 = document.querySelector('.sl-piz-info3 .fa-xmark');
xicon4.addEventListener('click', () => {
    document.querySelector('.sl-piz-info3').style.translate = '100% 0%';
// 트랜지션 효과 부여
    document.querySelector('.sl-piz-info3').style.transition = 'translate 0.5s ease-in-out';
});//click이벤트
let xicon5 = document.querySelector('.sl-piz-info4 .fa-xmark');
xicon5.addEventListener('click', () => {
    document.querySelector('.sl-piz-info4').style.translate = '100% 0%';
// 트랜지션 효과 부여
    document.querySelector('.sl-piz-info4').style.transition = 'translate 0.5s ease-in-out';
});//click이벤트
let xicon6 = document.querySelector('.sl-piz-info5 .fa-xmark');
xicon6.addEventListener('click', () => {
    document.querySelector('.sl-piz-info5').style.translate = '100% 0%';
// 트랜지션 효과 부여
    document.querySelector('.sl-piz-info5').style.transition = 'translate 0.5s ease-in-out';
});//click이벤트
let xicon7 = document.querySelector('.sl-piz-info6 .fa-xmark');
xicon7.addEventListener('click', () => {
    document.querySelector('.sl-piz-info6').style.translate = '100% 0%';
// 트랜지션 효과 부여
    document.querySelector('.sl-piz-info6').style.transition = 'translate 0.5s ease-in-out';
});//click이벤트
let xicon8 = document.querySelector('.sl-piz-info7 .fa-xmark');
xicon8.addEventListener('click', () => {
    document.querySelector('.sl-piz-info7').style.translate = '100% 0%';
// 트랜지션 효과 부여
    document.querySelector('.sl-piz-info7').style.transition = 'translate 0.5s ease-in-out';
});//click이벤트




// sl-piz-info창이 하나씩만 열려있게 하기 (하나가 열리면 나머지는 닫히게 하기)



  var swiper = new Swiper(".m-banner-box", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });



      var swiper2 = new Swiper(".m-piz-area", {
      slidesPerView: 2,
      grid: {
        rows: 2,
        
      },
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    console.log(swiper2);

 // check-btn 클릭시 black-btn의 opacity를 토글
document.addEventListener('DOMContentLoaded', function() {
    const checkBtns = document.querySelectorAll('.check-btn');
    
    checkBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('버튼 클릭됨'); // 디버깅용
            
            // 모든 black-btn의 opacity를 0으로
            document.querySelectorAll('.black-btn1, .black-btn2').forEach(black => {
                black.style.opacity = '0';
            });
            
            // 클릭된 버튼의 black-btn만 1로
            const blackBtn = this.querySelector('.black-btn1, .black-btn2');
            if (blackBtn) {
                blackBtn.style.opacity = '1';
                console.log('opacity 변경됨'); // 디버깅용
            }
        });
    });
});

// 햄버거 버튼 클릭 시 모바일 메뉴 열기/닫기
document.addEventListener('DOMContentLoaded', () => {
  const btnHam = document.querySelector('.btn-ham');
  const topArea = document.getElementById('top-area');
  const mWindow = document.querySelector('.m-right-menu');

  if (btnHam && topArea && mWindow) {
    // 초기 상태: 메뉴 닫힘
    mWindow.style.transform = 'translateX(100%)';
    mWindow.style.transition = 'transform 0.4s ease-in-out';

    btnHam.addEventListener('click', () => {
      topArea.classList.toggle('on');

      if (topArea.classList.contains('on')) {
        // 메뉴 열기
        mWindow.style.transform = 'translateX(-2.6%)';
      } else {
        // 메뉴 닫기
        mWindow.style.transform = 'translateX(100%)';
      }
    });
  }
});


