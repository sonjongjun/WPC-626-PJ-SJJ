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
      const hoverElements = document.querySelectorAll(
        'a, button, .project-item, .skill-card, .contact-box, .nav-item, .tab-button, .ba-card, .carousel-item'
      );

      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          if (this.dot) this.dot.classList.add('hover');
          if (this.outline) this.outline.classList.add('hover');
        });

        el.addEventListener('mouseleave', () => {
          if (this.dot) this.dot.classList.remove('hover');
          if (this.outline) this.outline.classList.remove('hover');
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

    // Show first section
    const firstSection = document.querySelector('.snap-section');
    if (firstSection) {
      firstSection.classList.add('visible');
    }

    // Console message
    console.log('%c🚀 Portfolio 2025', 'font-size: 20px; font-weight: bold; background: linear-gradient(90deg, #0a0a0a, #ff3366); color: white; padding: 10px 20px;');
    console.log('%cTrends: Dynamic Cursors • Scroll Snap • Bold Colors • 3D Carousel • Before/After', 'color: #666; font-size: 12px; padding: 5px;');
  }

  // Start initialization
  init();

})();