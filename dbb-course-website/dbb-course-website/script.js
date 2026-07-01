/* ==============================
   DBB COURSE — JAVASCRIPT
   Language Toggle, Animations,
   Maps, Carousel, Interactivity
   ============================== */

// ===== TRANSLATIONS =====
const translations = {
    id: {
        // Navbar
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_programs: "Program",
        nav_location: "Lokasi",
        nav_contact: "Hubungi Kami",

        // Hero
        hero_badge: "Terbukti 20+ Tahun",
        hero_title_1: "The Best Solution",
        hero_title_2: "For Your Study",
        hero_subtitle: "Bimbingan belajar Matematika, Fisika, Kimia & Akuntansi untuk siswa SMP, SMA, Cambridge, dan IB di Surabaya.",
        hero_cta: "Daftar Sekarang",
        hero_cta2: "Lihat Program",
        hero_stat_years: "Tahun Pengalaman",
        hero_stat_students: "Siswa Lulus",

        // About
        about_tag: "Tentang Kami",
        about_title: "Mengapa Memilih <span class=\"highlight\">DBB Course</span>?",
        about_desc: "DBB Course adalah lembaga bimbingan belajar di Surabaya yang telah terbukti selama lebih dari 20 tahun membantu siswa meraih prestasi akademik terbaik.",
        about_math: "Matematika",
        about_math_desc: "Pemahaman konsep dasar hingga advanced. Persiapan ujian nasional, Cambridge, dan IB.",
        about_physics: "Fisika",
        about_physics_desc: "Belajar fisika dengan metode praktikal dan pemahaman mendalam, bukan sekadar hafalan rumus.",
        about_chemistry: "Kimia",
        about_chemistry_desc: "Kuasai kimia dari dasar hingga tingkat lanjut dengan pendekatan yang mudah dipahami.",
        about_accounting: "Akuntansi",
        about_accounting_desc: "Pelajari prinsip akuntansi dengan cara yang terstruktur dan aplikatif.",
        about_h1: "Pede Nilai Rapor Naik",
        about_h2: "Yakin Masuk Uni Pilihan",
        about_h3: "Belajar Jadi FUN!",

        // Programs
        programs_tag: "Program Kami",
        programs_title: "Program Bimbingan Lengkap</span>",
        programs_desc: "Kami menyediakan program bimbingan belajar yang disesuaikan dengan kurikulum dan kebutuhan setiap siswa.",
        programs_popular: "Paling Populer",
        programs_international: "Internasional",
        programs_exclusive: "Eksklusif",
        program_diknas_title: "Kurikulum Diknas",
        program_diknas_desc: "Bimbingan belajar sesuai Kurikulum Merdeka untuk siswa SMP dan SMA. Persiapan ujian sekolah dan seleksi masuk perguruan tinggi.",
        program_diknas_f1: "Matematika, Fisika, Kimia, Akuntansi",
        program_diknas_f2: "Persiapan Ujian Nasional",
        program_diknas_f3: "Persiapan SNBP & SNBT",
        program_cambridge_desc: "Program khusus siswa kurikulum Cambridge. Bimbingan intensif untuk IGCSE, O-Level, dan A-Level dengan tutor berpengalaman.",
        program_cambridge_f1: "Mathematics & Further Maths",
        program_cambridge_f2: "Physics & Chemistry",
        program_cambridge_f3: "Accounting & Economics",
        program_ib_desc: "Dukungan akademik untuk siswa International Baccalaureate Diploma Programme, baik Standard Level maupun Higher Level.",
        program_ib_f1: "Mathematics AA & AI",
        program_ib_f2: "Physics & Chemistry SL/HL",
        program_ib_f3: "Internal Assessment Support",
        program_private_title: "Les Privat",
        program_private_level: "Sesi 1-on-1",
        program_private_desc: "Bimbingan personal satu-satu dengan tutor berpengalaman. Jadwal fleksibel, materi disesuaikan kebutuhan siswa.",
        program_private_f1: "Jadwal fleksibel",
        program_private_f2: "Materi disesuaikan",
        program_private_f3: "Perhatian penuh dari tutor",
        program_cta: "Info Selengkapnya",

        // Location
        loc_tag: "Lokasi",
        loc_title: "Kunjungi Cabang Kami</span>",
        loc_desc: "Kunjungi atau hubungi cabang DBB Course untuk konsultasi langsung.",
        loc_branch1_label: "Cabang Graha",
        loc_branch1_address: "Plaza Graha Famili, blok B No No.21A, Pradahkalikendal, Kec. Dukuhpakis, Surabaya, Jawa Timur 60227",
        loc_hours: "Senin - Sabtu, 13:00 - 21:00",

        // CTA
        cta_title: "Siap Meraih Prestasi Terbaik?",
        cta_desc: "Bergabunglah dengan ribuan siswa yang telah sukses bersama DBB Course. Konsultasikan kebutuhan belajar Anda sekarang — GRATIS!",
        cta_btn: "Konsultasi Gratis via WhatsApp",

        // Footer
        footer_tagline: "The Best Solution For Your Study",
        footer_desc: "Bimbingan belajar terpercaya di Surabaya sejak 2004. Matematika, Fisika, Kimia & Akuntansi untuk semua kurikulum.",
        footer_programs: "Program",
        footer_diknas: "Kurikulum Diknas",
        footer_private: "Les Privat",
        footer_subjects: "Mata Pelajaran",
        footer_math: "Matematika",
        footer_physics: "Fisika",
        footer_chemistry: "Kimia",
        footer_accounting: "Akuntansi",
        footer_contact_title: "Hubungi Kami",
        footer_subjects_list: "MAT • FIS • KIM • AKUN",

        // WhatsApp
        wa_tooltip: "Chat Kami!",
    },
    en: {
        // Navbar
        nav_home: "Home",
        nav_about: "About",
        nav_programs: "Programs",
        nav_location: "Location",
        nav_contact: "Contact Us",

        // Hero
        hero_badge: "Proven 20+ Years",
        hero_title_1: "The Best Solution",
        hero_title_2: "For Your Study",
        hero_subtitle: "Expert tutoring in Mathematics, Physics, Chemistry & Accounting for SMP, SMA, Cambridge, and IB students in Surabaya.",
        hero_cta: "Register Now",
        hero_cta2: "View Programs",
        hero_stat_years: "Years of Experience",
        hero_stat_students: "Graduates",
        hero_scroll: "Scroll down",

        // About
        about_tag: "About Us",
        about_title: "Why Choose <span class=\"highlight\">DBB Course</span>?",
        about_desc: "DBB Course is a leading tutoring institution in Surabaya with over 20 years of proven track record in helping students achieve their best academic results.",
        about_math: "Mathematics",
        about_math_desc: "From fundamental concepts to advanced topics. Preparation for national exams, Cambridge, and IB.",
        about_physics: "Physics",
        about_physics_desc: "Learn physics with practical methods and deep understanding, not just memorizing formulas.",
        about_chemistry: "Chemistry",
        about_chemistry_desc: "Master chemistry from basics to advanced level with an easy-to-understand approach.",
        about_accounting: "Accounting",
        about_accounting_desc: "Learn accounting principles in a structured and applicable way.",
        about_h1: "Confident Grades Will Improve",
        about_h2: "Sure to Enter Dream University",
        about_h3: "Learning is FUN!",

        // Programs
        programs_tag: "Our Programs",
        programs_title: "Complete Tutoring <span class=\"highlight\">Programs</span>",
        programs_desc: "We provide tutoring programs tailored to each student's curriculum and individual needs.",
        programs_popular: "Most Popular",
        programs_international: "International",
        programs_exclusive: "Exclusive",
        program_diknas_title: "National Curriculum",
        program_diknas_desc: "Tutoring aligned with Kurikulum Merdeka for SMP and SMA students. Preparation for school exams and university entrance selection.",
        program_diknas_f1: "Mathematics, Physics, Chemistry, Accounting",
        program_diknas_f2: "National Exam Preparation",
        program_diknas_f3: "SNBP & SNBT Preparation",
        program_cambridge_desc: "Specialized program for Cambridge curriculum students. Intensive tutoring for IGCSE, O-Level, and A-Level with experienced tutors.",
        program_cambridge_f1: "Mathematics & Further Maths",
        program_cambridge_f2: "Physics & Chemistry",
        program_cambridge_f3: "Accounting & Economics",
        program_ib_desc: "Academic support for International Baccalaureate Diploma Programme students, both Standard Level and Higher Level.",
        program_ib_f1: "Mathematics AA & AI",
        program_ib_f2: "Physics & Chemistry SL/HL",
        program_ib_f3: "Internal Assessment Support",
        program_private_title: "Private Tutoring",
        program_private_level: "1-on-1 Session",
        program_private_desc: "Personal one-on-one tutoring with experienced tutors. Flexible schedule, materials tailored to student needs.",
        program_private_f1: "Flexible schedule",
        program_private_f2: "Customized materials",
        program_private_f3: "Full attention from tutor",
        program_cta: "Learn More",

        // Location
        loc_tag: "Location",
        loc_title: "Visit <span class=\"highlight\">Our Branches</span>",
        loc_desc: "We have 2 branches in Surabaya. Please contact or visit the nearest branch to you.",
        loc_branch1_label: "Graha Branch",
        loc_branch1_address: "Graha Family, Surabaya (Replace with full address)",
        loc_hours: "Monday - Saturday, 1:00 PM - 9:00 PM",

        // CTA
        cta_title: "Ready to Achieve Your Best?",
        cta_desc: "Join thousands of students who have succeeded with DBB Course. Consult your learning needs now — FREE!",
        cta_btn: "Free Consultation via WhatsApp",

        // Footer
        footer_tagline: "The Best Solution For Your Study",
        footer_desc: "Trusted tutoring in Surabaya since 2004. Mathematics, Physics, Chemistry & Accounting for all curricula.",
        footer_programs: "Programs",
        footer_diknas: "National Curriculum",
        footer_private: "Private Tutoring",
        footer_subjects: "Subjects",
        footer_math: "Mathematics",
        footer_physics: "Physics",
        footer_chemistry: "Chemistry",
        footer_accounting: "Accounting",
        footer_contact_title: "Contact Us",
        footer_subjects_list: "MATH • PHYS • CHEM • ACC",

        // WhatsApp
        wa_tooltip: "Chat with Us!",
    }
};

