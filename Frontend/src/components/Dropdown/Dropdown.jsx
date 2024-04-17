import "./Dropdown.css"
import Select from "react-select";

const dropdown = [
    { label: "Fechas Especiales", value: "Navidad"},
    { label: "Ocasiones Especiales", value: "Agradecimiento"},
]

export const Dropdown = () => {

  const handleSelectChange = ( event ) => {
    console.log(event);
  }

  return (
    <div>
      <h3>ANCHETAS O CESTAS REGALO</h3>
     <div className="dropdown-container">
      <Select
      defaultValue={ { label: "Selecciona una opción", value: "empty" } }
      options={ dropdown }
      onChange={ handleSelectChange }
       />


    
     </div>
    </div>
  )
}


