# 🍕 Pizza Mall - Interactive E-commerce Platform

> 제조업 8년 경력 → 웹 퍼블리셔 전환 포트폴리오  
> **정밀함으로 만들어낸 8년, 그 다음은 코드로 만들어갑니다**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Pizza_Mall-red?style=for-the-badge)](https://sonjongjun.github.io/WPC-626-PJ-SJJ/1%EC%B0%A8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EA%B0%9C%EC%9D%B8%EA%B3%BC%EC%A0%9C%EB%AA%A8%EC%9D%8C/01.pizza.html)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jquery&logoColor=white)

---

## 📌 프로젝트 소개

방위산업 X-RAY 제조 현장에서 8년간 쌓은 **0.01mm 단위의 정밀함**과 **체계적 프로세스 관리 경험**을 웹 개발에 접목한 풀스택 E-commerce 프로젝트입니다. AWWWARDS 수상작들의 UI/UX 패턴을 분석하고 2025년 웹 트렌드를 적용했습니다.

### 🎯 개발 목표
```
✓ 제조업 정밀도 → Pixel Perfect 레이아웃
✓ 공정 최적화 경험 → 모듈화된 코드 구조  
✓ 품질 관리 마인드 → 크로스 브라우징 완벽 대응
✓ 리더십 경험 → 프로젝트 전체 설계 및 구현
```

---

## ✨ 핵심 기능 상세

### 🎨 **1. 3D 회전 피자 인터페이스**

**구현 기술**: CSS 3D Transform + JavaScript Fade-in Animation
```css
.r-pizza-menu {
  perspective: 150vh;           /* 3D 원근감 */
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}

.r-pizza-wrap {
  rotate: x 45deg;              /* X축 45도 회전 */
  aspect-ratio: 1.4;            /* 비율 유지 */
}

.r-pizza {
  rotate: x 50deg;
  scale: 1 1.6;                 /* Y축 1.6배 확대 */
}
```

**특징**:
- 페이지 로드 시 1.5초 페이드인 효과
- `perspective`로 3D 공간감 구현
- 다층 `rotate` + `scale`로 입체적 연출

---

### 🍕 **2. 8조각 인터랙티브 피자 메뉴**

**핵심 로직**: Clip-path 기반 정밀 슬라이싱 + 이벤트 위임
```javascript
// 8개 피자 조각 클릭 이벤트 - 모듈화 전 버전
const pizzaSlices = document.querySelectorAll('.pizza-slice');

pizzaSlices.forEach((slice, index) => {
  slice.addEventListener('click', () => {
    // 모든 정보창 닫기
    document.querySelectorAll('.sl-piz-info').forEach(info => {
      info.style.translate = '100% 0%';
    });
    
    // 클릭한 조각의 정보창만 열기
    document.querySelector(`.sl-piz-info${index + 1}`)
      .style.translate = '41% 0%';
  });
});
```

**CSS Clip-path 정밀 작업**:
```css
.sl-piz1 > img {
  /* 다각형 좌표로 피자 조각 모양 정의 */
  clip-path: polygon(
    0% 100%, 0% 0%, 
    100% 85%, 73% 98%, 
    43% 104%, 25% 100%
  );
  rotate: 53deg;
  transform: skew(0deg, 347deg);  /* 정밀 기울임 */
}
```

**기술 포인트**:
- 각 조각마다 독립적인 `clip-path` 좌표 계산
- `transform-origin` 조정으로 회전축 제어
- Opacity 전환으로 호버 피드백

---

### 🛒 **3. 동적 상품 리스트 렌더링**

**JavaScript ES6+ 활용**: Template Literal + map() + join()
```javascript
const pizzaInfo = [
  "핫 스파이시 페퍼로니",
  "핫치킨 하와이안클럽",
  // ... 12개 메뉴
];

const pizzaList = document.querySelector('.pizza-list');

// 템플릿 리터럴로 동적 생성
pizzaList.innerHTML = pizzaInfo.map((name, idx) => `
  <div>
    <a href="#">
      <img src="./피자리스트/피자${idx+1}.jpg" alt="피자${idx+1}">
      <img src="./피자리스트/피자변환${idx+1}.jpg" alt="피자변환${idx+1}">
    </a>
    <aside><h2>${name}</h2></aside>
  </div>
`).join('');

// 이벤트 위임 패턴으로 링크 설정
pizzaList.querySelectorAll('a').forEach((link, idx) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    location.href = `04.pizza_delivery-1.html?no=${idx}`;
  });
});
```

**장점**:
- 데이터와 뷰의 분리로 유지보수성 향상
- `map()`으로 선언적 렌더링
- URL 파라미터로 상태 전달

---

### 🔗 **4. URL 파라미터 기반 상품 상세 페이지**

**구현**: Query String 파싱 + 동적 콘텐츠 업데이트
```javascript
// URL에서 파라미터 추출
let pm = location.href;
pm = pm.includes('=') ? Number(pm.split('=')[1]) : 0;

// 범위 검증
if (pm < 0 || pm >= pizzaInfo.length) {
  pm = 0;  // 기본값
}

// DOM 업데이트
const dImgArea = document.querySelector('.d-img-area');
const title = dImgArea.querySelector('h2');
const image = dImgArea.querySelector('img');

title.innerHTML = pizzaInfo[pm];
image.src = `./피자리스트/피자${pm+1}누끼.png`;
image.alt = pizzaInfo[pm];
```

**보안 고려사항**:
- 파라미터 범위 검증으로 오류 방지
- `includes()` 체크로 예외 처리

---

### 📱 **5. 햄버거 메뉴 애니메이션**

**구현**: CSS Transform + JavaScript Toggle
```javascript
document.addEventListener('DOMContentLoaded', () => {
  const btnHam = document.querySelector('.btn-ham');
  const topArea = document.getElementById('top-area');
  const mWindow = document.querySelector('.m-right-menu');

  // 초기 상태 설정
  mWindow.style.transform = 'translateX(100%)';
  mWindow.style.transition = 'transform 0.4s ease-in-out';

  btnHam.addEventListener('click', () => {
    topArea.classList.toggle('on');
    
    // 클래스 기반 상태 관리
    const isOpen = topArea.classList.contains('on');
    mWindow.style.transform = isOpen 
      ? 'translateX(0%)' 
      : 'translateX(100%)';
  });
});
```

**CSS 아이콘 전환**:
```css
/* 초기: 햄버거 표시 */
.btn-ham i:nth-child(2) { display: none; }

/* on 상태: X 표시 */
#top-area.on .btn-ham i:nth-child(1) { display: none; }
#top-area.on .btn-ham i:nth-child(2) { display: block; }
```

---

### 🎛️ **6. 커스텀 체크박스/라디오 버튼**

**구현**: Opacity 기반 시각적 피드백
```javascript
document.querySelectorAll('.check-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const blackBtn = this.querySelector('.black-btn1, .black-btn2');
    
    if (blackBtn) {
      // 라디오 버튼 동작: 단일 선택
      const isSelected = blackBtn.style.opacity === '1';
      
      // 모든 버튼 초기화
      document.querySelectorAll('.black-btn1, .black-btn2')
        .forEach(b => b.style.opacity = '0');
      
      // 토글
      if (!isSelected) {
        blackBtn.style.opacity = '1';
      }
    }
  });
});
```

**다중 선택 버튼**:
```javascript
// black-btn3, 4, 5는 체크박스 동작
if (blackBtn3 || blackBtn4 || blackBtn5) {
  const current = clickedBtn.style.opacity;
  clickedBtn.style.opacity = current === '1' ? '0' : '1';
}
```

---

### 🎠 **7. Swiper 카루셀 통합**

**배너 슬라이드**:
```javascript
var swiper = new Swiper(".m-banner-box", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
```

**그리드 레이아웃 (모바일)**:
```javascript
var swiper2 = new Swiper(".m-piz-area", {
  slidesPerView: 2,      // 가로 2개
  grid: { rows: 2 },     // 세로 2개 = 2x2 그리드
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
```

---

## 🛠 기술 스택 상세

### **Frontend Core**

| 기술 | 버전 | 용도 |
|------|------|------|
| **HTML5** | - | Semantic Markup, SEO 최적화 |
| **CSS3** | - | Grid, Flexbox, 3D Transform, Clip-path |
| **JavaScript** | ES6+ | 모듈 패턴, 이벤트 위임, 비동기 처리 |
| **jQuery** | 3.7.1 | DOM 조작, 이벤트 핸들링 |
| **jQuery UI** | - | 드래그, 색상 애니메이션 |
| **Swiper.js** | 11.x | 터치 지원 카루셀 |
| **Font Awesome** | 7.0.1 | 아이콘 폰트 |

### **CSS 고급 기법**
```css
/* 1. CSS Grid - 상품 리스트 */
.pizza-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

/* 2. 3D Transform - 회전 피자 */
.r-pizza {
  transform: rotateX(50deg) scale(1, 1.6);
  transform-style: preserve-3d;
}

/* 3. Clip-path - 피자 슬라이스 */
.sl-piz1 > img {
  clip-path: polygon(...);
}

/* 4. Custom Properties - 테마 변수 */
:root {
  --primary-color: #d22b2b;
  --hover-color: #ff3333;
}

/* 5. Backdrop Filter - Glassmorphism */
.sub-menu {
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(10px);
}
```

---

## 📂 프로젝트 구조
```
Pizza-Mall/
├── 📄 01.pizza.html              # 메인 페이지
├── 📄 03.pizza_order.html        # 주문/상품 목록
├── 📄 04.pizza_delivery-1.html   # 상품 상세 (파라미터 기반)
├── 📄 06.pizza_cart.html         # 장바구니
├── 📄 07.pizza_event.html        # 이벤트/프로모션
│
├── 📁 css/
│   ├── reset.css                 # 브라우저 초기화
│   ├── core.css                  # 공통 유틸리티
│   ├── main.css                  # 메인 페이지 (2,885줄)
│   ├── main_order.css            # 주문 페이지
│   ├── main_cart.css             # 장바구니
│   ├── main_event.css            # 이벤트
│   ├── ani.css                   # 애니메이션 정의
│   ├── media.css                 # 반응형 (메인)
│   ├── media2.css ~ media5.css   # 페이지별 미디어쿼리
│   └── grid_12_flex.css          # 12컬럼 그리드 시스템
│
├── 📁 js/
│   ├── pizza.js                  # 메인 로직 (339줄)
│   ├── pizza_order.js            # 주문 페이지 렌더링
│   ├── pizza_delivery.js         # 상세 페이지 로직
│   ├── pizza_cart.js             # 장바구니 기능
│   ├── pizza_event.js            # 이벤트 페이지
│   ├── pizza_del.js              # 공통 체크박스 로직
│   └── swiper-bundle.min.js      # 카루셀 라이브러리
│
├── 📁 jQuery/
│   ├── jquery-3.7.1.min.js
│   └── jquery-ui.min.js
│
└── 📁 assets/
    ├── 피자리스트/               # 상품 이미지
    ├── 로고/                     # 아이콘, 로고
    ├── 904.개인과제피자헛/       # 배너 이미지
    └── 파비콘/                   # Favicon
```

---

## 💡 핵심 코드 분석

### **1. 로고 호버 애니메이션 (이벤트 위임)**
```javascript
document.addEventListener('DOMContentLoaded', () => {
  const logoLinks = document.querySelectorAll('.logo-part a');
  const logoTexts = document.querySelectorAll('.logo-font li');

  logoLinks.forEach((link, index) => {
    link.addEventListener('mouseenter', () => {
      logoTexts[index]?.classList.add('active');
    });

    link.addEventListener('mouseleave', () => {
      logoTexts[index]?.classList.remove('active');
    });
  });
});
```

**CSS 연동**:
```css
.logo-font li {
  transform: translateY(0);
  transition: transform 0.5s ease-in-out;
}

.logo-font li.active {
  transform: translateY(-30px);  /* 위로 30px 이동 */
  opacity: 1;
}

.logo-font li.active p {
  background-color: #ff3333;
  box-shadow: 0 4px 8px rgba(210, 43, 43, 0.5);
}
```

---

### **2. 피자 슬라이스 클릭 이벤트 (반복 최소화)**

**현재 코드 (개선 전)**:
```javascript
// 8개 조각마다 중복 코드...
piz1.addEventListener('click', () => { /* ... */ });
piz2.addEventListener('click', () => { /* ... */ });
// ... 반복
```

**개선 제안 (DRY 원칙)**:
```javascript
// 배열로 관리
const pizzaSlices = [
  '.sl-piz1', '.sl-piz2', '.sl-piz3', '.sl-piz4',
  '.sl-piz5', '.sl-piz6', '.sl-piz7', '.sl-piz8'
];

// 통합 이벤트 핸들러
pizzaSlices.forEach((selector, index) => {
  document.querySelector(selector)?.addEventListener('click', () => {
    showPizzaInfo(index + 1);
  });
});

function showPizzaInfo(num) {
  // 모든 정보창 닫기
  document.querySelectorAll('.sl-piz-info')
    .forEach(info => info.style.translate = '100% 0%');
  
  // 선택한 정보창 열기
  document.querySelector(`.sl-piz-info${num}`)
    .style.translate = '41% 0%';
}
```

---

### **3. 반응형 가격 표시 (Resize 이벤트)**
```javascript
function updatePriceDisplay() {
  const sizeButtons = document.querySelectorAll('.size-area button');
  
  if (window.innerWidth < 1024) {
    sizeButtons[0].innerHTML = 'L사이즈<br><br>30,900원';
    sizeButtons[1].innerHTML = 'M사이즈<br><br>24,900원';
  } else {
    sizeButtons[0].innerHTML = 'L사이즈';
    sizeButtons[1].innerHTML = 'M사이즈';
  }
}

// 최초 실행 + 리사이즈 감지
updatePriceDisplay();
window.addEventListener('resize', updatePriceDisplay);
```

---

## 🎨 디자인 시스템

### **색상 팔레트**
```css
:root {
  /* Primary */
  --primary-red: #d22b2b;
  --primary-hover: #ff3333;
  --primary-dark: #721111;
  
  /* Background */
  --bg-light: rgba(220, 204, 204, 1);
  --bg-modal: rgba(234, 119, 119, 0.82);
  --bg-footer: rgba(200, 181, 181, 1);
  
  /* Accent */
  --accent-gold: goldenrod;
}
```

### **타이포그래피**
```css
@font-face {
  font-family: 'GMarketSans';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff');
  font-weight: 500;
  font-display: swap;
}

body {
  font-family: "GMarketSans", "Malgun Gothic", sans-serif;
}
```

---

## 📱 반응형 전략

### **브레이크포인트**
```css
/* Desktop First 방식 */
.container { max-width: 1220px; }

@media (max-width: 1220px) {
  /* 태블릿 */
  .eight-pizza-part { padding: 0 2rem; }
}

@media (max-width: 768px) {
  /* 모바일 */
  .btn-group { display: flex; }      /* 햄버거 메뉴 활성화 */
  .gnb-menu { display: none; }       /* 데스크톱 메뉴 숨김 */
  .mobile-zone { display: block; }   /* 모바일 전용 UI */
}

@media (max-width: 480px) {
  /* 소형 모바일 */
  .pizza-list {
    grid-template-columns: repeat(2, 1fr);  /* 4열 → 2열 */
  }
}
```

---

## 🚀 성능 최적화

### **1. 이미지 최적화**
```html
<!-- 적절한 해상도 사용 -->
<img src="./피자리스트/피자1누끼.png" 
     alt="핫 스파이시 페퍼로니"
     width="300" height="300"
     loading="lazy">  <!-- 지연 로딩 -->
```

### **2. CSS 애니메이션 (GPU 가속)**
```css
.pizza-slice {
  /* GPU 가속 속성만 사용 */
  transform: translateX(0);
  opacity: 1;
  will-change: transform, opacity;  /* 미리 최적화 */
}
```

### **3. 이벤트 위임 패턴**
```javascript
// ❌ 나쁜 예: 각 요소마다 이벤트 리스너
items.forEach(item => {
  item.addEventListener('click', handler);
});

// ✅ 좋은 예: 부모에 하나만
container.addEventListener('click', (e) => {
  if (e.target.matches('.item')) {
    handler(e);
  }
});
```

---

## 🎓 학습 및 성장 포인트

### **제조업 → 웹 개발 시너지**

| 제조업 경험 | 웹 개발 적용 |
|------------|-------------|
| **0.01mm 정밀도 관리** | → Pixel Perfect 레이아웃 |
| **공정 프로세스 최적화** | → 모듈화된 코드 구조 |
| **품질 검사 체계** | → 크로스 브라우징 테스트 |
| **팀장 리더십** | → 프로젝트 전체 설계 |
| **불량률 감소 프로젝트** | → 디버깅 역량 |

### **기술적 성장**

**Phase 1: 기초 구현** (완료)
- ✅ HTML/CSS/JS 기본 문법
- ✅ jQuery를 활용한 DOM 조작
- ✅ Swiper.js 라이브러리 통합

**Phase 2: 코드 품질 개선** (진행 중)
- 🔄 DRY 원칙 적용 (중복 코드 제거)
- 🔄 함수 모듈화 및 재사용성 향상
- 🔄 ES6+ 문법 전환 (const, let, arrow function)

**Phase 3: 고급 최적화** (계획)
- ⏳ Lazy Loading 구현
- ⏳ Intersection Observer 활용
- ⏳ Web Vitals 최적화

---

## 🔄 향후 개선 사항

### **단기 (1개월)**
- [ ] **코드 리팩토링**: 중복 제거, 함수 분리
- [ ] **접근성 개선**: ARIA 속성, 키보드 네비게이션
- [ ] **성능 측정**: Lighthouse 95+ 목표

### **중기 (3개월)**
- [ ] **React 마이그레이션**: 컴포넌트 기반 재구성
- [ ] **상태 관리**: Context API 또는 Zustand
- [ ] **TypeScript 도입**: 타입 안정성 확보

### **장기 (6개월)**
- [ ] **Backend 구축**: Node.js + Express
- [ ] **Database**: MongoDB (상품, 주문 관리)
- [ ] **인증**: JWT 기반 로그인
- [ ] **결제**: 아임포트 PG 연동
- [ ] **PWA 전환**: 오프라인 지원

---

## 💻 로컬 실행 방법
```bash
# 1. 리포지토리 클론
git clone https://github.com/sonjongjun/WPC-626-PJ-SJJ.git

# 2. 프로젝트 폴더로 이동
cd WPC-626-PJ-SJJ/1차프로젝트/개인과제모음

# 3. Live Server로 실행 (VS Code 확장 프로그램)
# 또는 로컬 서버 실행
python -m http.server 8000  # Python 3
# 또는
npx serve .  # Node.js
```

**접속**: `http://localhost:8000/01.pizza.html`

---

## 🐛 알려진 이슈

### **현재 제한사항**

1. **코드 중복**: 피자 슬라이스 클릭 이벤트 8개 중복
   - **해결 계획**: 배열 기반 반복문으로 통합 예정

2. **반응형 개선 필요**: 480px 이하에서 일부 레이아웃 깨짐
   - **해결 계획**: 추가 미디어쿼리 작성

3. **jQuery 의존성**: 바닐라 JS로 전환 가능한 부분 많음
   - **해결 계획**: 점진적 마이그레이션

---

## 👨‍💻 개발자 정보

**손종준 (Son Jong Jun)**
```
📌 Career Transition: 제조업 → 웹 개발
📍 Location: Seoul, Korea
```

**경력**
- 🏭 **방위산업 제조 팀장** (8년)
  - X-RAY 장비 생산 관리
  - 품질 관리 및 공정 최적화
  - 10명 팀원 리더십

- 💻 **웹 퍼블리셔** (전환 중)
  - 강남 그린컴퓨터아카데미 수료
  - UX/UI 웹 퍼블리싱 전문 교육
  - 포트폴리오 프로젝트 진행 중

**연락처**
- 📧 Email: [qkskskaktz@gmail.com]
- 💼 GitHub: [@sonjongjun](https://github.com/sonjongjun)
- 🌐 Portfolio: https://sonjongjun.github.io/WPC-626-PJ-SJJ/3%EC%B0%A8_%EC%B5%9C%EC%A2%85%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/03.%EA%B5%AC%ED%98%84%EC%86%8C%EC%8A%A4/Portfolio.html

---

## 📄 라이선스

본 프로젝트는 **개인 포트폴리오 목적**으로 제작되었습니다.  
이미지 및 브랜드 자산은 교육 목적으로만 사용되었습니다.

---

## 💬 피드백

프로젝트에 대한 의견이나 개선 제안이 있으시면 **Issue** 또는 **Pull Request**를 남겨주세요!

**⭐ 이 프로젝트가 도움이 되셨다면 Star를 눌러주세요!**

---

<div align="center">

### *"8년의 정밀함이 만든 첫 코드"*

**From Manufacturing Excellence to Web Development**

![Footer Banner](https://via.placeholder.com/800x100/d22b2b/ffffff?text=Pizza+Mall+Portfolio)

</div>
