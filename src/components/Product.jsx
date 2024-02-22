import React, { useEffect } from "react";
import { ProductContext } from "./context/prodContext";

function TodoForm() {
  const [nameProducto, setNameProducto] = React.useState('');
  const [alimentoProducto, setAlimento] = React.useState(false);
  const [cantidadProducto, setCantidad] = React.useState(0);

  const {
    addProduct,
    setOpenModal,
    openModal,
    productId,
    setProductId,
    filteredProducts,
    editProduct,
  } = React.useContext(ProductContext);

  useEffect(() => {
    if (productId) {
      const findProductByKey = filteredProducts.filter(product => product.key === productId);
      if (findProductByKey) {
        setNameProducto(findProductByKey[0].name);
        setAlimento(findProductByKey[0].isAlimento);
        setCantidad(findProductByKey[0].stock);
      }
    }
  }, [productId, filteredProducts]);

  const onChangeNameProducto = (event) => {
    setNameProducto(event.target.value)
  }

  const onchangeCantidad = (event) => {
    setCantidad(event.target.value)
  }

  const onChangeAlimento = () => {
    setAlimento(!alimentoProducto);
  }

  const onCancel = () => {
    if (productId) {
      setAlimento(false);
      setNameProducto('');
      setProductId('');
      setCantidad(0);
    }
    setOpenModal(!openModal);
  }

  const onAdd = (event) => {
    
    event.preventDefault();

    const newProduct = {
      name: nameProducto,
      isAlimento: alimentoProducto,
      stock: cantidadProducto,
    };

    addProduct(newProduct);
    setNameProducto("");
    setAlimento(false);
    setCantidad(0);
    setProductId('');
    setOpenModal(!openModal);
  }

  const onEdit = (event) => {
    
    event.preventDefault();

    const oldProduct = {
      key: parseInt(productId),
      name: nameProducto,
      isAlimento: alimentoProducto,
      stock: cantidadProducto,
    };

    editProduct(oldProduct);

    setNameProducto("");
    setAlimento(false);
    setCantidad(0);
    setProductId('');
    setOpenModal(!openModal);
  }

  return (
    <form onSubmit={ productId === '' ? onAdd : onEdit }>

      <label>...</label>

      <input
        className="styled-input"
        onChange={onChangeNameProducto}
        value={nameProducto}
        placeholder="Registrar producto nuevo"
      />

      <input
      className="styled-input"
        onChange={onchangeCantidad}
        value={cantidadProducto}
        placeholder="Cantidad"
        type="number"
      />

      <label style={{color:"black"}}>
        <input 
        onChange={onChangeAlimento}
        value="Producto"
        checked={alimentoProducto}
        placeholder="Producto" type="checkbox" label="Alimento" name="Alimento" id="" />
        Alimento
      </label>

      <div className="TodoForm-buttonContainer">

        <button
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button
          className="TodoForm-button TodoForm-button-add"
          type="submit"
        >
          { productId !== '' && 'Editar' }
          { productId === '' && 'Agregar' }
        </button>

      </div>
    </form>
  )
}

export { TodoForm }