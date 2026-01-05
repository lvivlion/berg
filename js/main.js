// ========================================
// REUSABLE COMPONENTS - Edit these to update all pages
// ========================================

// Header Component HTML
const headerHTML = `
<!-- Top Bar -->
<div class="top-bar">
    <div class="container top-bar-content">
        <div class="contacts">
            <span class="contact-item"><i class="fas fa-phone-alt"></i> Call Now: 412.788.4545</span>
            <span class="contact-item"><i class="fas fa-envelope"></i> kelli.bergdental@gmail.com</span>
        </div>
        <div class="hours">
            <span><i class="far fa-clock"></i> Mon: 10-6 | Tue: 9-4:30 | Wed: 7:30-2:30 | Thu: 8-4:30</span>
        </div>
    </div>
</div>

<!-- Header -->
<header class="main-header">
    <div class="container nav-container">
        <a href="index.html" class="logo" style="display: flex; align-items: center; gap: 15px;">
            <div style="text-align: left;">
                <div class="logo-text">BERG DENTAL</div>
                <span class="logo-sub">Family & Cosmetic Dentistry</span>
            </div>
            <div style="height: 40px; width: 1px; background-color: #ddd;"></div>
            <div>
                <div class="logo-text">PITTSBURGH CLEAR</div>
                <span class="logo-sub">Aligner Center</span>
            </div>
        </a>

        <nav class="nav-links" id="nav-links">
            <a href="index.html">Home</a>
            <a href="appointment.html">Appointment</a>
            <a href="about-us.html">About Us</a>
            <a href="our-services.html">Services</a>
            <a href="insurance.html">Insurance</a>
            <a href="contactus.html">Contact</a>
        </nav>

        <div class="mobile-toggle">
            <i class="fas fa-bars"></i>
        </div>
    </div>
</header>
`;

// Footer Component HTML
const footerHTML = `
<!-- Footer -->
<footer class="main-footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-col">
                <h4>BERG DENTAL</h4>
                <p style="color: rgba(255,255,255,0.7); margin-bottom: 20px;">
                    Pittsburgh's Clear Aligner Center and trusted family dentistry. We are committed to
                    excellence in every aspect of your dental care.
                </p>
            </div>
            <div class="footer-col">
                <h4>QUICK LINKS</h4>
                <ul style="list-style: none;">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="appointment.html">Book Appointment</a></li>
                    <li><a href="our-services.html">Services</a></li>
                    <li><a href="insurance.html">Insurance</a></li>
                    <li><a href="contactus.html">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>CONTACT US</h4>
                <ul style="list-style: none;">
                    <li style="color: rgba(255,255,255,0.7);"><i class="fas fa-map-marker-alt"
                            style="color:var(--secondary-color); margin-right:10px;"></i> 450 Home Dr,
                        Pittsburgh, PA 15275</li>
                    <li style="color: rgba(255,255,255,0.7);"><i class="fas fa-phone"
                            style="color:var(--secondary-color); margin-right:10px;"></i> 412.788.4545</li>
                    <li style="color: rgba(255,255,255,0.7);"><i class="fas fa-envelope"
                            style="color:var(--secondary-color); margin-right:10px;"></i> kelli.bergdental@gmail.com
                    </li>
                </ul>
            </div>
        </div>
        <div class="copyright">
            &copy; <span id="current-year"></span> Berg Dental. All Rights Reserved.
        </div>
    </div>
</footer>
`;

// ========================================
// COMPONENT INJECTION - Runs on page load
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Inject Header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }

    // Inject Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }

    // Set active nav link based on current page
    let currentPage = window.location.pathname.split('/').pop() || 'index.html';
    // Normalize: remove .html extension for comparison
    const currentPageBase = currentPage.replace('.html', '') || 'index';

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const hrefBase = href.replace('.html', '');
        // Match if either the full href matches or the base names match
        if (href === currentPage || hrefBase === currentPageBase ||
            (currentPageBase === '' && hrefBase === 'index') ||
            (currentPage === '' && hrefBase === 'index')) {
            link.classList.add('active');
        }
    });

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mainNav = document.querySelector('.nav-links');

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileToggle.innerHTML = mainNav.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });
    }

    // Scroll Header Effect
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            } else {
                header.style.boxShadow = 'none';
            }
        });
    }

    // Dynamic Copyright Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
