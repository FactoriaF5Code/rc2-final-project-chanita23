import  { useState } from "react";
import Select from "react-select";
import { useFetch } from "./useFetch";
import "./Dropdown.css";


export const Dropdown = () => {
  const dropdownOptions = [
    { label: "Fechas Especiales", value: "Navidad" },
    { label: "Ocasiones Especiales", value: "Agradecimiento" },
  ];

  const { data } = useFetch("http://localhost:8080/api/product");
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = data?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectChange = (selectedOption) => {
    console.log(selectedOption);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: 300,
    }),
  };

  return (
    <div className="dropdown-container">
      <Select
        defaultValue={{ label: "Selecciona una opción", value: "empty" }}
        options={dropdownOptions}
        onChange={handleSelectChange}
        onInputChange={handleSearchChange}
        isSearchable
        placeholder="Buscar o seleccionar una opción"
        styles={customStyles}
      />
      <div className="searchContainer">
        <input
          className="searchInput"
          type="search"
          placeholder="Buscar..."
          onChange={handleSearchChange}
        />
      
      </div>
      <div className="products">
        {filteredData?.map((product) => (
          <div key={product.id}>
            <section className="containerImg">
              <div>
                <img src={product.img} alt={product.name}></img>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};


