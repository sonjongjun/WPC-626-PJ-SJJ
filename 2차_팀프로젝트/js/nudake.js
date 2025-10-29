//마우스 스크롤을 밑으로 할 때 .header.top-menu가 display none로 바꾸기
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $(".top-menu").css("display", "none");
    }
})//scroll/////////////