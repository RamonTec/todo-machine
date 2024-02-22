import React from "react";
import { ProductContext } from "./context/prodContext";

function TodoCounter () {
  const {
    totalProducts,
    totalBebidas,
    totalAlimentos
  } = React.useContext(ProductContext)

  return (
    <>
      <h2 className="TodoCounter">Total productos: {totalProducts}</h2>
      <h2 className="TodoCounter">Total alimentos: {totalAlimentos}</h2>
      <h2 className="TodoCounter">Total bebidas: {totalBebidas}</h2>
    </>
  );
}

export { TodoCounter }