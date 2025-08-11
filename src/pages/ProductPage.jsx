import { useParams } from "react-router-dom";
import products from "../data/products";
import { useDispatchCart } from "../state/CartContext";
export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const dispatch = useDispatchCart();
  if (!product) return <div className="p-8">Product not found</div>;
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg">
          <img
            src={product.image} alt={product.title}
            className="w-full h-96 object-contain"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-xl text-green-700 font-semibold mt-4">
            ${product.price}
          </p>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
            nobis.
          </p>
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => dispatch({ type: "ADD", payload: product })}
              className="bg-[var(--amazon-yellow)] px-6 py-2 rounded"
            >
              Add to Cart
            </button>
            <button className="border px-6 py-2 rounded">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
