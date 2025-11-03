//마우스 스크롤을 밑으로 할 때 .header.top-menu가 display none로 1초걸리게 하고 바꾸기
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $(".top-menu").css("display", "none");
        
    }
})//scroll/////////////

// html의 최상단에서 스크롤을 위로하면 .header.top-menu가 display block로 1초걸리게 하고 바꾸기
$(window).scroll(function () {
    if ($(window).scrollTop() == 0) {
        $(".top-menu").css("display", "block");
    }
})//scroll/////////////
