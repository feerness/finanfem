
// Manejo de formularios de login y registro
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    console.log('Login:', { username, password });
    closeModal();
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    if (password === confirmPassword) {
        // Aquí puedes agregar tu lógica de registro
        console.log('Register:', { username, password });
        closeModal();
    } else {
        alert('Passwords do not match');
    }
});