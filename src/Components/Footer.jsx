function Footer() {
  return (
    <footer className="bg-gray-100 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo */}
          <h2 className="text-2xl font-bold">
            blink<span className="text-green-600">it</span>
          </h2>

          {/* Links */}
          <div className="flex gap-6 text-gray-600">
            <p>About</p>
            <p>Contact</p>
            <p>Privacy</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-6 pt-4 text-center text-gray-500 text-sm">
          © 2026 Blinkit Clone | Made with React + Tailwind
        </div>
      </div>
    </footer>
  );
}

export default Footer;