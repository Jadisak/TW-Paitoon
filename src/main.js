document.addEventListener("DOMContentLoaded", function() {
    // Function to load a component
    const loadComponent = (selector, url, callback) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector(selector).innerHTML = data;
                if (callback) callback();
            })
            .catch(error => console.error(`Error loading ${url}:`, error));
    };

    // Highlight the active navigation link
    const highlightActiveLink = () => {
        const currentPage = window.location.pathname.split('/').pop();
        const targetPage = currentPage === '' ? 'index.html' : currentPage;

        // For both desktop and mobile nav
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            if (linkPage === targetPage) {
                link.classList.add('font-extralight', 'text-lime-800');
                link.classList.remove('text-green-500');
            }
        });
    };

    // Load header and then highlight the active link
    loadComponent('#header-placeholder', '_header.html', () => {
        highlightActiveLink();
    });

    // Load footer
    loadComponent('#footer-placeholder', '_footer.html');
});