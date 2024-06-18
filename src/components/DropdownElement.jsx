import React, { useState } from 'react'

const DropdownElement = ({ valuesForDropList }) => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(valuesForDropList[0])
  return (
    <select className='lista-desplegable' onChange={(e) => setOpcionSeleccionada(e.target.value)}>
        <option value="" disabled>Selecciona una opcion</option>
        {valuesForDropList.map((value, index) => (
        <option key={index} value={value}>{value}</option>
        ))}
    </select>
  )
}

export default DropdownElement