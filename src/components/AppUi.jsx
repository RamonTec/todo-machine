import React from "react"
import { TodoCounter } from "./ProdCounter";
import { TodoSearch } from "./ProdSearch"
import { TodoList } from "./ProdList"
import { TodoItem } from "./ProdItem"
import { CreateTodoButton } from "./CreateProdButton"
import { ProductContext } from "./context/prodContext"
import { ModalForm } from "./modalForm"
import { TodoForm } from "./Product"

function AppUi() {

  const {
    error, 
    loading,
    deleteProducto,
    openModal,
    setOpenModal,
    openModalToEdit,
    filteredProducts,
  } = React.useContext(ProductContext);

  return (
    <>
      <TodoCounter/>
      
      <TodoSearch/>
      
      <TodoList>
        {error && <p style={{color:"white"}}>Despierta! Hay un error.</p>}
        {loading && <p style={{color:"white"}}>Estamos cargando, ya estaremos listos.</p>}
        {(!loading && !filteredProducts.length) && <p style={{color:"white"}}> Registra tus productos!</p>}
        {filteredProducts.map(product => (
          <TodoItem 
            key={product.name} 
            text={product.name}
            status={product.isAlimento}
            stock={product.stock}
            onEdit={ () => openModalToEdit(product.key) }
            onDelete={ () => deleteProducto(product.name)}
          />
        ))}
      </TodoList>

      {openModal && (
        <ModalForm>
          <TodoForm />
        </ModalForm>
        )
      }
      
      <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
      
    </>
  )
}

export { AppUi }