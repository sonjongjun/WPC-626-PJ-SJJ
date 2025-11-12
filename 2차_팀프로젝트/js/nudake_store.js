//마우스 스크롤을 밑으로 할 때 .header.top-menu가 display none로 1초걸리게 하고 바꾸기
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $(".top-menu").css("display", "none");
        
    }
})//scroll/////////////

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

$(document).ready(function() {
  // NUDAKE 로고 클릭 이벤트 먼저 등록
  $('.top-menu > ul > li:first-child').off('click').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('NUDAKE 로고 클릭 - 메인 페이지로 이동');
    location.href = './NUDAKE_PJ.html';
  });
  
  // 매장 메뉴 클릭 이벤트 추가
  // SEONG-SU (2번째 자식) 클릭
  $('.top-menu > ul > li:nth-child(2)').off('click').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('SEONG-SU 클릭 - 성수 매장 페이지로 이동');
    location.href = './NUDAKE_STORE.html?store=SEONGSU';
  });
  
  // DOSAN (3번째 자식) 클릭
  $('.top-menu > ul > li:nth-child(3)').off('click').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('DOSAN 클릭 - 도산 매장 페이지로 이동');
    location.href = './NUDAKE_STORE.html?store=DOSAN';
  });
  
  // SHANGHAI (4번째 자식) 클릭
  $('.top-menu > ul > li:nth-child(4)').off('click').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('SHANGHAI 클릭 - 상하이 매장 페이지로 이동');
    location.href = './NUDAKE_STORE.html?store=SHANGHAI';
  });
});

// 스크롤 시 상단 메뉴 숨김/표시
$(window).scroll(function() {
  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();
  const documentHeight = $(document).height();
  
  if (scrollTop === 0) {
    $('.top-menu').css('display', 'block');
  } else if (scrollTop + windowHeight >= documentHeight - 10) {
    $('.top-menu').css('display', 'block');
  } else {
    $('.top-menu').css('display', 'none');
  }
});

