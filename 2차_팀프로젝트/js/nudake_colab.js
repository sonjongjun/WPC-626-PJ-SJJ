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



















/////////////////////////////////////
///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 콜라보 섹션 - 최상단 휠 2번으로 고정 위치 변경
let isColabLocked = false;
let colabProgress = 0;
let colabTargetProgress = 0;
let colabLockPosition = 0;
let colabCompleted = false;
let wheelCount = 0;
let wheelTimeout = null;
const COLAB_ANIMATION_SPEED = 0.012;
const SMOOTH_FACTOR = 0.15;

// easing 함수
function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
}

// 스크롤 잠금/해제
function lockColabScroll(position) {
    isColabLocked = true;
    colabLockPosition = position;
    $('html, body').css({
        'overflow': 'hidden',
        'position': 'fixed',
        'height': '100vh',
        'width': '100%',
        'top': -position + '%'
    });
}

function unlockColabScroll() {
    // 🚨 수정: 잠금 해제 시, 저장된 위치(colabLockPosition)로 스크롤 이동
    const scrollY = colabLockPosition; 
    $('html, body').css({
        'overflow': '',
        'position': '',
        'height': '',
        'width': '',
        'top': ''
    });
    window.scrollTo(0, scrollY);
    isColabLocked = false;
}

// 부드러운 애니메이션 루프
function smoothColabAnimation() {
    if (isColabLocked && !colabCompleted) {
        colabProgress += (colabTargetProgress - colabProgress) * SMOOTH_FACTOR;
        
        updateColabAnimation(colabProgress);
        
        if (colabProgress >= 0.98) {
            updateColabAnimation(1); // 애니메이션을 최종 상태(1)로 완료
            colabCompleted = true;
            setTimeout(() => unlockColabScroll(), 200);
        } else {
             requestAnimationFrame(smoothColabAnimation);
        }
    }
}

// 휠 이벤트 - 잠금 상태에서 애니메이션 진행
$(window).on('wheel', function(e) {
    // .top-menu 숨김/표시 로직과 충돌할 수 있으므로, 해당 로직을 분리하여 이 파일에 포함하지 않았습니다.
    
    if (isColabLocked && !colabCompleted) {
        e.preventDefault();
        e.stopPropagation();
        
        const delta = e.originalEvent.deltaY;
        colabTargetProgress += (delta > 0 ? COLAB_ANIMATION_SPEED : -COLAB_ANIMATION_SPEED);
        colabTargetProgress = Math.max(0, Math.min(1, colabTargetProgress));
        
        return false;
        
    }
    // nudake_colab.js 파일 수정

// (변수 선언부)
// ...
const SMOOTH_FACTOR = 0.15;
// 🚨 상단바 높이 설정 (main_colab.css에 10vh로 정의됨. 뷰포트 높이의 10%를 픽셀로 변환)
const TOP_MENU_HEIGHT_VH = 0.1; 
// ...

// 스크롤 이벤트 - 콜라보 섹션 근처에서 휠 2번 감지 및 잠금 트리거
$(window).on('scroll', function() {
    // ... (isColabLocked 로직 유지)

    const scrollTop = $(window).scrollTop();
    const cbBox = $(".cb-box");
    
    if (cbBox.length) {
        const cbBoxTop = cbBox.offset().top;
        // 🚨 상단 메뉴 높이(10vh)를 픽셀로 계산
        const topMenuHeightPx = $(window).height() * TOP_MENU_HEIGHT_VH; 
        
        const distanceToColab = cbBoxTop - scrollTop;
        
        // 콜라보 섹션 200px 전부터 휠 카운트 활성화
        if (distanceToColab < 200 && distanceToColab > -100 && !isColabLocked && !colabCompleted) {
            // ... (휠 감지 로직 유지)
                    
                    // 2.5번 휠하면 고정 및 애니메이션 시작
                    if (wheelCount >= 2.5) {
                        e.preventDefault();
                        wheelCount = 2; 
                        colabProgress = 0;
                        colabTargetProgress = 0;
                        
                        // 🚀 수정: 콜라보 섹션의 Top 위치에서 상단바 높이만큼 빼서 고정
                        // 상단바가 사라졌을 때 .cb-box가 화면 맨 위로 오도록 위치를 보정합니다.
                        const lockPosition = cbBoxTop - topMenuHeightPx;
                        lockColabScroll(lockPosition); 
                        
                        smoothColabAnimation();
                        $(window).off('wheel.colabTrigger');
                    }
            // ...
        } 
    }
});
// ...
});

