import React from 'react';
import '../styles/LangTable.css';

const LangTable = ({ datos }) => {
  return (
    <div className="table-container">
      <table className="language-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Lenguaje</th>
            <th>Tipo</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((dato) => (
            <tr key={dato.id}>
              <td>{dato.id}</td>
              <td>{dato.nombre}</td>
              <td>{dato.tipo}</td>
              <td>{dato.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LangTable;
