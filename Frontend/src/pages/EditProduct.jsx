import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error("Error fetching product:", error));
    }, [id]);

    const handleUpdate = (updatedProduct) => {
        fetch(`http://localhost:5000/api/products/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedProduct),
        })
            .then((res) => res.json())
            .then(() => navigate("/")) // Redirect to homepage after update
            .catch((error) => console.error("Error updating product:", error));
    };

    return (
        <div className="max-w-lg mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
            {product ? <ProductForm initialData={product} onSubmit={handleUpdate} /> : <p>Loading...</p>}
        </div>
    );
};

export default EditProduct;