// ===== GLOBAL STATE =====
let currentLang = 'id';

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initLanguageToggle();
    initScrollAnimations();
    initCounterAnimation();
    initMaps();
    initSmoothScroll();
});

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu on outside click
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') &&
            !navLinks.contains(e.target) &&
            !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ===== LANGUAGE TOGGLE =====
function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    const langFlag = document.getElementById('langFlag');
    const langCode = document.getElementById('langCode');

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        langFlag.src = currentLang === 'id' ? 'assets/flag-id.png' : 'assets/flag-gb.png';
        langCode.textContent = currentLang === 'id' ? 'ID' : 'EN';
        document.documentElement.lang = currentLang;
        applyTranslations();
    });
}

function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            // Check if the translation contains HTML
            if (translations[currentLang][key].includes('<')) {
                el.innerHTML = translations[currentLang][key];
            } else {
                el.textContent = translations[currentLang][key];
            }
        }
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for elements in grids
                const parent = entry.target.parentElement;
                if (parent) {
                    const siblings = parent.querySelectorAll('[data-animate]');
                    const siblingIndex = Array.from(siblings).indexOf(entry.target);
                    if (siblingIndex > 0) {
                        entry.target.style.transitionDelay = `${siblingIndex * 0.1}s`;
                    }
                }
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}

