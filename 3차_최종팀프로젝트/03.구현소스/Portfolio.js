// ========================================
// PORTFOLIO 2025 - JAVASCRIPT
// ========================================

(function() {
  'use strict';

  // ========== CONFIGURATION ==========
  const CONFIG = {
    cursorSpeed: { dot: 0.25, outline: 0.15 },
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
        this.outline.style.left = (this.outlinePos.x - 20) + 'px';
        this.outline.style.top = (this.outlinePos.y - 20) + 'px';
      }

      requestAnimationFrame(() => this.animate());
    }

    addHoverEffects() {
      const hoverElements = document.querySelectorAll(
        'a, button, .project-item, .skill-card, .contact-box, .nav-item, .tab-button'
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
      this.sections = document.querySelectorAll('.snap-section');
      this.skillsAnimated = false;
      this.timelineAnimated = false;
      
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
  }

  // ========== PROJECT TABS ==========
  class ProjectTabs {
    constructor() {
      this.tabButtons = document.querySelectorAll('.tab-button');
      this.projectContents = document.querySelectorAll('.project-content');
      
      if (this.tabButtons.length === 0) return;
      
      this.init();
      this.duplicateProjectItems();
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

    duplicateProjectItems() {
      const tracks = document.querySelectorAll('.project-track');
      
      tracks.forEach(track => {
        const items = Array.from(track.children);
        items.forEach(item => {
          const clone = item.cloneNode(true);
          track.appendChild(clone);
        });
      });
    }
  }

  // ========== KEYBOARD NAVIGATION ==========
  class KeyboardNav {
    constructor() {
      this.sections = Array.from(document.querySelectorAll('.snap-section'));
      if (this.sections.length === 0) return;
      
      this.init();
    }

    init() {
      document.addEventListener('keydown', (e) => {
        const visibleSection = document.querySelector('.snap-section.visible');
        if (!visibleSection) return;
        
        const currentIndex = this.sections.indexOf(visibleSection);
        
        if (e.key === 'ArrowDown' && currentIndex < this.sections.length - 1) {
          e.preventDefault();
          this.sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
          e.preventDefault();
          this.sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  // ========== HERO ANIMATION ==========
  class HeroAnimation {
    constructor() {
      this.titleLines = document.querySelectorAll('.title-line');
      if (this.titleLines.length === 0) return;
      
      this.init();
    }

    init() {
      this.titleLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(100%)';
        
        setTimeout(() => {
          line.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
          line.style.opacity = '1';
          line.style.transform = 'translateY(0)';
        }, index * 200 + 100);
      });
    }
  }

  // ========== SKILL CARDS INTERACTION ==========
  class SkillCardsInteraction {
    constructor() {
      this.skillCards = document.querySelectorAll('.skill-card');
      if (this.skillCards.length === 0) return;
      
      this.init();
    }

    init() {
      this.skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          this.skillCards.forEach(c => {
            if (c !== card) {
              c.style.opacity = '0.5';
              c.style.transform = 'scale(0.98)';
            }
          });
        });

        card.addEventListener('mouseleave', () => {
          this.skillCards.forEach(c => {
            c.style.opacity = '1';
            c.style.transform = 'scale(1)';
          });
        });
      });
    }
  }

  // ========== PROJECT ITEMS INTERACTION ==========
  class ProjectItemsInteraction {
    constructor() {
      this.projectItems = document.querySelectorAll('.project-item');
      if (this.projectItems.length === 0) return;
      
      this.init();
    }

    init() {
      this.projectItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
          const rect = item.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          const img = item.querySelector('.project-img');
          if (img) {
            img.style.transform = `translate(${x * 0.03}px, ${y * 0.03}px) scale(1.05)`;
          }
        });

        item.addEventListener('mouseleave', () => {
          const img = item.querySelector('.project-img');
          if (img) {
            img.style.transform = 'translate(0, 0) scale(1)';
          }
        });
      });
    }
  }

  // ========== SCROLL PROGRESS ==========
  class ScrollProgress {
    constructor() {
      this.progressBar = null;
      this.init();
    }

    init() {
      this.progressBar = document.createElement('div');
      this.progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--black), var(--red));
        z-index: 10001;
        width: 0%;
        transition: width 0.1s ease;
      `;
      document.body.appendChild(this.progressBar);

      const updateProgress = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        
        if (this.progressBar) {
          this.progressBar.style.width = scrollPercent + '%';
        }
      };

      window.addEventListener('scroll', debounce(updateProgress, 10), { passive: true });
    }
  }

  // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
  class SmoothScroll {
    constructor() {
      this.init();
    }

    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          if (href === '#') return;
          
          e.preventDefault();
          const target = document.querySelector(href);
          
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
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
    new ProjectItemsInteraction();
    new ScrollProgress();
    new SmoothScroll();

    // Show first section
    const firstSection = document.querySelector('.snap-section');
    if (firstSection) {
      firstSection.classList.add('visible');
    }

    // Console message
    console.log('%c🚀 Portfolio 2025', 'font-size: 20px; font-weight: bold; background: linear-gradient(90deg, #0a0a0a, #ff3366); color: white; padding: 10px 20px;');
    console.log('%cTrends: Dynamic Cursors • Scroll Snap • Bold Colors', 'color: #666; font-size: 12px; padding: 5px;');
  }

  // Start initialization
  init();

})();

  // ========== 3D CAROUSEL CONTROLLER ==========
  class Carousel3D {
    constructor() {
      this.carousels = document.querySelectorAll('.carousel-3d');
      this.buttons = document.querySelectorAll('.carousel-btn');
      this.currentRotation = { nudake: 0, pizza: 0 };
      
      if (this.carousels.length === 0) return;
      
      this.init();
    }

    init() {
      this.buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const carouselId = btn.getAttribute('data-carousel');
          const direction = btn.getAttribute('data-dir');
          this.rotate(carouselId, direction);
        });
      });
    }

    rotate(carouselId, direction) {
      const carousel = document.getElementById(`carousel-${carouselId}`);
      if (!carousel) return;
      
      const angle = 60; // 360 / 6 items
      
      if (direction === 'next') {
        this.currentRotation[carouselId] -= angle;
      } else {
        this.currentRotation[carouselId] += angle;
      }
      
      carousel.style.animation = 'none';
      carousel.style.transform = `rotateY(${this.currentRotation[carouselId]}deg)`;
      
      setTimeout(() => {
        carousel.style.animation = '';
      }, 50);
    }
  }

  // Add to initialization
  const originalInit = initializeAll;
  initializeAll = function() {
    originalInit();
    new Carousel3D();
  };