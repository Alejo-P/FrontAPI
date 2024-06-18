import { Link } from "react-router-dom"
import DropdownElement from "../components/DropdownElement"

const capitales = {
    "Azuay": "Cuenca",
    "Bolívar": "Guaranda",
    "Cañar": "Azogues",
    "Carchi": "Tulcán",
    "Chimborazo": "Riobamba",
    "Cotopaxi": "Latacunga",
    "El Oro": "Machala",
    "Esmeraldas": "Esmeraldas",
    "Galápagos": "Puerto Baquerizo Moreno",
    "Guayas": "Guayaquil",
    "Imbabura": "Ibarra",
    "Loja": "Loja",
    "Los Ríos": "Babahoyo",
    "Manabí": "Portoviejo",
    "Morona Santiago": "Macas",
    "Napo": "Tena",
    "Orellana": "Francisco de Orellana",
    "Pastaza": "Puyo",
    "Pichincha": "Quito",
    "Santa Elena": "Santa Elena",
    "Santo Domingo de los Tsáchilas": "Santo Domingo",
    "Sucumbíos": "Nueva Loja",
    "Tungurahua": "Ambato",
    "Zamora Chinchipe": "Zamora"
}
const ArrayCapitales = Object.values(capitales).sort()
const RegisterForm = () => {
  return (
    <div className="contenedor-formulario">
        <h1>Registro</h1>
        <form className="formulario">
            <label htmlFor="username">Nombre de usuario</label>
            <input type="username" id="username" name="username" required />
            <label htmlFor="address">Dirección</label>
            <DropdownElement valuesForDropList={ArrayCapitales}/>
            <label htmlFor="email">Correo</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Registrar</button>
        </form>
        <p>¿Ya tienes cuenta?</p>
        <Link to="/login">Iniciar Sesion</Link>
    </div>
  )
}

export default RegisterForm