const form = document.getElementById('login-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');
    console.log('Username:', username);
    console.log('Password:', password);
});