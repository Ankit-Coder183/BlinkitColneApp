import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-3">Categories</h3>
            <p>Groceries</p>
            <p>Snacks</p>
            <p>Dairy</p>
          </div>

          <div>
            <h3 className="font-bold mb-3">Useful Links</h3>
            <p>About</p>
            <p>Contact</p>
            <p>Privacy Policy</p>
          </div>

          <div>
            <h3 className="font-bold mb-3">Download App</h3>
            <button className="bg-black text-white px-4 py-2 rounded mr-2">
              App Store
            </button>
            <button className="bg-black text-white px-4 py-2 rounded">
              Play Store
            </button>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 text-gray-500">
          © 2026 Blinkit Clone
        </div>
      </div>
    </footer>
  );
}

export default Footer;
