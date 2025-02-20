import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <div key={product._id} className="border p-4 rounded flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>{product.description}</p>
            <p className="font-bold">${product.price}</p>
          </div>
          <div>
            <button onClick={() => onEdit(product)} className="bg-yellow-500 text-white p-2 rounded mr-2">
              Edit
            </button>
            <button onClick={() => onDelete(product._id)} className="bg-red-500 text-white p-2 rounded">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;