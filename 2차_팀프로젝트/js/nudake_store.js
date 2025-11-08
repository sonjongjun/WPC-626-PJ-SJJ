//마우스 스크롤을 밑으로 할 때 .header.top-menu가 display none로 1초걸리게 하고 바꾸기
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $(".top-menu").css("display", "none");
        
    }
})//scroll/////////////

// 스크롤 이벤트 통합 처리
$(window).scroll(function () {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const documentHeight = $(document).height();
    
    // 최상단 (0px)
    if (scrollTop === 0) {
        $(".top-menu").css("display", "block");
    }
    // 최하단 (여유값 10px 추가로 더 잘 감지)
    else if (scrollTop + windowHeight >= documentHeight - 10) {
        $(".top-menu").css("display", "block");
    }
    // 중간 영역
    else {
        $(".top-menu").css("display", "none");
    }
});//scroll/////////////
$(".top-menu > ul > li:first-child").click(function() {
  // NUDAKE 로고 클릭 시 최상단으로
  isScrolling = true;
  $("html, body").animate({
    scrollTop: 0
  }, 800, function() {
    isScrolling = false;
  });
});


// 슬라이드 js
 var swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
    });

    //2번쨰 슬라이드 js
     var swiper2 = new Swiper(".mySwiper2", {
      effect: "cards",
      grabCursor: true,
    }); 