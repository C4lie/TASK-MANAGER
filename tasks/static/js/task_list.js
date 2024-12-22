document.addEventListener('DOMContentLoaded', function() {
    // 1. Smooth loading of tasks
    const taskItems = document.querySelectorAll('.task-item');
    taskItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // 2. Responsive navbar toggle
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarButtons = document.querySelector('.btn-group');
    if (navbarToggle && navbarButtons) {
        navbarToggle.addEventListener('click', () => {
            navbarButtons.classList.toggle('show');
        });
    }

    // 3. Infinite scroll (if needed)
    let isLoading = false;
    window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
            if (!isLoading) {
                loadMoreTasks();
            }
        }
    });

    // 4. Responsive image loading
    const taskImages = document.querySelectorAll('.task-image');
    if ('loading' in HTMLImageElement.prototype) {
        taskImages.forEach(img => {
            img.loading = 'lazy';
        });
    }
}); 