// 스크롤 이벤트 - 콜라보 섹션 근처에서 휠 2번 감지 및 잠금 트리거
$(window).on('scroll', function() {
    if (isColabLocked && !colabCompleted) {
        // 잠금 상태에서는 스크롤 이동을 강제로 막음
        const currentScrollY = Math.abs(parseInt($('body').css('top') || '0'));
        if (currentScrollY !== colabLockPosition) {
            $('body').css('top', -colabLockPosition + 'px');
        }
        return;
    }
    
    const scrollTop = $(window).scrollTop();
    const cbBox = $(".cb-box");
    
    if (cbBox.length) {
        const cbBoxTop = cbBox.offset().top;
        const distanceToColab = cbBoxTop - scrollTop;
        
        // 콜라보 섹션 200px 전부터 휠 카운트 활성화
        if (distanceToColab < 200 && distanceToColab > -100 && !isColabLocked && !colabCompleted) {
            // 이 영역에서 휠 감지 대기 상태
            $(window).off('wheel.colabTrigger').on('wheel.colabTrigger', function(e) {
                if (e.originalEvent.deltaY > 0) {
                    wheelCount++;
                    
                    clearTimeout(wheelTimeout);
                    wheelTimeout = setTimeout(() => {
                        wheelCount = 0;
                    }, 1000);
                    
                    // 2.5번 휠하면 고정 및 애니메이션 시작
                    if (wheelCount >= 2.5) {
                        e.preventDefault();
                        wheelCount = 2; 
                        colabProgress = 0;
                        colabTargetProgress = 0;
                        
                        // 🚨 수정: 콜라보 섹션의 상단 위치(cbBoxTop)에서 고정
                        lockColabScroll(cbBoxTop); 
                        
                        smoothColabAnimation();
                        $(window).off('wheel.colabTrigger');
                    }
                }
            });
        } else {
            // 콜라보 섹션 영역을 벗어나면 휠 트리거 이벤트 제거 및 카운트 초기화
            $(window).off('wheel.colabTrigger');
            wheelCount = 0;
        }
    }
});

// 애니메이션 업데이트
function updateColabAnimation(progress) {
    $(".cb-inbox li").each(function(index) {
        const itemDelay = index * 0.12;
        const itemDuration = 0.35;
        
        let itemProgress = (progress - itemDelay) / itemDuration;
        itemProgress = Math.max(0, Math.min(1, itemProgress));
        itemProgress = easeOutQuart(itemProgress);
        
        const initialValue = (index + 1) * 100;
        const currentValue = initialValue * (1 - itemProgress);
        
        this.style.transform = `translateY(${currentValue}%)`;
    });
}

// 아티클 클릭 이벤트 (기존 로직 유지)
$(".cb-arti").each(function () {
    const initialTranslate = $(this).css("transform");
    $(this).attr("data-original-translate", initialTranslate);
});

$(".cb-arti").click(function (e) {
    e.stopPropagation();
    
    const currentTransform = $(this).css("transform");
    const isOpen = currentTransform === "matrix(1, 0, 0, 1, 0, 0)" || currentTransform === "none" || currentTransform === "translateY(0px)";
    
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

// 초기화
$(document).ready(function() {
    updateColabAnimation(0);
    
    // 초기 transform 값 저장
    $(".cb-arti").each(function() {
        let initialTransform = $(this).css("transform");
        
        if (initialTransform === "none" || initialTransform.indexOf('matrix') === 0) {
             if ($(this).hasClass("arti-1")) { initialTransform = "translateY(90%)"; }
             else if ($(this).hasClass("arti-2")) { initialTransform = "translateY(86%)"; }
             else if ($(this).hasClass("arti-3")) { initialTransform = "translateY(90%)"; }
             else if ($(this).hasClass("arti-4")) { initialTransform = "translateY(87.3%)"; }
             else if ($(this).hasClass("arti-5")) { initialTransform = "translateY(88.5%)"; }
        }
        $(this).attr("data-original-translate", initialTransform);
    });
});
