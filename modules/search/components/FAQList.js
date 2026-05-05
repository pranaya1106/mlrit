/**
 * FAQList.js — Common Searches / FAQ section shown when input is empty
 */
(function () {
    'use strict';

    var DEFAULT_FAQ = [
        { label: 'What courses are offered in MLRIT?', icon: 'fas fa-graduation-cap', url: 'https://mlrit.ac.in/admissions/' },
        { label: 'How are placements in MLRIT?',       icon: 'fas fa-briefcase',      url: 'https://mlrit.ac.in/placements/' },
        { label: 'Where is MLRIT located?',            icon: 'fas fa-map-marker-alt', url: 'https://mlrit.ac.in/contactus/' },
        { label: 'Admission process',                  icon: 'fas fa-file-alt',       url: 'https://mlrit.ac.in/admissions/' },
        { label: 'CSE Department',                     icon: 'fas fa-laptop-code',    url: 'https://mlrit.ac.in/computer-science-engineering/' },
        { label: 'ECE Department',                     icon: 'fas fa-microchip',      url: 'https://mlrit.ac.in/ece/' },
        { label: 'Placements 2025',                    icon: 'fas fa-chart-line',     url: 'https://mlrit.ac.in/placements/' },
        { label: 'Campus Life',                        icon: 'fas fa-leaf',           url: 'https://mlrit.ac.in/campus-life/' },
        { label: 'Scholarships',                       icon: 'fas fa-award',          url: 'https://mlrit.ac.in/scholarships/' },
        { label: 'Research & Innovation',              icon: 'fas fa-flask',          url: 'https://mlrit.ac.in/research/' },
    ];

    var _section  = null;
    var _basePath = '';
    var _closeOverlay = null;

    function escHtml(s) {
        return String(s || '')
            .replace(/&/g, '&amp;').replace(/</g, '&lt;')
            .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function render(container, opts) {
        var options  = opts || {};
        _basePath    = options.basePath || '';
        _closeOverlay = options.onNavigate || null;
        var items    = (options.faqItems && options.faqItems.length) ? options.faqItems : DEFAULT_FAQ;

        var section = document.createElement('div');
        section.id        = 'mlrit-faq-section';
        section.className = 'faq-section';

        var listHTML = items.map(function (f) {
            var icon = f.icon ? '<i class="' + escHtml(f.icon) + '" aria-hidden="true"></i> ' : '<i class="fas fa-search" aria-hidden="true"></i> ';
            // Don't prepend basePath to absolute URLs (http/https or starting with /)
            var resolvedUrl = (f.url.indexOf('http') === 0 || f.url.charAt(0) === '/')
                ? f.url
                : _basePath + f.url;
            return '<li class="faq-item">' +
                '<a href="javascript:void(0)" data-url="' + escHtml(resolvedUrl) + '">' +
                icon + escHtml(f.label) +
                '</a></li>';
        }).join('');

        section.innerHTML =
            '<h4 class="faq-title"><i class="fas fa-star" aria-hidden="true"></i> Common Searches</h4>' +
            '<ul class="faq-list">' + listHTML + '</ul>';

        container.appendChild(section);
        _section = section;

        // Click → navigate
        section.querySelectorAll('.faq-item a').forEach(function (a) {
            a.addEventListener('click', function (e) {
                e.preventDefault();
                var url = this.getAttribute('data-url');
                if (_closeOverlay) _closeOverlay();
                else if (window.SearchOverlay) window.SearchOverlay.close();
                // External URLs (http/https) — navigate directly
                // Internal absolute paths (/) — also navigate directly
                document.body.style.overflow = '';
                if (url.indexOf('http') === 0) {
                    window.location.href = url;
                } else {
                    window.location.href = url;
                }
            });
        });
    }

    function show() {
        var el = document.getElementById('mlrit-faq-section');
        if (el) el.style.display = '';
    }

    function hide() {
        var el = document.getElementById('mlrit-faq-section');
        if (el) el.style.display = 'none';
    }

    window.FAQList = { render: render, show: show, hide: hide };

})();
