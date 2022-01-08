import React from "react";
import  "../css/TodoItem.css"

function TodoItem ({ onComplete, onDelete, completed, text }) {

  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onComplete}  
      >
        {completed ? "√" : "-"}
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={onDelete}
      >
        X
      </span>
    </li>
  )
}

export { TodoItem }