import { useAuth } from '../context/authContext'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const IncidentCard = ({id, type, date, location, description, status}) => {
  const {editIncident ,deleteIncident ,isAuthenticated, errors:submitError} = useAuth()
  
  const onEdit = (e) => {
    e.preventDefault()
    const data = {
      type: e.target.type.value,
      date: e.target.date.value,
      location: e.target.location.value,
      description: e.target.description.value,
      status: e.target.status.value
    }
    try {
      const response = editIncident(id,data)
      if(response){
        alert("Se ha actualizado correctamente")
        window.location.replace('')
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  
  const onDelete = () => {
    try {
      const response = deleteIncident(id)
      if(response){
        alert("Se ha elimando correctamente")
        window.location.replace('')
      }
    
    } catch (error) {
      console.log(error)
    }
  }

  
  return (
    <div className="incident-card" id={id}>
        <h2>{type}</h2>
        <p><strong>Fecha:</strong> {date}</p>
        <p><strong>Ubicacion:</strong> {location}</p>
        <p><strong>Descripcion:</strong> {description}</p>
        <p><strong>Estado:</strong> {status}</p>
        {isAuthenticated ? <div className="signIn-buttons">
          <Popup trigger={<button className="buttons"><i className="fa-solid fa-pencil"></i></button>} modal>
          {submitError.map((error, i) =>(
          <div className='elemento-error' key={i}>
            {error}
          </div>
        ))
        }
        <form className='submit-incident' onSubmit={onEdit}>
            <label htmlFor="type">Tipo de Delito</label>
            <input type="text" id="type" name="type" defaultValue={type} required/>

            <label htmlFor="date">Fecha</label>
            <input type="text" id="date" name="date" defaultValue="01/01/2000" required/>

            <label htmlFor="location">Ubicación</label>
            <input type="text" id="location" name="location" defaultValue={location} required/>

            <label htmlFor="description">Descripción</label>
            <input type="text" id="description" name="description" defaultValue={description} required/>

            <label htmlFor="status">Estado del caso</label>
            <input type="text" id="status" name="status" defaultValue={status} required/>

            <button type="submit">Editar</button>
        </form>
          </Popup>
          <Popup trigger={<button className="buttons"><i className="fa-solid fa-trash"></i></button>} modal>
          {close =>(
            <div className="delete-container">
            <p>¿Estas seguro de eliminar el incidente?</p>
            <div>
              <button onClick={onDelete} className="button-eliminar">Eliminar</button>
              <button onClick={close} >Cancelar</button>
            </div>
          </div>
          )}
            
          </Popup>
          </div> : ""}
    </div>
  )
}

export default IncidentCard