import React from "react";
import { TodoContext } from "./context/todoContext";
import "../css/TodoForm.css"

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('')
  const {
    addTodo,
    setOpenModal,
    openModal,
  } = React.useContext(TodoContext)

  const onChangeTodo = (event) => {
    setNewTodoValue(event.target.value)
  }

  const onCancel = () => {
    setOpenModal(!openModal)
  }

  const onAdd = (event) => {
    event.preventDefault()
    addTodo(newTodoValue)
    setNewTodoValue("")
    setOpenModal(!openModal)
  }

  return (
    <form onSubmit={onAdd}>

      <label>...</label>

      <textarea
        onChange={onChangeTodo}
        value={newTodoValue}
        placeholder="Escribe tu nuevo TODO"
      />

      <div className="TodoForm-buttonContainer">

        <button
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button
          className="TodoForm-button TodoForm-button-add"
          type="submit"
        >
          Agregar
        </button>

      </div>
    </form>
  )
}

export { TodoForm }