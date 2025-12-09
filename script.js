document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Solutions 3D Stack Logic
    const stackWrapper = document.getElementById('solutions-stack');
    const cards = Array.from(document.querySelectorAll('.stack-card'));
    const btnNext = document.getElementById('stack-next');
    const btnPrev = document.getElementById('stack-prev');

    if (stackWrapper && cards.length > 0) {
        let currentIndex = 0;

        function updateStack() {
            // Reset all classes
            cards.forEach(card => {
                card.className = 'stack-card';
            });

            // Calculate indices
            const total = cards.length;
            const active = currentIndex % total;
            const next = (currentIndex + 1) % total;
            const next2 = (currentIndex + 2) % total;
            const prev = (currentIndex - 1 + total) % total;

            // Assign classes
            cards[active].classList.add('active');
            cards[next].classList.add('next');
            cards[next2].classList.add('next-2');
            cards[prev].classList.add('prev');
        }

        // Initialize
        updateStack();

        // Handlers
        function goNext() {
            currentIndex = (currentIndex + 1) % cards.length;
            updateStack();
        }

        function goPrev() {
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            updateStack();
        }

        if (btnNext) btnNext.addEventListener('click', goNext);
        if (btnPrev) btnPrev.addEventListener('click', goPrev);

        // Click on specific card to activate
        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                // Find distance to this card
                // Simple logic: just set this card as current
                // But we handle the loop in updateStack based on currentIndex
                // so we just need to find which index this card is relative to original array
                currentIndex = index;
                updateStack();
            });
        });

        // Auto rotate (optional interaction)
        // setInterval(goNext, 5000);
    }


    // Header Scroll Effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0,0,0,0.95)';
        } else {
            header.style.background = 'rgba(0,0,0,0.8)';
        }
    });

    // Mobile Menu - Close on Link Click
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                if (menuToggle) menuToggle.classList.remove('active'); // Optional: Add active state to hamburger
            }
        });
    });

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animateOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => animateOnScroll.observe(el));
});

