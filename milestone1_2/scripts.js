// TypeScript to handle toggling sections
document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.toggle-btn');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var sectionId = button.getAttribute('data-section');
            var content = document.getElementById(sectionId);
            if (content.style.display === 'block') {
                content.style.display = 'none';
            }
            else {
                content.style.display = 'block';
            }
        });
    });
});
