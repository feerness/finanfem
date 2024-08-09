import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const history = useHistory();

    const handleLoginSubmit = (event) => {
        event.preventDefault();

        if (loginUsername && loginPassword) {
            console.log('Login:', { username: loginUsername, password: loginPassword });
            alert('¡Inicio de sesión exitoso!');
            history.push('/'); // Redirige a la página principal
        } else {
            alert('Por favor, ingrese tanto el nombre de usuario como la contraseña.');
        }

        // Limpia el formulario
        setLoginUsername('');
        setLoginPassword('');
    };

    return (
        <form className="login" onSubmit={handleLoginSubmit}>
            <input 
                type="text" 
                id="loginUsername" 
                value={loginUsername} 
                onChange={(e) => setLoginUsername(e.target.value)} 
                placeholder="Nombre de usuario"
            />
            <input 
                type="password" 
                id="loginPassword" 
                value={loginPassword} 
                onChange={(e) => setLoginPassword(e.target.value)} 
                placeholder="Contraseña"
            />
            <button type="submit">Iniciar sesión</button>
        </form>
    );
};

const RegisterForm = () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history = useHistory();

    const handleRegisterSubmit = (event) => {
        event.preventDefault();

        if (registerPassword !== confirmPassword) {
            alert('¡Las contraseñas no coinciden!');
            return;
        }

        if (registerEmail && registerUsername && registerPassword) {
            console.log('Register:', { email: registerEmail, username: registerUsername, password: registerPassword });
            alert('¡Registro exitoso!');
            history.push('/'); // Redirige a la página principal 
        } else {
            alert('Por favor, complete todos los campos.');
        }

        // Limpia el formulario
        setRegisterEmail('');
        setRegisterUsername('');
        setRegisterPassword('');
        setConfirmPassword('');
    };

    return (
        <form className="register" onSubmit={handleRegisterSubmit}>
            <input 
                type="email" 
                id="registerEmail" 
                value={registerEmail} 
                onChange={(e) => setRegisterEmail(e.target.value)} 
                placeholder="Correo electrónico"
            />
            <input 
                type="text" 
                id="registerUsername" 
                value={registerUsername} 
                onChange={(e) => setRegisterUsername(e.target.value)} 
                placeholder="Nombre de usuario"
            />
            <input 
                type="password" 
                id="registerPassword" 
                value={registerPassword} 
                onChange={(e) => setRegisterPassword(e.target.value)} 
                placeholder="Contraseña"
            />
            <input 
                type="password" 
                id="registerConfirmPassword" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                placeholder="Confirmar contraseña"
            />
            <button type="submit">Registrar</button>
        </form>
    );
};

const App = () => {
    return (
        <div>
            <h1>Inicio de Sesión</h1>
            <LoginForm />
            <h1>Registro</h1>
            <RegisterForm />
        </div>
    );
};

export default App;