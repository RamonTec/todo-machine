import React from "react";
import ReactDOM from "react-dom";

function ModalForm({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById("modal")
  )
}

export { ModalForm }  