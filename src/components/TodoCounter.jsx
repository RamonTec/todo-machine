import React from "react";
import "../css/TodoCounter.css"
import { TodoContext } from "./context/todoContext"

function TodoCounter () {
  const {
    todosCompleted,
    totalTodos
  } = React.useContext(TodoContext)

  return (
    <h2 className="TodoCounter">Has completado {todosCompleted} de {totalTodos} todos</h2>
  )
  
}

export { TodoCounter }