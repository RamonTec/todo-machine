import React from "react"
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch"
import { TodoList } from "./TodoList"
import { TodoItem } from "./TodoItem"
import { CreateTodoButton } from "./CreateTodoButton"
import { TodoContext } from "./context/todoContext"
import { ModalForm } from "./modalForm"
import { TodoForm } from "./TodoForm"

function AppUi() {

  const {
    error, 
    loading, 
    searchTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)
  return (
    <>
      <TodoCounter/>
      
      <TodoSearch/>
      
      <TodoList>
        {error && <p style={{color:"white"}}>Despierta! Hay un error.</p>}
        {loading && <p style={{color:"white"}}>Estamos cargando, ya estaremos listos.</p>}
        {(!loading && !searchTodos.length) && <p style={{color:"white"}}> Crea tu primer todo!</p>}
        {searchTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.status}
            onComplete={ () => completeTodo(todo.text) }
            onDelete={ () => deleteTodo(todo.text) }
          />
        ))}
      </TodoList>

      {openModal && (
        <ModalForm>
          <TodoForm />
        </ModalForm>
        )
      }
      
      <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
      
    </>
  )
}

export { AppUi }