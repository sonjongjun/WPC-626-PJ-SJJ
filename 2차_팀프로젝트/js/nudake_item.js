$(document).ready(function() {
  // NUDAKE 로고 클릭 이벤트 먼저 등록 (JSON 로드와 무관하게 작동)
  $('.top-menu > ul > li:first-child').off('click').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('NUDAKE 로고 클릭');
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

// 스크롤 이벤트 통합 처리
$(window).scroll(function() {
  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();
  const documentHeight = $(document).height();
  
  // 최상단 (0px)
  if (scrollTop === 0) {
    $('.top-menu').css('display', 'block');
  }
  // 최하단 (여유값 10px 추가로 더 잘 감지)
  else if (scrollTop + windowHeight >= documentHeight - 10) {
    $('.top-menu').css('display', 'block');
  }
  // 중간 영역
  else {
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

  var swiper = new Swiper(".mySwiper", {
      effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });