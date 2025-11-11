$(document).ready(function() {
  // NUDAKE 로고 클릭 이벤트
  $('.top-menu > ul > li:first-child').off('click').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('NUDAKE 로고 클릭');
    location.href = './NUDAKE_PJ.html';
  });
  
  // 상단 메뉴 네비게이션 - 그리드 목록 페이지로 이동
  $('.top-menu > ul > li:nth-child(2)').off('click').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('DESSERTS 클릭 - 그리드 목록 페이지로 이동');
    window.location.href = './NUDAKE_ITEMS.html';
  });
  
  $('.top-menu > ul > li:nth-child(3)').off('click').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('BEVERAGES 클릭 - 그리드 목록 페이지로 이동');
    window.location.href = './NUDAKE_ITEMS.html?category=BEVERAGES';
  });
  
  $('.top-menu > ul > li:nth-child(4)').off('click').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('MERCH 클릭 - 그리드 목록 페이지로 이동');
    window.location.href = './NUDAKE_ITEMS.html?category=MERCH';
  });
  
  $('.top-menu > ul > li:nth-child(5)').off('click').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('TEA 클릭 - 그리드 목록 페이지로 이동');
    window.location.href = './NUDAKE_ITEMS.html?category=TEA';
  });
  
  // URL 파라미터 가져오기
  const urlParams = new URLSearchParams(window.location.search);
  const itemId = urlParams.get('id');
  const categoryName = urlParams.get('category');
  
  console.log('아이템 ID:', itemId);
  console.log('카테고리:', categoryName);
  
  // JSON 데이터 로드하여 해당 아이템 정보 표시
  $.getJSON('./data/menu_data.json', function(data) {
    const categories = data.categories;
    
    if (categoryName && categories[categoryName]) {
      const category = categories[categoryName];
      const item = category.items.find(i => i.id === itemId);
      
      if (item) {
        // 페이지 제목 업데이트
        $('.t-box h2').text(categoryName);
        
        // 아이템 이름 업데이트
        $('.i-bg2 h3').text(item.name);
        
        // 아이템 설명 업데이트 (description 필드가 있으면)
        if (item.description) {
          $('.i-bg2 p').html(item.description);
        } else {
          // description이 없으면 기본 메시지
          $('.i-bg2 p').html('Delicious handcrafted dessert <br> Made with premium ingredients <br> Experience NUDAKE');
        }
        
        // 이미지 업데이트 (Swiper에 이미지 설정)
        $('.swiper-slide img').attr('src', item.image);
        
        console.log('아이템 정보 로드 완료:', item);
      } else {
        console.error('아이템을 찾을 수 없습니다:', itemId);
        alert('아이템 정보를 찾을 수 없습니다.');
      }
    } else {
      console.error('카테고리를 찾을 수 없습니다:', categoryName);
      alert('카테고리 정보를 찾을 수 없습니다.');
    }
  }).fail(function(jqXHR, textStatus, errorThrown) {
    console.error('JSON 로드 실패:', textStatus, errorThrown);
    alert('데이터를 불러오는데 실패했습니다.');
  });
  
  // 뒤로가기 기능 (선택사항)
  $(document).on('keydown', function(e) {
    if (e.key === 'Escape') {
      location.href = './NUDAKE_ITEMS.html';
    }
  });
});

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

// Swiper 초기화
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