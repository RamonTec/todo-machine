import React from "react";

function TodoList (props) {
  return (
    <section>
      <ul className="listTodo">
        {props.children}
      </ul>
    </section>
  )
}

export { TodoList }