document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initFaqAccordion();
  initMobileMenu();
  initMarqueeLoop();
});

/**
 * Theme Toggle Functionality
 * Manages switching between light and dark organic palettes.
 */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  // Check saved preference or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }

  // Handle click to switch themes
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    // Save to local storage
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
}

/**
 * FAQ Accordion Functionality
 * Provides smooth expandable questions.
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const container = item.querySelector('.faq-answer-container');
    
    if (!btn || !container) return;

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other open FAQ items for a clean experience
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const otherContainer = otherItem.querySelector('.faq-answer-container');
          if (otherContainer) otherContainer.style.maxHeight = '0px';
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        container.style.maxHeight = '0px';
      } else {
        item.classList.add('active');
        container.style.maxHeight = container.scrollHeight + 'px';
      }
    });
  });
}

/**
 * Mobile Navigation Toggle
 * Handles slide-out menu on tablets and mobile screens.
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');
    toggleBtn.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
  });

  // Close menu when clicking a link
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      toggleBtn.textContent = '☰';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && e.target !== toggleBtn) {
      navMenu.classList.remove('active');
      toggleBtn.textContent = '☰';
    }
  });
}

/**
 * Marquee Loop Helper
 * Dynamically duplicates cards within the marquee-track to ensure continuous scrolling
 * without breaks or empty gaps on high-resolution screens.
 */
function initMarqueeLoop() {
  const track = document.getElementById('marquee-track');
  if (!track) return;

  // Clone all existing cards in the track once
  const cards = Array.from(track.children);
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });
  
  // Pause marquee scroll when keyboard focus hits a card for accessibility
  track.addEventListener('focusin', () => {
    track.style.animationPlayState = 'paused';
  });
  
  track.addEventListener('focusout', () => {
    track.style.animationPlayState = 'running';
  });
}