// ===== COUNTER ANIMATION =====
function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-count]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-count'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    const duration = 2000;
    const startTime = performance.now();
    const startValue = 0;

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out cubic)
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(startValue + (target - startValue) * eased);

        element.textContent = current.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// ===== LEAFLET MAPS =====
function initMaps() {
    // ============================================
    // GANTI KOORDINAT DI BAWAH INI SESUAI LOKASI
    // ============================================

    // DBB Graha - placeholder coordinates (Graha Family area, Surabaya)
    const grahaCoords = [-7.2883, 112.6797];

    // Map style - CartoDB dark theme
    const tileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
    const tileAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>';

    // Custom icon
    const customIcon = L.divIcon({
        className: 'custom-map-marker',
        html: '<div style="background: linear-gradient(135deg, #00C853, #2962FF); width: 32px; height: 32px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3);"><div style="width: 10px; height: 10px; background: white; border-radius: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(45deg);"></div></div>',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    // Map Graha
    try {
        const mapGraha = L.map('mapGraha', {
            scrollWheelZoom: false,
            dragging: !L.Browser.mobile
        }).setView(grahaCoords, 15);

        L.tileLayer(tileUrl, { attribution: tileAttribution }).addTo(mapGraha);

        L.marker(grahaCoords, { icon: customIcon }).addTo(mapGraha)
            .bindPopup('<strong>DBB Graha</strong><br>📞 0858 5370 6006<br><a href="https://wa.me/6285853706006" style="color: #25D366;">Chat WhatsApp</a>');
    } catch (e) {
        console.warn('Map Graha failed to initialize:', e);
    }
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}
