import React from "react";
import { useLocalStorage } from "./userLocalStorage";

const TodoContext = React.createContext()

function TodoProvider(props) {

  const {
    item:todos, 
    saveItem:saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = React.useState("")
  const [openModal, setOpenModal] = React.useState(false)

  let todosCompleted = todos.filter(todo => todo.status).length
  let totalTodos = todos.length

  let searchTodos = []

  if(!searchValue.length >= 1) {
    searchTodos = todos
  } else {
    searchTodos = todos.filter(todo => {
      let allTodos = todo.text.toLowerCase()
      let todosFilters = searchValue.toLowerCase()
      return allTodos.includes(todosFilters)
    })
  }

  const addTodo = (text) => {
    const newTodos = [...todos]

    newTodos.push({
      text: text,
      status: false
    })

    saveTodos(newTodos)
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]

    newTodos[todoIndex].status === true ? newTodos[todoIndex].status = false : newTodos[todoIndex].status = true

    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{
      error,
      loading,
      todosCompleted,
      totalTodos,
      searchValue,
      setSearchValue,
      searchTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}


<TodoContext.Consumer></TodoContext.Consumer>

export { TodoContext, TodoProvider }



