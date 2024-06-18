import { Link } from 'react-router-dom'
const LoginForm = () => {
  return (
    <div className="contenedor-formulario">
      <h1>Login</h1>
      <form className="formulario">
        <label htmlFor="email">Correo</label>
        <input type="email" id="email" name="email" required/>
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" required/>
        <button type="submit">Iniciar Sesion</button>
      </form>
      <p>¿No tienes cuenta?</p>
      <Link to="/register">Registrate aqui!</Link>
    </div>
  )
}

export default LoginForm