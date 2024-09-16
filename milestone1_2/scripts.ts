// TypeScript to handle toggling sections
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            const content = document.getElementById(sectionId!);

            if (content!.style.display === 'block') {
                content!.style.display = 'none';
            } else {
                content!.style.display = 'block';
            }
        });
    });
});
