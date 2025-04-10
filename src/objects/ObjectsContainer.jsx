import React, { useState, useEffect } from "react";
import ObjectsView from "./ObjectsVIew";

const ObjectsContainer = () => {                     //ObjectsContainer es un componente funcional
  const [users, setUsers] = useState([]);            //users es un estado que se inicializa como un array vacío
  const [error, setError] = useState(null);          //error es un estado que se inicializa como null

  useEffect(() => {                                  //useEffect se ejecuta después de que el componente se renderiza
    fetch("https://randomuser.me/api/?results=10")   //aca ponemos la url de la API
      .then((response) => {                          //fetch devuelve una promesa
        if (!response.ok) {                          
          throw new Error("Error al obtener los datos de la API"); 
        }
        return response.json();                      //devuele en formato json
      })
      .then((data) => {                              //data es objeto que contiene los datos de la API
        setUsers(data.results);                      //setUsers actualiza el estado users con los datos de la API
      })
      .catch((error) => {                            //catch maneja los errores
        console.error("Error de API:", error);       //muestra el error en la consola
        setError(error.message);                     //setError actualiza el estado error con el mensaje de error
      });
  }, []);

  return <ObjectsView users={users} error={error} />;  //ObjectsView recibe los props users y error
};

export default ObjectsContainer;
