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
    $(this).children("p").css("opacity", "0");
}, function () {
    $(this).children("p").css("opacity", "0");
});//hover


// html전체에서 부드럽고 일정한 속도로 움직이게 설정하기
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $("body").css("background-position", "0 " + ($(window).scrollTop() * 0.1) + "px");
    }
})



//ul.store 밑에 해당되는 첫번째 li클릭시 형제요소인.store-box1-inbox의 z-index 3으로 transition 2s ease-in-out all로 바꾸기
$(".store > li:first-child").click(function () {
  const box = $(".store-box1-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
});//click

// 도산 매장영역///////////////////////////////////////////////
$(".store > li:nth-child(2)").click(function () {
  const box = $(".store-box2-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
});//click


// 상하이 매장영역//////////////////////////////////////////////
$(".store > li:nth-child(3)").click(function () {
  const box = $(".store-box3-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
});//click


/////////////콜라보 영역1//////////////////////////////
$(".colab > li:first-child",).click(function () {
  const box = $(".colab-box1-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
});//click

/////////////콜라보 영역2//////////////////////////////
$(".colab > li:nth-child(2)",).click(function () {
  const box = $(".colab-box2-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
});//click

/////////////콜라보 영역3//////////////////////////////
$(".colab > li:nth-child(3)",).click(function () {
  const box = $(".colab-box3-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
});//click

/////////////콜라보 영역4//////////////////////////////
$(".colab > li:nth-child(4)",).click(function () {
  const box = $(".colab-box4-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
});//click

/////////////콜라보 영역5//////////////////////////////
$(".colab > li:nth-child(5)",).click(function () {
  const box = $(".colab-box5-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
});//click



/////////////품목 영역1//////////////////////////////
$(".pdct > li:first-child",).click(function () {
  const box = $(".pdct-box1-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
});//click


/////////////품목 영역2//////////////////////////////
$(".pdct > li:nth-child(2)",).click(function () {
  const box = $(".pdct-box2-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
});//click


/////////////품목 영역3//////////////////////////////
$(".pdct > li:nth-child(3)",).click(function () {
  const box = $(".pdct-box3-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
});//click



/////////////품목 영역3//////////////////////////////
$(".pdct > li:nth-child(3)",).click(function () {
  const box = $(".pdct-box3-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
});//click


// 상단 메뉴 클릭 시 해당 섹션으로 스크롤 이동
$(".top-menu > ul > li:nth-child(2)").click(function() {
  // STORES 클릭 시
  isScrolling = true;
  const storesSection = $(".store-box").offset().top;
  $("html, body").animate({
    scrollTop: storesSection -100
  }, 800, function() {
    isScrolling = false;
  });
});

$(".top-menu > ul > li:nth-child(3)").click(function() {
  // PROJECTS(COLLABORATIONS) 클릭 시
  isScrolling = true;
  const colabSection = $(".colab-box").offset().top;
  $("html, body").animate({
    scrollTop: colabSection - 100
  }, 800, function() {
    isScrolling = false;
  });
});

$(".top-menu > ul > li:nth-child(4)").click(function() {
  // MENU(PRODUCTS) 클릭 시
  isScrolling = true;
  const pdctSection = $(".pdct-box").offset().top;
  $("html, body").animate({
    scrollTop: pdctSection - 100
  }, 800, function() {
    isScrolling = false;
  });
});

$(".top-menu > ul > li:first-child").click(function() {
  // NUDAKE 로고 클릭 시 최상단으로
  isScrolling = true;
  $("html, body").animate({
    scrollTop: 0
  }, 800, function() {
    isScrolling = false;
  });
});