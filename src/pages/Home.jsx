import products from "../data/products";
import { Link, useLocation } from "react-router-dom";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default function Home() {
  const q = useQuery().get("q") || "";
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <div>
      <div
        className="h-[340px] bg-cover flex justify-center items-end"
        style={{ backgroundImage: "url('public/hero.jpg')" }}
      >
        <div className="bg-white text-black h-10 w-4/5 mb-6 flex items-center justify-center">
          Big sale — Up to 50% off select items
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Featured products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-lg card-shadow overflow-hidden"
            >
              <Link to={`/product/${p.id}`} className="block p-4">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-contain mb-3"
                />
                <h3 className="font-semibold">{p.title}</h3>
                <div className="mt-2 font-bold text-green-700">${p.price}</div>
              </Link>
              <div className="p-4 border-t">
                <Link
                  to={`/product/${p.id}`}
                  className="bg-[var(--amazon-yellow)] py-2 block text-center rounded"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
