import React, { useState, useEffect } from "react";
import "./App.css";

const UsersTable = () => { //constante que guarda la tabla de usuarios
  const [users, setUsers] = useState([]); // para guardar los usuarios
  const [error, setError] = useState(null); // para manejar errores

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10") //la api que elegi
      .then((response) => { 
        if (!response.ok) {     // si la respuesta no es correcta
          throw new Error("Error al obtener los datos de la API"); //muestra un error
        }
        return response.json(); // devuelve en formato JSON
      })
      .then((data) => { //guarda los datos de mi estado
        setUsers(data.results); //los resultados de la api
      })
      .catch((error) => { //si hay un error
        console.error("Error de API:", error); //nos muenstra el eorror
        setError(error.message); //guarda el error en el estado
      });
  }, []);

  return (
    <div>
      <h2>Hugo Lucero TP-agus-api</h2>
      <h1>Lista de los usuarios</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Foto</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>País</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => ( //mapea los usuarios para mostrarlos en la tabla
              <tr key={index}>
                <td>
                  <img src={user.picture.thumbnail} alt="Foto de usuario" />
                </td>
                <td>{`${user.name.first} ${user.name.last}`}</td>
                <td>{user.email}</td>
                <td>{user.location.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersTable; //exporta la tabla de usuarios
