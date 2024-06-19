import { useEffect, useState } from 'react'
import IncidentCard from '../components/IncidentCard';
import { useAuth } from '../context/authContext'
import { Link } from "react-router-dom"

const IncidentsPage = () => {
    // Enlace a la API de incidentes
    const URL = "https://taller12-13.onrender.com/api/v1/incidents"
    // Estado para almacenar los incidentes
    const [incidents, setIncident] = useState([])
    const {isAuthenticated} = useAuth()

    // Función para cargar los incidentes
    useEffect(() => {
        const loadData = async() =>{
            const response = await fetch(URL);
            const data = await response.json();
            setIncident(data); // Almacenar los incidentes en el estado
        };
        loadData();

    }, []);
    return (
        <>
            <h1>Incidentes</h1>
            {isAuthenticated ? 
                    <Link to={'/add-incident'} className='buttons'>Añadir Incidente <i className="fa-solid fa-plus"></i></Link> : ""}
            <div className='contenedor-incidentes'>
                {incidents.map(incident => (
                <IncidentCard 
                key={incident._id}
                id={incident._id} 
                type={incident.type} 
                date={incident.date} 
                location={incident.location} 
                description={incident.description} 
                status={incident.status}/>
                ))}
            </div>
        </>
    )
}

export default IncidentsPage