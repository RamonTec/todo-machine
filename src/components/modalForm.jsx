import React from "react";
import ReactDOM from "react-dom";
import "../css/modalForm.css"

function ModalForm({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById("modal")
  )
}

export { ModalForm }  