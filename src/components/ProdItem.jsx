import React from "react";

function TodoItem ({ onDelete, status, text, stock, onEdit }) {

  return (
    <li className="contenedor">

      <p>
        {text}
      </p>

      <p>
        {stock}
      </p>

      {!status && <p>Bebida</p>}
      {status && <p>Alimento</p>}

      <div className="elemento-div">
        <span 
          className="Icon-delete"
          onClick={onDelete}
        >
          X
        </span>

        <span
          className="Icon-update"
          onClick={onEdit}
        >
          Editar
        </span>
      </div>

    </li>
  )
}

export { TodoItem }