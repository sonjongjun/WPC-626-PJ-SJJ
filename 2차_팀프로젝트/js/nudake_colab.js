//마우스 스크롤을 밑으로 할 때 .header.top-menu가 display none로 1초걸리게 하고 바꾸기
$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $(".top-menu").css("display", "none");
  }
}); //scroll/////////////

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
}); //scroll/////////////

// .pdct-box > ul > li, .colab-box > ul > li, .store-box > ul > li:hover시
// li에 hover 되는 동안만
// 하위에 해당되는 각 p요소들만 opacity 0.5로 1초걸리게 하고 바꾸기!
$(".pdct-box > ul > li, .colab-box > ul > li, .store-box > ul > li").hover(
  function () {
    $(this).children("p").css("opacity", "0.5");
  },
  function () {
    $(this).children("p").css("opacity", "0");
  }
); //hover

// html전체에서 부드럽고 일정한 속도로 움직이게 설정하기
$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $("body").css(
      "background-position",
      "0 " + $(window).scrollTop() * 0.1 + "px"
    );
  }
});

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
}); //click

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
}); //click

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
}); //click

/////////////콜라보 영역1//////////////////////////////
$(".colab > li:first-child").click(function () {
  const box = $(".colab-box1-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
}); //click

/////////////콜라보 영역2//////////////////////////////
$(".colab > li:nth-child(2)").click(function () {
  const box = $(".colab-box2-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
}); //click

/////////////콜라보 영역3//////////////////////////////
$(".colab > li:nth-child(3)").click(function () {
  const box = $(".colab-box3-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
}); //click

/////////////콜라보 영역4//////////////////////////////
$(".colab > li:nth-child(4)").click(function () {
  const box = $(".colab-box4-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
}); //click

/////////////콜라보 영역5//////////////////////////////
$(".colab > li:nth-child(5)").click(function () {
  const box = $(".colab-box5-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
}); //click

/////////////품목 영역1//////////////////////////////
$(".pdct > li:first-child").click(function () {
  const box = $(".pdct-box1-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
}); //click

/////////////품목 영역2//////////////////////////////
$(".pdct > li:nth-child(2)").click(function () {
  const box = $(".pdct-box2-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
}); //click

/////////////품목 영역3//////////////////////////////
$(".pdct > li:nth-child(3)").click(function () {
  const box = $(".pdct-box3-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
}); //click

/////////////품목 영역3//////////////////////////////
$(".pdct > li:nth-child(3)").click(function () {
  const box = $(".pdct-box3-inbox");

  // 나타나게 (왼쪽에서 오른쪽으로 슬라이드)
  box.addClass("active");
  console.log("나 된다");

  // 마우스가 박스 영역을 벗어나면 z-index를 다시 낮춤
  box.on("mouseleave", function () {
    box.removeClass("active");
    // 필요하다면 console.log("마우스 아웃"); 추가 가능
  });
}); //click

// 상단 메뉴 클릭 시 해당 섹션으로 스크롤 이동
$(".top-menu > ul > li:nth-child(2)").click(function () {
  // STORES 클릭 시
  isScrolling = true;
  const storesSection = $(".store-box").offset().top;
  $("html, body").animate(
    {
      scrollTop: storesSection - 100,
    },
    800,
    function () {
      isScrolling = false;
    }
  );
});

$(".top-menu > ul > li:nth-child(3)").click(function () {
  // PROJECTS(COLLABORATIONS) 클릭 시
  isScrolling = true;
  const colabSection = $(".colab-box").offset().top;
  $("html, body").animate(
    {
      scrollTop: colabSection - 100,
    },
    800,
    function () {
      isScrolling = false;
    }
  );
});

$(".top-menu > ul > li:nth-child(4)").click(function () {
  // MENU(PRODUCTS) 클릭 시
  isScrolling = true;
  const pdctSection = $(".pdct-box").offset().top;
  $("html, body").animate(
    {
      scrollTop: pdctSection - 100,
    },
    800,
    function () {
      isScrolling = false;
    }
  );
});

$(".top-menu > ul > li:first-child").click(function () {
  // NUDAKE 로고 클릭 시 최상단으로
  isScrolling = true;
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    800,
    function () {
      isScrolling = false;
    }
  );
});

//cb-arti의 css를 갖고있는 arti-1, arti-2, arti-3, arti-4, arti-5 각자가 클릭될 때
// translate: 0% 0%로 바꾸기
$(".cb-arti").each(function () {
  // 초기 translate 값을 data 속성에 저장
  const initialTranslate = $(this).css("translate");
  $(this).attr("data-original-translate", initialTranslate);
});

$(".cb-arti").click(function () {
  const isOpen = $(this).css("translate") === "0% 0%";

  // 모든 arti를 원래 위치로 복귀
  $(".cb-arti").each(function () {
    const original = $(this).attr("data-original-translate");
    $(this).css("translate", original);
  });

  // 클릭한 게 닫힌 상태였다면 — 열기
  if (!isOpen) {
    $(this).css("translate", "0% 0%");
  }
  console.log("arti 클릭됨");
}); //click//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// 아티클 클릭 이벤트 (기존 로직 유지)
$(".cb-arti").each(function () {
  const initialTranslate = $(this).css("transform");
  $(this).attr("data-original-translate", initialTranslate);
});

$(".cb-arti").click(function (e) {
  e.stopPropagation();

  const currentTransform = $(this).css("transform");
  const isOpen =
    currentTransform === "matrix(1, 0, 0, 1, 0, 0)" ||
    currentTransform === "none" ||
    currentTransform === "translateY(0px)";

  $(".cb-arti").each(function () {
    const original = $(this).attr("data-original-translate");
    if (original && original !== "none") {
      $(this).css("transform", original);
    } else {
      // data-original-translate이 없는 경우를 위한 fallback
      if ($(this).hasClass("arti-1")) {
        $(this).css("transform", "translateY(90%)");
      } else if ($(this).hasClass("arti-2")) {
        $(this).css("transform", "translateY(86%)");
      } else if ($(this).hasClass("arti-3")) {
        $(this).css("transform", "translateY(90%)");
      } else if ($(this).hasClass("arti-4")) {
        $(this).css("transform", "translateY(87.3%)");
      } else if ($(this).hasClass("arti-5")) {
        $(this).css("transform", "translateY(88.5%)");
      }
    }
  });

  if (!isOpen) {
    $(this).css("transform", "translateY(0%)");
  }

  console.log("arti 클릭됨");
});

////////////////////////////////////////////////////////////////////////////
//////////// 스크롤에 따른 cb-inbox li 애니메이션 /////////////////////////
////////////////////////////////////////////////////////////////////////////

$(window).scroll(function () {
  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();

  // cb-box의 위치 확인
  const cbBoxOffset = $(".cb-box").offset();

  if (cbBoxOffset) {
    const cbBoxTop = cbBoxOffset.top;
    const cbBoxHeight = $(".cb-box").height();
    const cbBoxBottom = cbBoxTop + cbBoxHeight;

    // cb-box 영역을 완전히 벗어났는지 확인
    const isAfterCbBox = scrollTop >= cbBoxBottom;

    // cb-box 영역이 끝나면 cb-inbox 숨기기
    if (scrollTop < cbBoxTop || isAfterCbBox) {
      $(".cb-inbox").css("opacity", "0");
      $(".cb-inbox").css("pointer-events", "none");
    } else {
      $(".cb-inbox").css("opacity", "1");
      $(".cb-inbox").css("pointer-events", "auto");
    }

    // cb-box 영역을 벗어나면 애니메이션 중단
    if (scrollTop < cbBoxTop || isAfterCbBox) {
      return;
    }

    // cb-box 내에서의 스크롤 진행도 (0~1)
    const progress = Math.min(
      Math.max((scrollTop - cbBoxTop) / (cbBoxHeight - windowHeight), 0),
      1
    );

    // 5번째 li의 애니메이션 완료 여부 체크
    let fifthLiComplete = false;

    // 각 li에 대해 애니메이션 적용
    $(".cb-inbox > li").each(function (index) {
      // 각 li마다 다른 시작 지점을 가지도록 설정 (더 넓게 분산)
      const startProgress = index * 0.2; // 0, 0.2, 0.4, 0.6, 0.8
      const endProgress = startProgress + 0.2; // 애니메이션 지속 구간

      // 해당 li의 애니메이션 진행도 계산
      let liProgress = 0;
      if (progress >= startProgress && progress <= endProgress) {
        liProgress = (progress - startProgress) / 0.2;
      } else if (progress > endProgress) {
        liProgress = 1;
      }

      // 5번째 li(index 4)가 완료되었는지 체크
      if (index === 4 && liProgress === 1) {
        fifthLiComplete = true;
      }

      // 초기 translateY 값 100vh에서 0으로
      const currentTranslate = 100 - 100 * liProgress;

      // transform 적용
      $(this).css("transform", "translateY(" + currentTranslate + "vh)");
    });

    // 5번째 li 애니메이션이 완료되면 cb-box 높이를 100vh로 변경
    if (fifthLiComplete && progress > 1) {
      $(".cb-box").css("height", "100vh");
    }
  }
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

var swiper3 = new Swiper(".mySwiper3", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// .b-sec2>li에 hover시 .b-sec2 section > p 의 display: none를 block으로 바꾸기
// // transition 1s ease=in-out all로
// 뒤에있는 배경을 지우면서
$(".b-sec2 > li").hover(
  function () {
    $(this).find("p").css("display", "block");
  },
  function () {
    $(this).find("p").css("display", "none");
  }
);