document.addEventListener('DOMContentLoaded', function () {
    // Example: Handle form submission (for creating or editing tasks)
    const taskForm = document.querySelector('#task-form');
    if (taskForm) {
        taskForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Get form data
            const formData = new FormData(taskForm);
            const taskData = {
                title: formData.get('title'),
                description: formData.get('description'),
                due_date: formData.get('due_date'),
            };

            // Determine if this is a create or update request
            const taskId = taskForm.dataset.taskId;
            const url = taskId
                ? `/tasks/${taskId}/edit/`  // Update task URL
                : '/tasks/new/';            // Create task URL

            const method = taskId ? 'PUT' : 'POST';

            fetch(url, {
                method: method,
                body: JSON.stringify(taskData),
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log('Task saved:', data);
                // Redirect or update UI after task is saved
                window.location.href = '/tasks/';
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    // Handle task deletion
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            const taskId = event.target.dataset.taskId;

            if (confirm('Are you sure you want to delete this task?')) {
                fetch(`/tasks/${taskId}/delete/`, {
                    method: 'DELETE',
                    headers: {
                        'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
                    }
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Task deleted:', data);
                    event.target.closest('li').remove();  // Remove task from the list
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }
        });
    });
});

        