// 상단 메뉴 호버 효과
$('.top-menu').hover(
  function() {
    $(this).css('opacity', '1');
  },
  function() {
    if ($(window).scrollTop() > 0) {
      $(this).css('opacity', '0.5');
    }
  }
);

 let code = ["SEONGSU", "DOSAN", "SHANGHAI"];

    document.querySelectorAll("button").forEach((el, idx) => {
      el.addEventListener("click", function () {
        location.href = "./NUDAKE_STORE.html?store=" + code[idx];
      });
    });


      let pm = location.href;
    pm = pm.includes("=") ? pm.split("=")[1] : 0;
    console.log("현재 스토어 번호:", pm);

    const storeData = {
      SEONGSU: {
        title: `STORE IN SEONG-SU`,
        imgSet: [
          `./01.자료수집/01.메인상단지점이미지/01.누데이크성수이미지/성수4.webp`,
          `./01.자료수집/01.메인상단지점이미지/01.누데이크성수이미지/성수1.webp`,
          `./01.자료수집/01.메인상단지점이미지/01.누데이크성수이미지/성수6.webp`,
          `./01.자료수집/01.메인상단지점이미지/01.누데이크성수이미지/성수3.webp`,
          `./01.자료수집/01.메인상단지점이미지/01.누데이크성수이미지/성수2.webp`,
        ],
        placeName: "NUDAKE TEAHOUSE",
        location: "KOREA",
        address: "5F 433, Ttukseom-ro, Seongdong-gu, Seoul, Republic of Korea",
        contact: "070-5147-0772",
        giftHours: "11:00~21:00",
        loungeHours: "12:00~21:00",
        mapUrl: "https://maps.app.goo.gl/Afb6UmGAXtZLrR1b8",
        backgroundColor: "#8B4789",
      },
      DOSAN: {
        title: `STORE IN DOSAN`,
        imgSet: [
          `./01.자료수집/01.메인상단지점이미지/02.누데이크도산이미지/도산4.webp`,
          `./01.자료수집/01.메인상단지점이미지/02.누데이크도산이미지/도산1.webp`,
          `./01.자료수집/01.메인상단지점이미지/02.누데이크도산이미지/도산5.webp`,
          `./01.자료수집/01.메인상단지점이미지/02.누데이크도산이미지/도산2.webp`,
          `./01.자료수집/01.메인상단지점이미지/02.누데이크도산이미지/도산3.webp`,
        ],
        placeName: "HAUS NOWHERE DOSAN",
        location: "KOREA",
        address:
          "50, Apgujeong-ro 46-gil, Gangnam-gu, Seoul, Republic of Korea",
        contact: "070-4128-2122",
        hours: "11:00~21:00",
        mapUrl: "https://maps.app.goo.gl/Lj9YwLUYz9tDySti9",
        backgroundColor: "#2C5F2D",
      },
      SHANGHAI: {
        title: `STORE IN SHANGHAI`,
        imgSet: [
          `./01.자료수집/01.메인상단지점이미지/03.누데이크상하이이미지/상하이1.webp`,
          `./01.자료수집/01.메인상단지점이미지/03.누데이크상하이이미지/상하이5.webp`,
          `./01.자료수집/01.메인상단지점이미지/03.누데이크상하이이미지/상하이2.webp`,
          `./01.자료수집/01.메인상단지점이미지/03.누데이크상하이이미지/상하이3.webp`,
          `./01.자료수집/01.메인상단지점이미지/03.누데이크상하이이미지/상하이6.webp`,
        ],
        placeName: "NUDAKE SHANGHAI",
        location: "CHINA",
        address: "F 798-812 Middle Huaihai Rd, Huangpu District, Shanghai, China",
        contact: "+86-21-6426-1570",
        hours: "10:00~22:00",
        mapUrl: "https://maps.app.goo.gl/jk3zhJYipG7wHnmv9",
        backgroundColor: "#C41E3A",
      },
    };

    // 타이틀 변경대상
    const titleBox = document.querySelector(".t-box > h2");

    // 타이틀 변경하기
    titleBox.textContent = storeData[pm].title;

    // 이미지 변경대상
    const storeBox = document.querySelectorAll(".img-area li");
    // 이미지 변경하기
    storeBox.forEach((el, idx) => {
      el.style.backgroundImage = `url(${storeData[pm].imgSet[idx]})`;
    });

    const currentStore = storeData[pm];

    // info1 업데이트
    document.querySelector(".info1 ul li:first-child").textContent =
      currentStore.placeName;
    document.querySelector(".info1 ul li:last-child").innerHTML = `
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <i class="fa-solid fa-location-dot"></i>${currentStore.location}
`;

    // info2 업데이트
    const info2List = document.querySelector(".info2 ul");
    info2List.innerHTML = ""; // 기존 내용 초기화

    // 주소
    const addressLi = document.createElement("li");
    addressLi.textContent = currentStore.address;
    info2List.appendChild(addressLi);

    // 연락처
    const contactLi = document.createElement("li");
    contactLi.textContent = `CONTACT     ${currentStore.contact}`;
    info2List.appendChild(contactLi);

    // 운영시간 (성수는 두 가지, 다른 지점은 한 가지)
    if (currentStore.giftHours && currentStore.loungeHours) {
      const giftHoursLi = document.createElement("li");
      giftHoursLi.textContent = `GIFT SHOP HOURS     ${currentStore.giftHours}`;
      info2List.appendChild(giftHoursLi);

      const loungeHoursLi = document.createElement("li");
      loungeHoursLi.textContent = `TEA LOUNGE HOURS     ${currentStore.loungeHours}`;
      info2List.appendChild(loungeHoursLi);
    } else {
      const hoursLi = document.createElement("li");
      hoursLi.textContent = `HOURS     ${currentStore.hours}`;
      info2List.appendChild(hoursLi);
    }

    document.querySelector(".info2 a").href = currentStore.mapUrl;

    document.querySelectorAll(".img-area").forEach((area) => {
      area.style.backgroundColor = currentStore.backgroundColor;
    });