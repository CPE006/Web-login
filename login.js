document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.f1');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.querySelector('.user').value;
        const password = document.querySelector('.pass').value;
        
        // Add your login logic here
        if (username === 'admin' && password === 'admin') {
            alert('Login successful');
        } else {
            alert('Invalid username or password');
        }
    });
});
