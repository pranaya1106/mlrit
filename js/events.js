// ── Event Showcase ─────────────────────────────────────────
// Cursor-following PLAY circle · logo hover → expand to centre + show panel
// Mute toggle · dot indicator · auto-advance
(function () {
  var section = document.querySelector('.event-showcase');
  if (!section) return;

  var video   = document.getElementById('esVideo');
  var cursor  = document.getElementById('esCursor');
  var muteBtn = document.getElementById('esMute');
  var logos   = Array.from(document.querySelectorAll('.es__logo'));
  var panels  = Array.from(document.querySelectorAll('.es__panel'));
  var dots    = Array.from(document.querySelectorAll('.es__dot'));

  var current   = 0;
  var total     = logos.length;
  var autoTimer = null;
  var expanded  = false;

  // ── Helpers ──
  function clearExpand() {
    logos.forEach(function (l) {
      l.classList.remove('is-expanded');
      l.querySelector('.es__logo-img').style.transform = '';
    });
    panels.forEach(function (p) { p.classList.remove('is-visible'); });
    section.classList.remove('logo-expanded');
    expanded = false;
  }

  function activate(idx) {
    logos.forEach(function (l) { l.classList.remove('is-active'); });
    dots.forEach(function (d)  { d.classList.remove('is-active'); });
    logos[idx].classList.add('is-active');
    dots[idx].classList.add('is-active');
    current = idx;
  }

  function goTo(idx) {
    idx = ((idx % total) + total) % total;
    if (idx === current && !expanded) return;
    clearExpand();
    activate(idx);
    resetAuto();
  }

  // ── Logo hover → expand to viewport centre + show panel ──
  logos.forEach(function (logo) {
    logo.addEventListener('mouseenter', function () {
      var idx = +logo.dataset.index;
      if (idx !== current) { activate(idx); }

      // Calculate transform to move logo-img to viewport centre
      var img  = logo.querySelector('.es__logo-img');
      var rect = img.getBoundingClientRect();
      var secRect = section.getBoundingClientRect();

      var cx = secRect.width / 2;
      var cy = secRect.height * 0.38; // logo sits at ~38% from top
      var ix = rect.left - secRect.left + rect.width / 2;
      var iy = rect.top  - secRect.top  + rect.height / 2;

      var scale = Math.min(2.2, secRect.width / rect.width * 0.35);
      img.style.transform = 'translate(' + (cx - ix) + 'px, ' + (cy - iy) + 'px) scale(' + scale + ')';

      logo.classList.add('is-expanded');
      section.classList.add('logo-expanded');
      panels[idx].classList.add('is-visible');
      expanded = true;

      resetAuto();
    });
  });

  // Collapse when mouse leaves logo area
  var logosWrap = document.getElementById('esLogos');
  logosWrap.addEventListener('mouseleave', function () {
    clearExpand();
  });

  // ── Custom cursor ──
  section.addEventListener('mouseenter', function () {
    section.classList.add('cursor-visible');
  });
  section.addEventListener('mouseleave', function () {
    section.classList.remove('cursor-visible');
    section.classList.remove('cursor-shrink');
  });
  section.addEventListener('mousemove', function (e) {
    var r = section.getBoundingClientRect();
    cursor.style.left = (e.clientX - r.left) + 'px';
    cursor.style.top  = (e.clientY - r.top)  + 'px';
  });

  // Shrink cursor over interactive elements
  section.querySelectorAll('button, a, [role="button"]').forEach(function (el) {
    el.addEventListener('mouseenter', function () { section.classList.add('cursor-shrink'); });
    el.addEventListener('mouseleave', function () { section.classList.remove('cursor-shrink'); });
  });

  // ── Mute toggle ──
  muteBtn.addEventListener('click', function () {
    video.muted = !video.muted;
    section.classList.toggle('is-muted', video.muted);
  });

  // Start muted
  section.classList.add('is-muted');

  // ── Auto-advance dots every 5s ──
  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(function () {
      goTo(current + 1);
    }, 5000);
  }
  resetAuto();

  // ── Play / pause video on visibility ──
  var io = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      video.play().catch(function () {});
    } else {
      video.pause();
    }
  }, { threshold: 0 });
  io.observe(section);
})();
