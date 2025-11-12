$(document).ready(function() {
  // NUDAKE 로고 클릭 이벤트 먼저 등록 (JSON 로드와 무관하게 작동)
  $('.top-menu > ul > li:first-child').off('click').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('NUDAKE 로고 클릭');
    location.href = './NUDAKE_PJ.html';
  });
});




// 전역 변수
let isScrolling = false;

$(document).ready(function() {
  // 현재 페이지 확인
  let currentPage = window.location.pathname.split('/').pop();
  console.log("현재 페이지:", currentPage);
  
  // 상단 메뉴 네비게이션 (NUDAKE 로고 제외)
  let pages = [
    "./NUDAKE_PJ.html",        // NUDAKE (index 0) - 메인 페이지로 변경
    "./NUDAKE_COLAB_T.html",   // TEA HOUSE (index 1)
    "./NUDAKE_COLAB_A.html",   // WORLD ANIMAL DAY (index 2)
    "./NUDAKE_COLAB_J.html",   // JENNIE (index 3)
    "./NUDAKE_COLAB_B.html",   // BIRTH CAKE (index 4)
    "./NUDAKE_COLAB_P.html"    // PICNIC CAKE (index 5)
  ];

  // 상단 메뉴 클릭 이벤트 (NUDAKE 로고는 첫 번째 ready 함수에서 처리하므로 제외)
  $(".top-menu > ul > li:not(:first-child)").each(function(idx) {
    $(this).off('click').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      // idx는 0부터 시작하지만 첫 번째를 제외했으므로 +1 해야 함
      console.log("상단 메뉴 클릭:", idx + 1, pages[idx + 1]);
      location.href = pages[idx + 1];
    });
  });
  // NUDAKE_COLAB.html 메인 페이지에서만 cb-inbox li 클릭 이벤트 활성화
  if (currentPage === 'NUDAKE_COLAB.html' || currentPage === '' || !currentPage) {
    console.log("메인 페이지 - cb-inbox 이벤트 활성화");
    
    // cb-inbox li 클릭 이벤트
    $(".cb-inbox > li").each(function(index) {
      $(this).on('click', function(e) {
        // article 내부 클릭은 제외
        if ($(e.target).closest('.cb-arti').length > 0) {
          console.log("article 클릭 - 페이지 이동 취소");
          return;
        }
        
        e.stopPropagation();
        const targetPages = [
          "./NUDAKE_COLAB_T.html",   // 첫 번째 li - TEA HOUSE
          "./NUDAKE_COLAB_A.html",   // 두 번째 li - WORLD ANIMAL DAY
          "./NUDAKE_COLAB_J.html",   // 세 번째 li - JENNIE
          "./NUDAKE_COLAB_B.html",   // 네 번째 li - BIRTH CAKE
          "./NUDAKE_COLAB_P.html"    // 다섯 번째 li - PICNIC CAKE
        ];
        
        console.log("li 클릭:", index, targetPages[index]);
        if (targetPages[index]) {
          location.href = targetPages[index];
        }
      });
    });
    
    // li에 cursor pointer 스타일 추가
    $(".cb-inbox > li").css("cursor", "pointer");
    
    // 호버 효과
    $(".cb-inbox > li").hover(
      function() {
        if (!$(this).find('.cb-arti:hover').length) {
          $(this).css("filter", "brightness(1.1)");
        }
      },
      function() {
        $(this).css("filter", "brightness(1)");
      }
    );
  }
});

//마우스 스크롤을 밑으로 할 때 .header.top-menu가 display none로 1초걸리게 하고 바꾸기
$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $(".top-menu").css("display", "none");
  }
}); //scroll/////////////

// 스크롤 방향 감지를 위한 변수
let lastScrollTop = 0;

// 스크롤 이벤트 통합 처리
$(window).scroll(function () {
  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();
  const documentHeight = $(document).height();

  // 최상단 (0px) - 항상 표시
  if (scrollTop === 0) {
    $(".top-menu").css("display", "block");
  }
  // 최하단 (여유값 10px 추가로 더 잘 감지) - 항상 표시
  else if (scrollTop + windowHeight >= documentHeight - 10) {
    $(".top-menu").css("display", "block");
  }
  // 중간 영역 - 스크롤 방향에 따라 표시/숨김
  else {
    // 위로 스크롤 (스크롤 값이 감소)
    if (scrollTop < lastScrollTop) {
      $(".top-menu").css("display", "block");
    }
    // 아래로 스크롤 (스크롤 값이 증가)
    else {
      $(".top-menu").css("display", "none");
    }
  }
  
  // 현재 스크롤 위치 저장
  lastScrollTop = scrollTop;
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

// 아티클 클릭 이벤트 (기존 로직 유지)
$(".cb-arti").each(function () {
  const initialTranslate = $(this).css("transform");
  $(this).attr("data-original-translate", initialTranslate);
});

$(".cb-arti").click(function (e) {
  e.stopPropagation(); // 부모 li로의 이벤트 전파 막기

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

    // 5번째 li 애니메이션이 완료되고 추가 스크롤 진행도가 일정 이상일 때만 cb-box 높이 변경
    // progress > 1.15는 5번째 li 완료 후 약 15% 정도 더 스크롤해야 하단 영역이 올라옴
    if (fifthLiComplete && progress > 1.15) {
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