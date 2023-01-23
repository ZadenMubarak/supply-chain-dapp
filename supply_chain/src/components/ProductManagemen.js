import React, { useState, useEffect } from 'react';
import './ProductManagement.css';
import Modal from 'react-modal';

function ProductManagement() {
  // State to store the product list
  const [products, setProducts] = useState([]);
  // State to store the modal visibility
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // State to store the product being edited
  const [productBeingEdited, setProductBeingEdited] = useState({});
  // State to store the new product
  const [newProduct, setNewProduct] = useState({});

  // Fetch the product list from the backend
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddProduct = () => {
    setModalIsOpen(true);
  }

  const handleEditProduct = (product) => {
    setProductBeingEdited(product);
    setModalIsOpen(true);
  }

  const handleSaveProduct = () => {
    // Save the new/edited product to the backend
    // ...

    // Close the modal
    setModalIsOpen(false);
  }

  const handleDeleteProduct = (product) => {
    // Delete the product from the backend
    // ...

    // Remove the product from the product list
    setProducts(products.filter(p => p !== product));
  }

  return (
    <div className="product-management-container">
      <h1 className="page-title">Product Management</h1>
      <button className="add-product-button" onClick={handleAddProduct}>Add Product</button>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>SKU</th>
            <th>Inventory Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.sku}</td>
              <td>{product.inventory}</td>
              <td>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductManagement;
