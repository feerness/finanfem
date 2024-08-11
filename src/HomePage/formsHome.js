import React from "react";
import "./formsHome.css";

const Saludo = () => {
  return (
    <div className="Img-Register">
    <p></p>
      <div className="overlay-text">
        <p></p>
      </div>
    </div>
  );
};

const RegisterForm = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    if (registerPassword !== confirmPassword) {
      alert("¡Las contraseñas no coinciden!");
      return;
    }

    if (registerEmail && registerUsername && registerPassword) {
      console.log("Register:", {
        email: registerEmail,
        username: registerUsername,
        password: registerPassword,
      });
      alert("¡Registro exitoso!");
      history.push("/"); // Redirige a la página principal
    } else {
      alert("Por favor, complete todos los campos.");
    }

    // Limpia el formulario
    setRegisterEmail("");
    setRegisterUsername("");
    setRegisterPassword("");
    setConfirmPassword("");
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

const CajaR = () => {
  return (
      <div>
          <h1></h1>
          <Saludo />
          <h1>Registrate</h1>
          <RegisterForm />
      </div>
  );
};

export default CajaR;