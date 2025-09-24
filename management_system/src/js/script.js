document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu-button');
    const content = document.getElementById('content');

    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const page = button.getAttribute('data-page');
            fetch(`src/pages/${page}.html`)
                .then(response => response.text())
                .then(html => {
                    content.innerHTML = html;
                })
                .catch(error => {
                    content.innerHTML = `<p>Error loading page: ${page}.html</p>`;
                    console.error('Error fetching page:', error);
                });
        });
    });
});
