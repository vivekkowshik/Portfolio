document.addEventListener('DOMContentLoaded', () => {
    const hamburg = document.querySelector('.hamburg');
    const cancel = document.querySelector('.cancel');
    const dropdown = document.querySelector('.dropdown');

    // Toggle Dropdown Menu
    hamburg.addEventListener('click', () => {
        dropdown.style.display = 'flex';
        hamburg.style.display = 'none';
    });

    cancel.addEventListener('click', () => {
        dropdown.style.display = 'none';
        hamburg.style.display = 'block';
    });

    // Smooth scroll for internal links
    document.querySelectorAll('.dropdown a, .links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            if (dropdown.style.display === 'flex') {
                dropdown.style.display = 'none';
                hamburg.style.display = 'block';
            }
        });
    });

    // Optional: Close dropdown when clicking outside
    window.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target) && !hamburg.contains(e.target)) {
            dropdown.style.display = 'none';
            hamburg.style.display = 'block';
        }
    });
});
