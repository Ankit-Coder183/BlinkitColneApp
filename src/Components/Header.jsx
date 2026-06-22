function Header({ cartCount }) {
  return (
    <header className="w-full bg-yellow-400 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        
        {/* Logo */}
        <div className="text-3xl font-extrabold text-black">
          blink<span className="text-green-600">it</span>
        </div>

        {/* Location */}
        <div className="hidden md:block text-sm text-black">
          <p className="font-bold">Delivery in 10 minutes</p>
          <p className="text-xs">Mirzapur, Uttar Pradesh</p>
        </div>

        {/* Search */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white outline-none"
          />
        </div>

        {/* Login */}
        <button className="font-semibold text-black">
          Login
        </button>

        {/* Cart */}
        <button className="bg-green-600 text-white px-5 py-3 rounded-lg font-semibold">
          Cart ({cartCount})
        </button>
      </div>
    </header>
  );
}

export default Header;