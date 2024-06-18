import { useEffect, useState } from 'react'
import IncidentCard from '../components/IncidentCard';

const IncidentsPage = () => {
    const URL = "http://localhost:3000/api/v1/incidents"
    const [incidents, setIncident] = useState([])

    useEffect(() => {
        const loadData = async() =>{
        const response = await fetch(URL);
        const data = await response.json();
        setIncident(data);
        
        };
        loadData();

    }, []);
    return (
        <>
            <h1>Incidentes</h1>
            <div className='contenedor-incidentes'>
                {incidents.map(incident => (
                <IncidentCard 
                key={incident._id} 
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