const nav = document.querySelector('.nav');
        const navDots = document.querySelectorAll('.nav-dot');
        const sections = document.querySelectorAll('.section');
        const experienceSection = document.getElementById('experience');
        let currentVisibleSection = 0;

        // 초기 첫 섹션 표시
        sections[0].classList.add('visible');

        // 섹션 전환 애니메이션 함수
        function transitionToSection(targetIndex) {
            // 경력 페이지로 이동하거나 경력 페이지에서 이동할 때는 애니메이션 스킵
            if (targetIndex === 5 || currentVisibleSection === 5) {
                window.scrollTo({
                    top: sections[targetIndex].offsetTop,
                    behavior: 'smooth'
                });
                currentVisibleSection = targetIndex;
                return;
            }
            
            // 현재 섹션에서 나가는 애니메이션
            sections[currentVisibleSection].classList.add('scrolling-out');
            
            // 타겟 섹션으로 이동
            setTimeout(() => {
                window.scrollTo({
                    top: sections[targetIndex].offsetTop,
                    behavior: 'smooth'
                });
                
                // 나가는 애니메이션 클래스 제거
                setTimeout(() => {
                    sections[currentVisibleSection].classList.remove('scrolling-out');
                    currentVisibleSection = targetIndex;
                }, 300);
            }, 100);
        }

        // Intersection Observer로 현재 섹션 감지 및 애니메이션
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    
                    // 섹션 애니메이션 추가
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('scrolling-out');
                    
                    // 현재 섹션 인덱스 업데이트
                    sections.forEach((section, index) => {
                        if (section.id === sectionId) {
                            currentVisibleSection = index;
                        }
                    });
                    
                    // 네비게이션 업데이트
                    navDots.forEach(dot => {
                        dot.classList.remove('active');
                        if (dot.dataset.section === sectionId) {
                            dot.classList.add('active');
                        }
                    });

                    // 네비게이션 색상 변경
                    if (sectionId === 'about' || sectionId === 'projects-pizza' || sectionId === 'projects-nudake' || sectionId === 'experience') {
                        nav.classList.add('black');
                    } else {
                        nav.classList.remove('black');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });

        // 네비게이션 점 클릭
        navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                transitionToSection(index);
            });
        });

        // 현재 어느 섹션에 있는지 확인하는 함수
        function getCurrentSection() {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            let currentIndex = 0;
            
            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentIndex = index;
                }
            });
            
            return currentIndex;
        }

        // Experience 섹션 내부에 있는지 확인
        function isInExperienceSection() {
            const scrollPosition = window.scrollY;
            const expTop = experienceSection.offsetTop;
            const expBottom = expTop + experienceSection.offsetHeight;
            
            return scrollPosition >= expTop && scrollPosition < expBottom;
        }

        // Experience 섹션이 스크롤 가능한지 확인
        function canScrollExperience(direction) {
            const scrollTop = window.scrollY - experienceSection.offsetTop;
            const maxScroll = experienceSection.scrollHeight - experienceSection.offsetHeight;
            
            if (direction === 'down') {
                return scrollTop < maxScroll - 50; // 여유 50px
            } else {
                return scrollTop > 50; // 여유 50px
            }
        }

        // 키보드 네비게이션
        const sectionIds = ['home', 'about', 'skills', 'projects-pizza', 'projects-nudake', 'experience', 'contact'];
        
        document.addEventListener('keydown', (e) => {
            const currentIndex = getCurrentSection();

            if (e.key === 'ArrowDown') {
                // Experience 섹션에서 아직 스크롤할 공간이 있으면 기본 스크롤 허용
                if (currentIndex === 5 && canScrollExperience('down')) {
                    return; // 기본 스크롤 동작 허용
                }
                
                e.preventDefault();
                if (currentIndex < sectionIds.length - 1) {
                    transitionToSection(currentIndex + 1);
                }
            } else if (e.key === 'ArrowUp') {
                // Experience 섹션에서 아직 스크롤할 공간이 있으면 기본 스크롤 허용
                if (currentIndex === 5 && canScrollExperience('up')) {
                    return; // 기본 스크롤 동작 허용
                }
                
                e.preventDefault();
                if (currentIndex > 0) {
                    transitionToSection(currentIndex - 1);
                }
            } else if (e.key === 'Home') {
                e.preventDefault();
                transitionToSection(0);
            } else if (e.key === 'End') {
                e.preventDefault();
                transitionToSection(sectionIds.length - 1);
            }
        });

        // 휠 이벤트로 섹션 간 이동 (Experience 섹션에서는 내부 스크롤 우선)
        let wheelTimeout;
        let isWheelScrolling = false;

        window.addEventListener('wheel', (e) => {
            const currentIndex = getCurrentSection();
            
            // Experience 섹션에서 내부 스크롤이 가능하면 기본 동작 허용
            if (currentIndex === 5) {
                if ((e.deltaY > 0 && canScrollExperience('down')) || 
                    (e.deltaY < 0 && canScrollExperience('up'))) {
                    return; // 기본 스크롤 허용
                }
            }
            
            // 다른 섹션에서는 빠르게 넘어가기
            if (isWheelScrolling) return;
            
            clearTimeout(wheelTimeout);
            
            if (Math.abs(e.deltaY) > 50) {
                e.preventDefault();
                isWheelScrolling = true;
                
                wheelTimeout = setTimeout(() => {
                    isWheelScrolling = false;
                }, 800);
                
                if (e.deltaY > 0 && currentIndex < sectionIds.length - 1) {
                    transitionToSection(currentIndex + 1);
                } else if (e.deltaY < 0 && currentIndex > 0) {
                    transitionToSection(currentIndex - 1);
                }
            }
        }, { passive: false });

        // 스킬 바 애니메이션
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 약간의 지연 후 애니메이션 시작
                    setTimeout(() => {
                        entry.target.querySelectorAll('.skill-item').forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('visible');
                            }, index * 150);
                        });
                    }, 300);
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            skillObserver.observe(skillsSection);
        }

        // 프로젝트 슬라이드 클릭
        document.querySelectorAll('.project-slide').forEach(slide => {
            slide.addEventListener('click', () => {
                const projectTitle = slide.querySelector('h3');
                if (projectTitle) {
                    const projectName = projectTitle.textContent;
                    alert(`${projectName} 프로젝트를 선택하셨습니다!`);
                }
            });
        });

        // 연락처 링크 클릭
        document.querySelectorAll('.contact-link').forEach(link => {
            link.addEventListener('click', () => {
                const title = link.getAttribute('title');
                alert(`${title}로 연결됩니다!`);
            });
        });