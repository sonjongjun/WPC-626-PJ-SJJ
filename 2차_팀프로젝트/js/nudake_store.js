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


$(document).ready(function() {
  // NUDAKE 로고 클릭 이벤트 먼저 등록 (JSON 로드와 무관하게 작동)
  $('.top-menu > ul > li:first-child').off('click').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('NUDAKE 로고 클릭 - 메인 페이지로 이동');
    location.href = './NUDAKE_PJ.html';
  });
  
  // JSON 데이터 로드
  $.getJSON('./data/menu_data.json', function(data) {
    const categories = data.categories;
    
    // 기본적으로 DESSERTS 카테고리 표시
    displayCategory('DESSERTS', categories);
    
    // 나머지 메뉴 클릭 이벤트 (NUDAKE 제외)
    $('.top-menu > ul > li:not(:first-child)').off('click').on('click', function() {
      const menuText = $(this).text().trim();
      
      // 카테고리 표시
      if (categories[menuText]) {
        displayCategory(menuText, categories);
        
        // 페이지 제목 업데이트
        $('.t-box h2').text(menuText);
      }
    });
  }).fail(function(jqXHR, textStatus, errorThrown) {
    console.error('JSON 로드 실패:', textStatus, errorThrown);
    alert('메뉴 데이터를 불러오는데 실패했습니다.');
  });
});

// 카테고리별 아이템 표시 함수
function displayCategory(categoryName, categories) {
  const category = categories[categoryName];
  const gridBox = $('.grid-box');
  
  // 기존 내용 제거
  gridBox.empty();
  
  // 아이템 추가
  category.items.forEach(function(item) {
    const itemHtml = `
      <div data-id="${item.id}">
        <img src="${item.image}" alt="${item.id}" />
        <h3>${item.name}</h3>
      </div>
    `;
    gridBox.append(itemHtml);
  });
  

  // 호버 효과 강화
  $('.grid-box > div').hover(
    function() {
      $(this).css({
        'transform': 'scale(1.025)',
        'transition': 'all 0.3s ease',
        'z-index': '10'
      });
      $(this).find('h3').css('color', '#000000');
    },
    function() {
      $(this).css({
        'transform': 'scale(1)',
        'z-index': '1'
      });
      $(this).find('h3').css('color', '#000000af');
    }
  );
}

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