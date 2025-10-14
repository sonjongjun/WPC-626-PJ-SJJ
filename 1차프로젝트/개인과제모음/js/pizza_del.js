
// check-btn 클릭시 black-btn의 opacity를 토글
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded 실행됨');
    
    const checkBtns = document.querySelectorAll('.check-btn');
    console.log('찾은 check-btn 개수:', checkBtns.length);
    
    checkBtns.forEach((btn, index) => {
        console.log(`check-btn ${index} 구조:`, btn.innerHTML);
        
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('버튼 클릭됨, 버튼 내용:', this.innerHTML);
            
            // 모든 black-btn의 opacity를 0으로
            const allBlackBtns = document.querySelectorAll
            ('.black-btn1, .black-btn2, .black-btn3, .black-btn4, .black-btn5');
            
            console.log('찾은 black-btn 개수:', allBlackBtns.length);
            
            allBlackBtns.forEach(black => {
                black.style.opacity = '0';
            });
            
            // 클릭된 버튼의 자식 중 black-btn 찾기
            const blackBtn1 = this.querySelector('.black-btn1');
            const blackBtn2 = this.querySelector('.black-btn2');
            const blackBtn3 = this.querySelector('.black-btn3');
            const blackBtn4 = this.querySelector('.black-btn4');
            const blackBtn5 = this.querySelector('.black-btn5');
            
            console.log('black-btn1 찾음:', blackBtn1);
            console.log('black-btn2 찾음:', blackBtn2);
            
            const blackBtn = blackBtn1 || blackBtn2;
            // blackBtn3,4,5 번은 다중선택이 가능하게 만들기
            const blackBtn2nd = blackBtn1 || blackBtn2 || blackBtn3 || blackBtn4 || blackBtn5;

            if (blackBtn2nd) {
                blackBtn.style.opacity = '1';
            
            if (blackBtn) {
                blackBtn.style.opacity = '1';
                console.log('opacity 변경됨, 현재 opacity:', blackBtn.style.opacity);
            } else {
                console.log('black-btn을 찾을 수 없음!');
            }
        });
    });
});