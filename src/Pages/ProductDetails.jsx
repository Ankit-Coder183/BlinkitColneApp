import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Product Details</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}

export default ProductDetails;