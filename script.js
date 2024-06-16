document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.sidebar a');

    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            item.style.color = '#FFD700';
        });

        item.addEventListener('mouseout', function() {
            item.style.color = 'white';
        });
    });
});
