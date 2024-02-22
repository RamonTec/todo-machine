import React from "react";
import { useLocalStorage } from "./userLocalStorage";

const ProductContext = React.createContext()

function ProductProvider(props) {

  const {
    item: products, 
    saveItem: saveProduct,
    loading,
    error
  } = useLocalStorage('PRODUCTOS_V1', []);

  const [openModal, setOpenModal] = React.useState(false);
  const [productId, setProductId] = React.useState("");
  const [isAlimento, setAlimento] = React.useState(false);
  const [isBebida, setBebida] = React.useState(true);

  const [filteredProducts, setFilteredProducts] = React.useState(JSON.parse(localStorage.getItem('PRODUCTOS_V1') || []));

  let totalAlimentos = filteredProducts.filter(product => product.isAlimento).length;
  let totalBebidas = filteredProducts.filter(product => !product.isAlimento).length;
  let totalProducts = filteredProducts.length;

  const filterProducts = (alimento, bebida, searchText, order) => {
    let updatedProducts = filteredProducts;
    
    // Filtrar por nombre si hay un valor en nameFilter
    if (searchText.length >= 1) {
      updatedProducts = updatedProducts.filter(product => {
        let allProducts = product.name.toLowerCase()
        let productFilter = searchText.toLocaleLowerCase()
        return allProducts.includes(productFilter);
      });
    } else {
      updatedProducts = products;
    }

    if (alimento !== false) {
      updatedProducts = updatedProducts.filter(product =>
        product.isAlimento === alimento
      );
    }

    if (bebida !== false) {
      updatedProducts = updatedProducts.filter(product =>
        product.isAlimento !== bebida
      );
    }

    if (order) {
      updatedProducts = updatedProducts.sort((a, b) => a.stock - b.stock); // De menor a mayor
    } else {
      updatedProducts = updatedProducts.sort((a, b) => b.stock - a.stock); // De mayor a menor
    }
    
    setFilteredProducts(updatedProducts);
  };

  const addProduct = (producto) => {
    const newProduct = [...filteredProducts]
    console.log('--- agregar context');
    newProduct.push({
      key: filteredProducts.length + 1,
      name: producto.name,
      isAlimento: producto.isAlimento,
      stock: producto.stock,
    });

    console.log('-- productos add:', newProduct);
    
    saveProduct(newProduct);
    setFilteredProducts(JSON.parse(localStorage.getItem('PRODUCTOS_V1')));
  }

  const openModalToEdit = (key) => {
    setOpenModal(true);
    setProductId(key);
  }

  const editProduct = (productoEditado) => {
    
    const nuevosProductos = filteredProducts.map((producto) => {
      if (producto.key === productoEditado.key) {
        return productoEditado; // Reemplaza el producto antiguo por el editado
      }
      return producto; // Mantiene los productos que no se están editando
    });

    saveProduct(nuevosProductos);
    setFilteredProducts(JSON.parse(localStorage.getItem('PRODUCTOS_V1')));
  }

  const deleteProducto = (name) => {
    const productIndex = filteredProducts.findIndex(product => product.name === name)
    const newProducts = [...filteredProducts]
    newProducts.splice(productIndex,1)
    saveProduct(newProducts);
    setFilteredProducts(JSON.parse(localStorage.getItem('PRODUCTOS_V1')));
  }

  return (
    <ProductContext.Provider value={{
      editProduct,
      error,
      loading,
      totalAlimentos,
      totalProducts,
      totalBebidas,
      addProduct,
      deleteProducto,
      openModal,
      setOpenModal,
      productId,
      setProductId,
      openModalToEdit,
      filterProducts,
      filteredProducts,
      isAlimento, 
      setAlimento,
      setBebida,
      isBebida,
    }}>
      {props.children}
    </ProductContext.Provider>
  )
}


<ProductContext.Consumer></ProductContext.Consumer>

export { ProductContext, ProductProvider }



