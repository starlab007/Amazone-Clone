import { Link, useNavigate } from 'react-router-dom'
import { FaCrosshairs, FaBars, FaShoppingCart, FaSearch } from 'react-icons/fa'
import { useCart } from '../state/CartContext'
import { useState } from 'react'

export default function Header() {
  const { items } = useCart()
  const navigate = useNavigate()
  const [q, setQ] = useState('')

  function onSearch(e) {
    e.preventDefault()
    navigate('/?q=' + encodeURIComponent(q))
  }

  return (
    <header className="bg-[var(--amazon-dark)] text-white sticky top-0 z-40">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="w-20 hover:opacity-90 transition">
          <img src="/amazon_logo.png" alt="Logo" className="w-full object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-3 px-2 text-sm hover:opacity-90 transition cursor-pointer">
          <FaCrosshairs />
          <div className="leading-4">
            <div className="text-gray-300 text-xs">Deliver to</div>
            <div className="font-bold">Pakistan</div>
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={onSearch} className="flex-1 flex justify-center md:justify-start">
          <div className="header-search bg-[var(--amazon-yellow)] hover:brightness-95 transition">
            <select className="bg-gray-100 text-sm px-2 outline-none hidden md:block text-black cursor-pointer">
              <option>All</option>
            </select>
            <input
              className="text-black"
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search Amazon"
            />
            <button className="w-12 flex items-center justify-center text-xl" aria-label="Search">
              <FaSearch className="text-black" />
            </button>
          </div>
        </form>

        {/* Account & Cart */}
        <div className="hidden md:flex items-center gap-6 ml-4">
          <div className="text-xs hover:text-[var(--amazon-yellow)] transition cursor-pointer">
            <div>Hello, sign in</div>
            <div className="font-bold">Account & Lists</div>
          </div>
          <div className="text-xs hover:text-[var(--amazon-yellow)] transition cursor-pointer">
            <div>Returns</div>
            <div className="font-bold">& Orders</div>
          </div>
        </div>

        <button
          onClick={() => navigate('/cart')}
          className="ml-4 flex items-center gap-2 hover:text-[var(--amazon-yellow)] transition"
        >
          <FaShoppingCart size={22} />
          <span className="font-bold">{items.length}</span>
        </button>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[var(--amazon-nav)] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-6">
          <div className="flex items-center gap-2 hover:underline cursor-pointer">
            <FaBars /> All
          </div>
          <div className="hidden sm:flex gap-6">
            <div className="hover:underline cursor-pointer">Today's Deals</div>
            <div className="hover:underline cursor-pointer">Customer Service</div>
            <div className="hover:underline cursor-pointer">Registry</div>
            <div className="hover:underline cursor-pointer">Gift Cards</div>
            <div className="hover:underline cursor-pointer">Sell</div>
          </div>
          <div className="ml-auto hover:underline cursor-pointer">Shop in Electronics</div>
        </div>
      </nav>
    </header>
  )
}
