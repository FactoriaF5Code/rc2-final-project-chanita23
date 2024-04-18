/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();
const API_URL = "http://localhost:8080/api/product";

const DataProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.post(API_URL)
    .then(response =>{
      console.log('obteniendo')
      if(response.data){
        setProducts(response.data);
      }
    })
    .catch(error =>{
      console.error('error obteniendo productos', error);
    });
  },[]);
  return <DataProductProvider.Provider value={{products}}>{children}</DataProductProvider.Provider>;
};

export {DataProductProvider ,DataContext};
