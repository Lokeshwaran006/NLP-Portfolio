/**
 * LOKESHWARAN.D - NLP Portfolio JavaScript
 * Interactive functionality: Tab switching, Lightbox, Code Copying, Modals, ScrollSpy
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    // Close mobile menu on clicking any link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }

  // 2. Navbar Scrolled State
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. ScrollSpy for Active Nav Link
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function scrollSpy() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', scrollSpy);

  // 4. Hands-on Sessions Tab Switching
  const sessionTabBtns = document.querySelectorAll('.session-tabs-nav .tab-btn');
  const sessionPanels = document.querySelectorAll('.session-content-panel');

  sessionTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sessionTabBtns.forEach(b => b.classList.remove('active'));
      sessionPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // 5. Project Writeup Topics Navigator (10 Topics)
  const topicNavBtns = document.querySelectorAll('.topic-nav-btn');
  const topicPanes = document.querySelectorAll('.topic-pane');

  topicNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      topicNavBtns.forEach(b => b.classList.remove('active'));
      topicPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-topic');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
        // Smooth scroll to top of topic container if clicked on mobile
        if (window.innerWidth < 768) {
          targetPane.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // 6. Copy Code Button Functionality
  const copyBtns = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('toast-notice');

  function showToast(message) {
    if (!toast) return;
    toast.querySelector('.toast-text').textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const codeBlock = btn.closest('.code-cell-card').querySelector('pre code');
      if (codeBlock) {
        const text = codeBlock.innerText;
        navigator.clipboard.writeText(text).then(() => {
          btn.classList.add('copied');
          btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
          showToast('Code copied to clipboard!');
          setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = '<i class="far fa-copy"></i> Copy';
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
      }
    });
  });

  // 7. Presentation Pictures Lightbox Modal
  const presentationCards = document.querySelectorAll('.presentation-card');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let currentGalleryIndex = 0;
  const galleryItems = [
    {
      src: 'assets/images/presentationpic1.jpg',
      title: 'SmartFarm 360 Title Presentation',
      desc: 'Lokeshwaran.D delivering the opening project presentation on SmartFarm 360 at VIT Vellore. Showing project credentials and team members.'
    },
    {
      src: 'assets/images/presentationpic2.jpg',
      title: 'Project Objectives & Core Modules',
      desc: 'Explaining the 8 core modules: Crop Recommendation, Relaying, Cultivation Guidance, Irrigation Efficiency, Machinery & Livestock, Weather & Markets, Profit Estimation, and Multilingual AI Chatbot.'
    },
    {
      src: 'assets/images/presentationpic3.jpg',
      title: 'System Architecture & Working Pipeline',
      desc: 'Presenting the comprehensive 4-tier system architecture and end-to-end data pipeline from farmer voice input to agronomic inference and localized speech output.'
    }
  ];

  function openLightbox(index) {
    currentGalleryIndex = index;
    const item = galleryItems[currentGalleryIndex];
    if (item && lightboxImg && lightboxTitle && lightboxDesc) {
      lightboxImg.src = item.src;
      lightboxTitle.textContent = item.title;
      lightboxDesc.textContent = item.desc;
      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  function showNextImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
    openLightbox(currentGalleryIndex);
  }

  function showPrevImage() {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox(currentGalleryIndex);
  }

  presentationCards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-index') || '0', 10);
      openLightbox(idx);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', showNextImage);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevImage);

  // Close lightbox clicking backdrop
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  // Keyboard controls for lightbox
  document.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNextImage();
      if (e.key === 'ArrowLeft') showPrevImage();
    }
  });

  // 8. Document Modal Viewer (Case Study & Writeup)
  const docModal = document.getElementById('doc-modal');
  const docIframe = document.getElementById('doc-iframe');
  const docModalTitle = document.getElementById('doc-modal-title');
  const docModalClose = document.getElementById('doc-modal-close');
  const docViewBtns = document.querySelectorAll('.btn-view-doc');

  docViewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const docUrl = btn.getAttribute('data-doc');
      const docTitle = btn.getAttribute('data-title') || 'Document Viewer';
      if (docIframe && docModalTitle) {
        docIframe.src = docUrl;
        docModalTitle.textContent = docTitle;
        docModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (docModalClose) {
    docModalClose.addEventListener('click', () => {
      docModal.classList.remove('active');
      if (docIframe) docIframe.src = '';
      document.body.style.overflow = 'auto';
    });
  }

  if (docModal) {
    docModal.addEventListener('click', (e) => {
      if (e.target === docModal) {
        docModal.classList.remove('active');
        if (docIframe) docIframe.src = '';
        document.body.style.overflow = 'auto';
      }
    });
  }

  // 9. Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
