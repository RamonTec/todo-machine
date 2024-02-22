import React from "react";
import { AppUi } from "./components/AppUi";
import { ProductProvider } from "./components/context/prodContext"

function App() {

  return (
    <ProductProvider>
      <AppUi />
    </ProductProvider>
  )
    
}

export default App;
