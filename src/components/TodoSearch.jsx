import React from "react";
import "../css/TodoSearch.css"
import { TodoContext } from "./context/todoContext"

function TodoSearch() {

  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext) 

  const onChangeFilter = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <input
        onChange={onChangeFilter}
        className="TodoSearch"
        value={searchValue}
        placeholder="Buscar tarea"
      />
    </>
  )
}

export { TodoSearch }