/**
 * Static search data for MLRIT website
 * This replaces the API calls with static data
 * URLs are relative to the root directory
 */
(function () {
    'use strict';

    var SEARCH_DATA = [
        // Departments — link directly to mlrit.ac.in
        { title: 'Computer Science and Engineering (CSE)', description: 'Department of Computer Science and Engineering', url: 'https://mlrit.ac.in/computer-science-engineering/', keywords: 'cse computer science engineering department' },
        { title: 'Electronics and Communication Engineering (ECE)', description: 'Department of Electronics and Communication Engineering', url: 'https://mlrit.ac.in/ece/', keywords: 'ece electronics communication engineering department' },
        { title: 'Electrical and Electronics Engineering (EEE)', description: 'Department of Electrical and Electronics Engineering', url: 'https://mlrit.ac.in/eee/', keywords: 'eee electrical electronics engineering department' },
        { title: 'Aeronautical Engineering', description: 'Department of Aeronautical Engineering', url: 'https://mlrit.ac.in/aeronautical-engineering/', keywords: 'aeronautical aerospace engineering department aero' },
        { title: 'Mechanical Engineering', description: 'Department of Mechanical Engineering', url: 'https://mlrit.ac.in/mechanical-engineering/', keywords: 'mechanical engineering department mech' },
        { title: 'AI & Machine Learning (CSE-AIML)', description: 'Department of Artificial Intelligence and Machine Learning', url: 'https://mlrit.ac.in/cse-aiml/', keywords: 'aiml ai ml artificial intelligence machine learning department cse' },
        { title: 'CSE - Cyber Security', description: 'Computer Science Engineering with Cyber Security specialization', url: 'https://mlrit.ac.in/cse-cs/', keywords: 'cse cyber security cs specialization department' },
        { title: 'CSE - Data Science', description: 'Computer Science Engineering with Data Science specialization', url: 'https://mlrit.ac.in/cse-ds/', keywords: 'cse data science ds specialization department' },
        { title: 'CS & IT (CSIT)', description: 'Computer Science and Information Technology', url: 'https://mlrit.ac.in/csit/', keywords: 'csit computer science information technology department' },
        { title: 'Information Technology (IT)', description: 'Department of Information Technology', url: 'https://mlrit.ac.in/it/', keywords: 'it information technology department' },
        { title: 'Freshman Engineering', description: 'First year engineering program at MLRIT', url: 'https://mlrit.ac.in/freshman/', keywords: 'freshman first year engineering foundation' },
        { title: 'MBA Program', description: 'Master of Business Administration at MLRIT', url: 'https://mlrit.ac.in/mba/', keywords: 'mba master business administration management' },
        { title: 'B.Tech Undergraduate Programs', description: 'All B.Tech undergraduate programs offered at MLRIT', url: 'https://mlrit.ac.in/admissions/', keywords: 'undergraduate btech programs courses ug admissions' },
        { title: 'M.Tech Postgraduate Programs', description: 'M.Tech postgraduate programs at MLRIT', url: 'https://mlrit.ac.in/admissions/', keywords: 'postgraduate mtech programs pg' },

        // Placements
        { title: 'Placements', description: 'Placement records, top recruiters and statistics at MLRIT', url: 'https://mlrit.ac.in/placements/', keywords: 'placements jobs recruitment companies careers package lpa' },

        // About & General
        { title: 'About MLRIT', description: 'Vision, Mission, Governing Body and overview of MLRIT', url: 'https://mlrit.ac.in/about-us/', keywords: 'about mlrit college institute vision mission history' },
        { title: 'Admissions', description: 'Admission process, eligibility and fee structure for B.Tech, M.Tech, MBA', url: 'https://mlrit.ac.in/admissions/', keywords: 'admissions admission apply eligibility fee structure eamcet counselling' },
        { title: 'Scholarships', description: 'Scholarship opportunities for MLRIT students', url: 'https://mlrit.ac.in/scholarships/', keywords: 'scholarships financial aid merit sports quota fee waiver' },
        { title: 'Research', description: 'Research centers, publications and patents at MLRIT', url: 'https://mlrit.ac.in/research/', keywords: 'research publications patents centers innovation projects' },
        { title: 'Innovation Cell', description: 'Student startups, incubation and entrepreneurship at MLRIT', url: 'https://mlrit.ac.in/innovation-cell/innovation-overview/', keywords: 'innovation cell startup incubation entrepreneurship cie' },
        { title: 'Campus Life', description: 'Student life, hostels, sports and campus facilities', url: 'https://mlrit.ac.in/campus-life/', keywords: 'campus life facilities hostels sports cafeteria transport clubs' },
        { title: 'Sports', description: 'Sports facilities, achievements and sports quota at MLRIT', url: 'https://mlrit.ac.in/sports/', keywords: 'sports cricket badminton football athletics volleyball basketball quota' },
        { title: 'Events', description: 'Events, fests and activities at MLRIT', url: 'https://mlrit.ac.in/events/', keywords: 'events activities fest hackathon cultural sports zignasa' },
        { title: 'NIRF Rankings', description: 'MLRIT NIRF ranking — 201-300 band in Engineering category', url: 'https://mlrit.ac.in/nirf-ranked-institution/', keywords: 'nirf ranking 201 300 engineering national ranking' },
        { title: 'NAAC Accreditation', description: 'NAAC SSR and accreditation details for MLRIT', url: 'https://naac.mlrit.ac.in/', keywords: 'naac accreditation ssr quality grade' },
        { title: 'IQAC', description: 'Internal Quality Assurance Cell at MLRIT', url: 'https://mlrit.ac.in/iqac/', keywords: 'iqac quality assurance internal cell aqar' },
        { title: 'AICTE Approvals', description: 'AICTE approval details for MLRIT', url: 'https://mlrit.ac.in/aicte-approvals/', keywords: 'aicte approval accreditation mandatory' },
        { title: 'Examinations', description: 'Exam portal, schedules and academic calendar', url: 'https://mlrit.ac.in/examinations/', keywords: 'examinations exam portal schedule academic calendar results' },
        { title: 'LMS', description: 'Learning Management System for MLRIT students', url: 'https://lms.mlrit.ac.in/', keywords: 'lms learning management system online courses portal' },
        { title: 'Alumni', description: 'MLRIT alumni network and connect', url: 'https://alumni.mlrit.ac.in/', keywords: 'alumni network graduates connect' },
        { title: 'Careers at MLRIT', description: 'Job openings and careers at MLRIT', url: 'https://mlrit.ac.in/careers/', keywords: 'careers jobs faculty openings recruitment hiring' },
        { title: 'Contact Us', description: 'Contact MLRIT — address, phone, email and location', url: 'https://mlrit.ac.in/contactus/', keywords: 'contact address phone email location map dundigal hyderabad' },
        { title: 'Virtual Tour', description: 'Take a virtual tour of the MLRIT campus', url: 'https://mlrit.ac.in/virtual-tour/', keywords: 'virtual tour campus 360 view' },
        { title: 'MLRIT Chronicles', description: 'Latest news, achievements and events from MLRIT', url: '/pages/chronicles.html', keywords: 'chronicles news achievements events updates latest' },
        { title: 'MLRIT Home', description: 'Marri Laxman Reddy Institute of Technology — official homepage', url: '/', keywords: 'home homepage mlrit main marri laxman reddy' },
    ];

    /**
     * Returns true if ALL words in the query appear somewhere in the text.
     * Also returns true if the full phrase appears as-is (for exact matches).
     */
    function matchesQuery(searchText, q) {
        // Exact phrase match first
        if (searchText.indexOf(q) !== -1) return true;
        // All-words match: every word must appear somewhere in the text
        var words = q.split(/\s+/).filter(function(w) { return w.length > 0; });
        if (words.length < 2) return false;
        return words.every(function(word) { return searchText.indexOf(word) !== -1; });
    }

    /**
     * Resolve a URL — absolute URLs (http/https or starting with /) are returned as-is.
     * Relative URLs get the basePath prepended.
     */
    function resolveUrl(url, basePath) {
        if (!url) return '#';
        if (url.indexOf('http') === 0 || url.charAt(0) === '/') return url;
        return (basePath || '') + url;
    }

    /**
     * Search function
     * @param {string} query - Search query
     * @param {string} basePath - Base path ('/' for root pages, '../' for sub-pages)
     * @returns {Array} Search results
     */
    function search(query, basePath) {
        if (!query || !query.trim()) return [];

        var q = query.toLowerCase().trim();
        var results = [];

        SEARCH_DATA.forEach(function(item) {
            var searchText = (item.title + ' ' + item.description + ' ' + item.keywords).toLowerCase();
            if (matchesQuery(searchText, q)) {
                results.push({
                    title:   item.title,
                    snippet: item.description,
                    url:     resolveUrl(item.url, basePath)
                });
            }
        });

        return results;
    }

    window.StaticSearchData = {
        search: search
    };

})();
