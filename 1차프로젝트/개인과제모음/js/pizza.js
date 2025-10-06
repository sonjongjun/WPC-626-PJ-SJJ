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

// .sl-piz8>img에 마우스 오버시




//sl-piz-info>i 클릭시 sl-piz-info가 translateX(100%)로 이동
let
