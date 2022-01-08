import React from "react";
import "../css/CreateTodoButton.css"

function CreateTodoButton (props) {
  let onClickButton = () => {
    props.setOpenModal(!props.openModal)
  }
  return (
    <button 
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  )
}

export { CreateTodoButton }