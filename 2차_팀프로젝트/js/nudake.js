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


// .pdct-box > ul > li, .colab-box > ul > li, .store-box > ul > li:hover시
// li에 hover 되는 동안만
// 하위에 해당되는 각 p요소들만 opacity 0.5로 1초걸리게 하고 바꾸기!
$(".pdct-box > ul > li, .colab-box > ul > li, .store-box > ul > li").hover(function () {
    $(this).children("p").css("opacity", "0.5");
}, function () {
    $(this).children("p").css("opacity", "0");
});//hover

// html전체에서 부드럽고 일정한 속도로 움직이게 설정하기
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $("body").css("background-position", "0 " + ($(window).scrollTop() * 0.1) + "px");
    }
})

//ul.store 밑에 해당되는 li클릭시 형제요소인.store-box1-inbox의 z-index 3으로 transition 2s ease-in-out all로 바꾸기
$(".store > li").click(function () {
    $(".store-box1-inbox").css("z-index", "3");
    console.log("나 된다");
    
});