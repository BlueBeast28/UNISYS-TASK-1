// import React, { useState, useEffect } from 'react';
// import { getProducts } from '../services/api';

// const Home = () => {
//   const [products, setProducts] = useState([]);

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

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Welcome to Our Store</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div key={product._id} className="border p-4 rounded">
//             <h2 className="text-lg font-semibold">{product.name}</h2>
//             <p>{product.description}</p>
//             <p className="font-bold mt-2">${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;



"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getProducts } from '../services/api';

const EnhancedStore = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="min-h-screen bg-cream-100 text-gray-800 flex flex-col items-center">
      <div className="container mx-auto p-6 max-w-6xl">
        <motion.h1 
          className="text-5xl font-extrabold text-center text-blue-600 mb-12 pt-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TechVista Solutions
        </motion.h1>
        <motion.div 
          className="flex flex-wrap justify-center gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {products.map((product) => (
            <motion.div 
              key={product._id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg w-64"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-blue-600">{product.name}</h2>
                <p className="text-gray-600 mt-2 h-20 overflow-hidden">{product.description}</p>
                <p className="text-lg font-bold text-green-600 mt-4">${product.price}</p>
                <motion.button 
                  className="mt-4 w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedStore;
