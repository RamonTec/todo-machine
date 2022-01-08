import React from "react";
import { AppUi } from "./components/AppUi";
import { TodoProvider } from "./components/context/todoContext"

function App() {

  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  )
    
}

export default App;
