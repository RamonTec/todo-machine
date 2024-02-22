import React from "react";
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