import React, { useState, useEffect, useRef } from 'react';
import './ProductManagement.css';
import { ListComponent } from './ListComponent';
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

  const [components, setComponents] = useState([]); 

  const prodctRef = useState([]);
  const skuRef = useRef(null);
  const invetoryRef = useState([]);
  const actionRef = useRef(null);


  const [updated, setUpdated] = useState('');
  const [updated1, setUpdated1] = useState('');
  const [updated2, setUpdated2] = useState('');
  const [updated3, setUpdated3] = useState('');
  

  const handleAddProduct = () => {
    setUpdated(prodctRef.current.value);
    setUpdated1(skuRef.current.value);
    setUpdated2(invetoryRef.current.value);
    setUpdated3(actionRef.current.value);
    // setUpdated2(invetoryRef.current.value);
    setComponents([...components, "Sample Component"]) 
    setModalIsOpen(true);
  }

  return (
    <div className="product-management-container">
      <h1 className="page-title">Product Management</h1>
      <button className="add-product-button" onClick={handleAddProduct }>Add Product</button>
      <table>
        <thead>
          <div>
            <input placeholder='product' ref={prodctRef} className='pref'/>
            <input placeholder='sku' ref={skuRef} className='sref'/>
            <input placeholder='Inventory level' ref={invetoryRef} className='iref'/>
            <input placeholder='Actions' ref={actionRef} className='aref' />

          </div>
          
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
      <br/>
      {components.map((item, i) => ( <ListComponent text={updated} sku={updated1} inv={updated2} act={updated3}/> ))} 
    </div>
  );
}

export default ProductManagement;
