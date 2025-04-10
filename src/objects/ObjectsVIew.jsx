import React from "react"; 

const ObjectsView = ({ users, error }) => { //objectsView recibe los props users y error
  return (
    <div>
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
              <th>Pais</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>
                  <img src={user.picture.thumbnail} alt="Foto de usuario" /> //muestra la foto del usuario
                </td>
                <td>{`${user.name.first} ${user.name.last}`}</td> //muestra el nombre del usuario
                <td>{user.email}</td> //muestra el email del usuario
                <td>{user.location.country}</td> //muestra el país del usuario
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ObjectsView;
