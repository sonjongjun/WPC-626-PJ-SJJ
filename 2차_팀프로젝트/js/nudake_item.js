$(document).ready(function() {
  // NUDAKE 로고 클릭 이벤트 먼저 등록 (JSON 로드와 무관하게 작동)
  $('.top-menu > ul > li:first-child').off('click').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('NUDAKE 로고 클릭');
    location.href = './NUDAKE_PJ.html';
  });
  
  // URL 파라미터에서 카테고리 가져오기
  const urlParams = new URLSearchParams(window.location.search);
  const urlCategory = urlParams.get('category');
  
  // JSON 데이터 로드
  $.getJSON('./data/menu_data.json', function(data) {
    const categories = data.categories;
    
    // URL 파라미터가 있으면 해당 카테고리, 없으면 DESSERTS 표시
    const defaultCategory = urlCategory && categories[urlCategory] ? urlCategory : 'DESSERTS';
    displayCategory(defaultCategory, categories);
    
    // 나머지 메뉴 클릭 이벤트 (NUDAKE 제외)
    $('.top-menu > ul > li:not(:first-child)').off('click').on('click', function() {
      const menuText = $(this).text().trim();
      
      // 카테고리 표시
      if (categories[menuText]) {
        displayCategory(menuText, categories);
        
        // 페이지 제목 업데이트
        $('.t-box h2').text(menuText);
        
        // URL 업데이트 (페이지 새로고침 없이)
        const newUrl = `${window.location.pathname}?category=${menuText}`;
        window.history.pushState({category: menuText}, '', newUrl);
      }
    });
  }).fail(function(jqXHR, textStatus, errorThrown) {
    console.error('JSON 로드 실패:', textStatus, errorThrown);
    alert('메뉴 데이터를 불러오는데 실패했습니다.');
  });
});

// 아이템 이벤트 바인딩 함수 (호버, 클릭)
function bindItemEvents() {
  // 호버 효과 강화
  $('.grid-box > div').off('mouseenter mouseleave').hover(
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
  
  // 클릭 이벤트 - 상세 페이지로 이동
  $('.grid-box > div').off('click').on('click', function() {
    const itemId = $(this).data('id');
    const itemCategory = $(this).data('category');
    
    // URL 파라미터로 아이템 정보 전달
    location.href = `./NUDAKE_ITEMS_D.html?id=${itemId}&category=${itemCategory}`;
    console.log('아이템 클릭:', itemId, itemCategory);
  });
}

// 카테고리별 아이템 표시 함수
function displayCategory(categoryName, categories) {
  const category = categories[categoryName];
  
  // 처음에 표시할 아이템 30개만 먼저 slice 해서 저장
  const cate1 = category.items.slice(0, 30);
  console.log('처음 로드된 아이템 수:', cate1.length);

  const gridBox = $('.grid-box');
  
  // 기존 내용 제거
  gridBox.empty();
  
  // 아이템 추가
  cate1.forEach(function(item) {
    const itemHtml = `
      <div data-id="${item.id}" data-category="${categoryName}">
        <img src="${item.image}" alt="${item.id}" />
        <h3>${item.name}</h3>
      </div>
    `;
    gridBox.append(itemHtml);
  });

  // 초기 아이템에 이벤트 바인딩
  bindItemEvents();

  // VIEW MORE 버튼 표시 (30개 초과할 때만)
  if (category.items.length > 30) {
    $('.load-more').show();
  } else {
    $('.load-more').hide();
  }

  // VIEW MORE 버튼 이벤트
  $('.load-more').off('click').on('click', function() {
    const cate2 = category.items.slice(30, 72);
    console.log('추가 로드된 아이템 수:', cate2.length);

    // 로딩 상태 추가
    $(this).addClass('loading');
    $(this).find('.btn-text').text('LOADING');

    // 약간의 딜레이로 자연스러운 로딩 효과
    setTimeout(() => {
      // 다음 아이템 추가
      cate2.forEach(function(item) {
        const itemHtml = `
          <div data-id="${item.id}" data-category="${categoryName}">
            <img src="${item.image}" alt="${item.id}" />
            <h3>${item.name}</h3>
          </div>
        `;
        gridBox.append(itemHtml);
      });
      
      // 새로 추가된 아이템에도 이벤트 바인딩
      bindItemEvents();
      
      // 로드 완료 후 버튼 숨김
      $(this).fadeOut(400);
    }, 600);
  });
}

/// 스크롤 방향 감지를 위한 변수
let lastScrollTop = 0;

// 스크롤 이벤트 통합 처리
$(window).scroll(function() {
  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();
  const documentHeight = $(document).height();
  
  // 최상단 (0px) - 항상 표시
  if (scrollTop === 0) {
    $('.top-menu').css('display', 'block');
  }
  // 최하단 (여유값 10px 추가로 더 잘 감지) - 항상 표시
  else if (scrollTop + windowHeight >= documentHeight - 10) {
    $('.top-menu').css('display', 'block');
  }
  // 중간 영역 - 스크롤 방향에 따라 표시/숨김
  else {
    // 위로 스크롤 (스크롤 값이 감소)
    if (scrollTop < lastScrollTop) {
      $('.top-menu').css('display', 'block');
    }
    // 아래로 스크롤 (스크롤 값이 증가)
    else {
      $('.top-menu').css('display', 'none');
    }
  }
  
  // 현재 스크롤 위치 저장
  lastScrollTop = scrollTop;
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