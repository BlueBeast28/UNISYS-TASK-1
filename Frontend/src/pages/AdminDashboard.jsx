// import React, { useState, useEffect } from 'react';
// import ProductForm from '../components/ProductForm';
// import ProductList from '../components/ProductList';
// import { getProducts, createProduct, updateProduct, deleteProduct } from '../services/api';

// const AdminDashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [editingProduct, setEditingProduct] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await getProducts();
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const handleSubmit = async (product) => {
//     try {
//       if (editingProduct) {
//         await updateProduct(editingProduct._id, product);
//       } else {
//         await createProduct(product);
//       }
//       fetchProducts();
//       setEditingProduct(null);
//     } catch (error) {
//       console.error('Error saving product:', error);
//     }
//   };

//   const handleEdit = (product) => {
//     setEditingProduct(product);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await deleteProduct(id);
//       fetchProducts();
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <h2 className="text-xl font-semibold mb-4">
//             {editingProduct ? 'Edit Product' : 'Add New Product'}
//           </h2>
//           <ProductForm onSubmit={handleSubmit} initialData={editingProduct} />
//         </div>
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Product List</h2>
//           <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../services/api';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSubmit = async (product) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct._id, product);
      } else {
        await createProduct(product);
      }
      fetchProducts();
      setEditingProduct(null);
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = async (id) => {
    try {
      const confirmed = window.confirm('Are you sure you want to delete this product?');
      if (!confirmed) return;

      await deleteProduct(id);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">
            {editingProduct ? 'Edit Product' : 'Add New Product'}
          </h2>
          <ProductForm onSubmit={handleSubmit} initialData={editingProduct} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Product List</h2>
          <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
