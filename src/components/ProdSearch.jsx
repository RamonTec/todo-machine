import React from "react";
import { ProductContext } from "./context/prodContext";

function TodoSearch() {

  const {
    filterProducts,
    filteredProducts,
  } = React.useContext(ProductContext);

  const [isAlimento, setAlimento] = React.useState(false);
  const [isBebida, setBebida] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [isMayor, setOrderMayor] = React.useState(false);

  const onChangeFilter = (event) => {
    setSearchValue(event.target.value);
    filterProducts(isAlimento, isBebida, event.target.value, isMayor);
  }

  const onAlimentoFilterChange = (event) => {
    setAlimento(!isAlimento);
    setBebida(false);
    filterProducts(event.target.checked, false, searchValue);
    console.log('-- product filter alimento:', filteredProducts, searchValue, isMayor);
  };

  const onBebidasFilterChange = (event) => {
    setAlimento(false);
    setBebida(!isBebida);
    filterProducts(false, event.target.checked, searchValue, isMayor);
    console.log('-- product filter bebida:', filteredProducts);
  };

  const onOrderMayorMenor = (event) => {
    setOrderMayor(!isMayor);
    filterProducts(isAlimento, isBebida, searchValue, event.target.checked);
    console.log('-- product filter de mayor a menor:', filteredProducts);
  };

  return (
    <>

      <label className="custom-checkbox">
        <input
          checked={isAlimento}
          type="checkbox"
          onChange={onAlimentoFilterChange}
        />
        <span className="checkmark" style={{color: 'white'}}>Alimentos</span>
      </label>

      <label className="custom-checkbox">
        <input
          className="mycheck"
          checked={isBebida}
          type="checkbox"
          onChange={onBebidasFilterChange}
        />
        <span className="checkmark" style={{color: 'white'}}>Bebidas</span>
      </label>

      <label className="custom-checkbox">
        <input
          className="mycheck"
          checked={isMayor}
          type="checkbox"
          onChange={onOrderMayorMenor}
        />
        <span className="checkmark" style={{color: 'white'}}>Por stock</span>
      </label>

      <input
        onChange={onChangeFilter}
        className="TodoSearch"
        value={searchValue}
        placeholder="Buscar producto"
      />
    </>
  )
}

export { TodoSearch }