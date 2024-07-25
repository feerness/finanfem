// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Event listener para el formulario de inicio de sesión
    document.querySelector('.login').addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario
        
        const loginUsername = document.getElementById('loginUsername').value;
        const loginPassword = document.getElementById('loginPassword').value;
        
        // Simula el proceso de inicio de sesión (debes reemplazar esto con la lógica real de autenticación)
        if (loginUsername && loginPassword) {
            console.log('Login:', { username: loginUsername, password: loginPassword });
            alert('¡Inicio de sesión exitoso!');
            window.location.href = 'index.html'; // Redirige a la página principal
        } else {
            alert('Por favor, ingrese tanto el nombre de usuario como la contraseña.');
        }
        
        // Limpia el formulario
        this.reset();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Event listener para el formulario de registro
    document.querySelector('.register').addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario
        
        const registerEmail = document.getElementById('registerEmail').value;
        const registerUsername = document.getElementById('registerUsername').value;
        const registerPassword = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;
        
        // Valida que las contraseñas coincidan
        if (registerPassword !== confirmPassword) {
            alert('¡Las contraseñas no coinciden!');
            return;
        }
        
        // Simula el proceso de registro (debes reemplazar esto con la lógica real de registro)
        if (registerEmail && registerUsername && registerPassword) {
            console.log('Register:', { email: registerEmail, username: registerUsername, password: registerPassword });
            alert('¡Registro exitoso!');
            window.location.href = 'index.html'; // Redirige a la página principal
        } else {
            alert('Por favor, complete todos los campos.');
        }
        
        // Limpia el formulario
        this.reset();
    });
});