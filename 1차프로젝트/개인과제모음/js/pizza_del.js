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
            
            // 클릭된 버튼의 자식 중 black-btn 찾기
            const blackBtn1 = this.querySelector('.black-btn1');
            const blackBtn2 = this.querySelector('.black-btn2');
            const blackBtn3 = this.querySelector('.black-btn3');
            const blackBtn4 = this.querySelector('.black-btn4');
            const blackBtn5 = this.querySelector('.black-btn5');
            
            console.log('black-btn1 찾음:', blackBtn1);
            console.log('black-btn2 찾음:', blackBtn2);
            console.log('black-btn3 찾음:', blackBtn3);
            console.log('black-btn4 찾음:', blackBtn4);
            console.log('black-btn5 찾음:', blackBtn5);
            
            // black-btn1, 2는 단일 선택 (라디오 버튼처럼)
            if (blackBtn1 || blackBtn2) {
                // 1, 2번 그룹의 모든 버튼을 0으로
                document.querySelectorAll('.black-btn1, .black-btn2').forEach(black => {
                    black.style.opacity = '0';
                });
                
                // 클릭된 버튼만 1로
                const clickedBtn = blackBtn1 || blackBtn2;
                if (clickedBtn) {
                    clickedBtn.style.opacity = '1';
                    console.log('opacity 변경됨 (단일선택), 현재 opacity:', clickedBtn.style.opacity);
                }
            }
            
            // black-btn3, 4, 5는 다중 선택 (체크박스처럼)
            if (blackBtn3 || blackBtn4 || blackBtn5) {
                const clickedBtn = blackBtn3 || blackBtn4 || blackBtn5;
                if (clickedBtn) {
                    // 현재 상태를 토글
                    if (clickedBtn.style.opacity === '1') {
                        clickedBtn.style.opacity = '0';
                        console.log('opacity 변경됨 (다중선택 OFF), 현재 opacity:', clickedBtn.style.opacity);
                    } else {
                        clickedBtn.style.opacity = '1';
                        console.log('opacity 변경됨 (다중선택 ON), 현재 opacity:', clickedBtn.style.opacity);
                    }
                }
            }
        });
    });
});