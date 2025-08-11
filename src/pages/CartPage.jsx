import { useCart, useDispatchCart } from "../state/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { items } = useCart();
  const dispatch = useDispatchCart();
  const total = items.reduce((s, i) => s + i.price * i.qty, 0).toFixed(2);
  if (items.length === 0)
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/" className="text-blue-600">
          Continue shopping
        </Link>
      </div>
    );
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white p-4 rounded-lg"
          >
            <img src={item.image} className="w-28 h-24 object-contain" />
            <div className="flex-1">
              <div className="font-semibold">{item.title}</div>
              <div className="text-gray-600">Qty: {item.qty}</div>
            </div>
            <div className="text-right">
              <div className="font-bold">
                ${(item.price * item.qty).toFixed(2)}
              </div>
              <button
                onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
                className="text-red-600 mt-2"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <div className="text-xl font-bold">Total: ${total}</div>
        <button
          onClick={() => dispatch({ type: "CLEAR" })}
          className="mt-3 bg-[var(--amazon-yellow)] px-6 py-2 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
