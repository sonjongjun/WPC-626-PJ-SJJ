// ========================================
// PORTFOLIO 2025 - JAVASCRIPT
// ========================================

(function() {
  'use strict';

  // ========== CONFIGURATION ==========
  const CONFIG = {
    cursorSpeed: { dot: 0.12, outline: 0.06 },
    animationDelay: 150,
    scrollThreshold: 0.5
  };

  // ========== UTILITY FUNCTIONS ==========
  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };

  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // ========== DYNAMIC CURSOR ==========
  class DynamicCursor {
    constructor() {
      this.dot = document.querySelector('.cursor-dot');
      this.outline = document.querySelector('.cursor-outline');
      
      if (!this.dot || !this.outline) return;
      
      this.mouse = { x: 0, y: 0 };
      this.dotPos = { x: 0, y: 0 };
      this.outlinePos = { x: 0, y: 0 };
      
      if (!isTouchDevice()) {
        this.init();
      } else {
        this.hide();
      }
    }

    init() {
      document.addEventListener('mousemove', (e) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
      });

      this.animate();
      this.addHoverEffects();
    }

    animate() {
      // Dot animation
      this.dotPos.x += (this.mouse.x - this.dotPos.x) * CONFIG.cursorSpeed.dot;
      this.dotPos.y += (this.mouse.y - this.dotPos.y) * CONFIG.cursorSpeed.dot;
      
      if (this.dot) {
        this.dot.style.left = this.dotPos.x + 'px';
        this.dot.style.top = this.dotPos.y + 'px';
      }

      // Outline animation
      this.outlinePos.x += (this.mouse.x - this.outlinePos.x) * CONFIG.cursorSpeed.outline;
      this.outlinePos.y += (this.mouse.y - this.outlinePos.y) * CONFIG.cursorSpeed.outline;
      
      if (this.outline) {
        this.outline.style.left = this.outlinePos.x + 'px';
        this.outline.style.top = this.outlinePos.y + 'px';
      }

      requestAnimationFrame(() => this.animate());
    }

    addHoverEffects() {
      // 클릭 가능한 요소
      const clickableElements = document.querySelectorAll(
        'a, button, .project-item, .skill-card, .contact-box, .nav-item, .tab-button, .ba-card, .carousel-item, .why-card, .mobile-project-card'
      );

      clickableElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          if (this.dot) this.dot.classList.add('hover');
          if (this.outline) {
            this.outline.classList.add('hover', 'clickable');
          }
        });

        el.addEventListener('mouseleave', () => {
          if (this.dot) this.dot.classList.remove('hover');
          if (this.outline) {
            this.outline.classList.remove('hover', 'clickable');
          }
        });
      });

      // 텍스트 요소
      const textElements = document.querySelectorAll('h1, h2, h3, h4, p, span');
      
      textElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          if (this.outline) this.outline.classList.add('text');
        });

        el.addEventListener('mouseleave', () => {
          if (this.outline) this.outline.classList.remove('text');
        });
      });
    }

    hide() {
      if (this.dot) this.dot.style.display = 'none';
      if (this.outline) this.outline.style.display = 'none';
    }
  }

  // ========== NAVIGATION ==========
  class Navigation {
    constructor() {
      this.navItems = document.querySelectorAll('.nav-item');
      this.sections = document.querySelectorAll('.snap-section');
      
      if (this.navItems.length === 0 || this.sections.length === 0) return;
      
      this.init();
    }

    init() {
      this.navItems.forEach(item => {
        item.addEventListener('click', () => {
          const targetId = item.getAttribute('data-target');
          const targetSection = document.getElementById(targetId);
          
          if (targetSection) {
            targetSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    }

    updateActive(sectionId) {
      this.navItems.forEach(item => {
        if (item.getAttribute('data-target') === sectionId) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  }

  // ========== SECTION OBSERVER ==========
  class SectionObserver {
    constructor(navigation) {
      this.navigation = navigation;
      this.sections = document.querySelectorAll('.snap-section, .regular-section');
      this.skillsAnimated = false;
      this.timelineAnimated = false;
      this.beforeAfterAnimated = false;
      
      if (this.sections.length === 0) return;
      
      this.init();
    }

    init() {
      const options = {
        threshold: CONFIG.scrollThreshold,
        rootMargin: '0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            section.classList.add('visible');
            
            const sectionId = section.id;
            this.navigation.updateActive(sectionId);

            // Trigger animations
            if (sectionId === 'skills' && !this.skillsAnimated) {
              this.animateSkills();
              this.skillsAnimated = true;
            }

            if (sectionId === 'experience' && !this.timelineAnimated) {
              this.animateTimeline();
              this.timelineAnimated = true;
            }

            if (sectionId === 'before-after' && !this.beforeAfterAnimated) {
              this.animateBeforeAfter();
              this.beforeAfterAnimated = true;
            }
          }
        });
      }, options);

      this.sections.forEach(section => observer.observe(section));
    }

    animateSkills() {
      const skillRows = document.querySelectorAll('.skill-row');
      
      skillRows.forEach((row, index) => {
        setTimeout(() => {
          row.classList.add('visible');
          
          const progress = row.getAttribute('data-progress');
          const progressBar = row.querySelector('.skill-progress');
          
          if (progressBar) {
            setTimeout(() => {
              progressBar.style.width = progress + '%';
            }, 100);
          }
        }, index * CONFIG.animationDelay);
      });
    }

    animateTimeline() {
      const timelineBlocks = document.querySelectorAll('.timeline-block');
      
      timelineBlocks.forEach((block, index) => {
        setTimeout(() => {
          block.classList.add('visible');
        }, index * 200);
      });
    }

    animateBeforeAfter() {
      const baCards = document.querySelectorAll('.ba-card');
      
      baCards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(50px)';
          card.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
          
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        }, index * 300);
      });

      // Animate metrics with count-up effect
      const metrics = document.querySelectorAll('.metric-value');
      metrics.forEach((metric, index) => {
        setTimeout(() => {
          this.countUpMetric(metric);
        }, 800 + index * 100);
      });
    }

    countUpMetric(element) {
      const text = element.textContent;
      const isPercentage = text.includes('%');
      const isTime = text.includes('s');
      
      if (isPercentage || isTime) {
        const number = parseFloat(text);
        const duration = 1000;
        const steps = 30;
        const increment = number / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= number) {
            current = number;
            clearInterval(timer);
          }
          element.textContent = current.toFixed(1) + (isPercentage ? '%' : 's');
        }, duration / steps);
      }
    }
  }

  // ========== PROJECT TABS ==========
  class ProjectTabs {
    constructor() {
      this.tabButtons = document.querySelectorAll('.tab-button');
      this.projectContents = document.querySelectorAll('.project-content');
      
      if (this.tabButtons.length === 0) return;
      
      this.init();
      
      // 즉시 모바일 뷰 생성
      this.checkAndCreateMobileView();
      
      // 윈도우 리사이즈 시에도 체크
      window.addEventListener('resize', debounce(() => {
        this.checkAndCreateMobileView();
      }, 250));
    }

    init() {
      this.tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          const targetTab = button.getAttribute('data-tab');
          
          // Remove active classes
          this.tabButtons.forEach(btn => btn.classList.remove('active'));
          this.projectContents.forEach(content => content.classList.remove('active'));
          
          // Add active classes
          button.classList.add('active');
          const targetContent = document.getElementById(targetTab);
          if (targetContent) {
            targetContent.classList.add('active');
          }
        });
      });
    }

    checkAndCreateMobileView() {
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile) {
        this.createMobileView();
      }
    }

    createMobileView() {
      console.log('createMobileView called, window width:', window.innerWidth);
      
      const projectData = {
        nudake: [
          { num: '01', title: 'NUDAKE MAIN', desc: '메인페이지 갤러리 구현', tags: ['HTML', 'CSS'], img: '../01.자료수집/누데이크8.png' },
          { num: '02', title: 'Product Page', desc: '제품 상세 페이지', tags: ['JavaScript'], img: '../01.자료수집/누데이크10.png' },
          { num: '03', title: 'Shopping Cart', desc: '장바구니 시스템', tags: ['React'], img: '../01.자료수집/누데이크15.png' },
          { num: '04', title: 'User Dashboard', desc: '사용자 대시보드', tags: ['Vue'], img: '../01.자료수집/누데이크7.png' },
          { num: '05', title: 'Payment Gateway', desc: '결제 시스템 통합', tags: ['Node.js'], img: '../01.자료수집/누데이크6.png' },
          { num: '06', title: 'Review System', desc: '리뷰 및 평점 기능', tags: ['MongoDB'], img: '../01.자료수집/누데이크9.png' }
        ],
        pizza: [
          { num: '01', title: 'E-Commerce Platform', desc: '모던한 온라인 쇼핑몰', tags: ['React', 'Node.js'], gradient: 'gradient-1' },
          { num: '02', title: 'AI Chat Application', desc: '실시간 AI 채팅', tags: ['Python', 'OpenAI'], gradient: 'gradient-2' },
          { num: '03', title: 'Portfolio CMS', desc: '포트폴리오 관리 시스템', tags: ['Vue.js', 'Firebase'], gradient: 'gradient-3' },
          { num: '04', title: 'Fitness Tracker', desc: '운동 기록 및 분석', tags: ['React Native'], gradient: 'gradient-4' },
          { num: '05', title: 'Music Streaming', desc: '음악 스트리밍 서비스', tags: ['Angular', 'AWS'], gradient: 'gradient-5' },
          { num: '06', title: 'Task Manager Pro', desc: '프로젝트 관리 도구', tags: ['TypeScript'], gradient: 'gradient-6' }
        ]
      };

      Object.keys(projectData).forEach(key => {
        const contentDiv = document.getElementById(key);
        console.log(`Looking for #${key}:`, contentDiv);
        
        if (!contentDiv) return;

        // 이미 모바일 그리드가 있으면 건너뛰기
        const existingGrid = contentDiv.querySelector('.mobile-project-grid');
        if (existingGrid) {
          console.log(`Mobile grid already exists for ${key}`);
          return;
        }

        // 모바일 그리드 생성
        const mobileGrid = document.createElement('div');
        mobileGrid.className = 'mobile-project-grid';
        console.log(`Creating mobile grid for ${key}`);

        projectData[key].forEach(project => {
          const card = document.createElement('div');
          card.className = 'mobile-project-card';
          
          const imageDiv = document.createElement('div');
          imageDiv.className = 'mobile-project-image';
          if (project.img) {
            imageDiv.style.backgroundImage = `url('${project.img}')`;
          } else if (project.gradient) {
            imageDiv.classList.add(project.gradient);
          }

          const contentWrapper = document.createElement('div');
          contentWrapper.className = 'mobile-project-content';
          
          contentWrapper.innerHTML = `
            <div class="mobile-project-number">${project.num}</div>
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
            <div class="mobile-project-tags">
              ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
          `;

          card.appendChild(imageDiv);
          card.appendChild(contentWrapper);
          mobileGrid.appendChild(card);
        });

        contentDiv.appendChild(mobileGrid);
        console.log(`Mobile grid appended to ${key}, cards count:`, mobileGrid.children.length);
      });
    }
  }

  // ========== INITIALIZATION ==========
  function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeAll);
    } else {
      initializeAll();
    }
  }

  function initializeAll() {
    // 모든 섹션 즉시 표시
    const allSections = document.querySelectorAll('.snap-section, .regular-section');
    allSections.forEach(section => {
      section.classList.add('visible');
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    });
    
    // Initialize all components
    new DynamicCursor();
    const navigation = new Navigation();
    new SectionObserver(navigation);
    new ProjectTabs();
    new KeyboardNav();
    new HeroAnimation();
    new SkillCardsInteraction();
    new BeforeAfterInteraction();
    new ScrollProgress();
    new SmoothScroll();

    // Console message
    console.log('%c🚀 Portfolio 2025', 'font-size: 20px; font-weight: bold; background: linear-gradient(90deg, #0a0a0a, #ff3366); color: white; padding: 10px 20px;');
    console.log('%cTrends: Dynamic Cursors • Scroll Snap • Bold Colors • 3D Carousel • Before/After', 'color: #666; font-size: 12px; padding: 5px;');
    
    // 디버깅: 모바일 그리드 확인
    console.log('Mobile grids found:', document.querySelectorAll('.mobile-project-grid').length);
    console.log('All sections visible:', allSections.length);
  }

  // Start initialization
  init();

})();