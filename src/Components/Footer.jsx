function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Categories */}
          <div>
            <h3 className="font-bold mb-3 text-lg">Categories</h3>
            <p>Fruits</p>
            <p>Vegetables</p>
            <p>Dairy</p>
            <p>Snacks</p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold mb-3 text-lg">Useful Links</h3>
            <p>About Us</p>
            <p>Contact</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>

          {/* Download App */}
          <div>
            <h3 className="font-bold mb-3 text-lg">Download App</h3>

            <button className="bg-black text-white px-4 py-2 rounded mr-2">
              App Store
            </button>

            <button className="bg-black text-white px-4 py-2 rounded mt-2 md:mt-0">
              Play Store
            </button>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 text-gray-500 text-center">
          © 2026 AkkiMart. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;