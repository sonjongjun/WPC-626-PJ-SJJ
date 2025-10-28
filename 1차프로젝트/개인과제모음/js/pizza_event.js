

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

