import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-gray-50 lg:bg-gray-100 mt-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl px-7 mx-auto gap-5">
        
        {/* Brand Section */}
        <div className="w-full">
          <h2 className="text-xl font-bold mb-4 text-green-600">Food Store</h2>
          <p className="text-xs text-gray-600 leading-relaxed font-medium">
            Delivering fresh, organic, and delicious food items directly to your doorstep. Quality you can trust.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <Link href="/" className="mb-2 text-black block text-xs hover:text-green-600 font-medium">Home</Link>
          <Link href="/about" className="mb-2 text-black block text-xs hover:text-green-600 font-medium">About Us</Link>
          <Link href="/products" className="mb-2 text-black block text-xs hover:text-green-600 font-medium">Our Products</Link>
          <Link href="/contact" className="mb-2 text-black block text-xs hover:text-green-600 font-medium">Contact Us</Link>
        </div>

        {/* Categories */}
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <Link href="/products" className="mb-2 text-black block text-xs hover:text-green-600 font-medium">Organic Fruits</Link>
          <Link href="/products" className="mb-2 text-black block text-xs hover:text-green-600 font-medium">Fresh Vegetables</Link>
          <Link href="/products" className="mb-2 text-black block text-xs hover:text-green-600 font-medium">Dairy Products</Link>
          <Link href="/products" className="mb-2 text-black block text-xs hover:text-green-600 font-medium">Bakery Items</Link>
        </div>

        {/* Customer Support */}
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <Link href="/cart" className="mb-2 text-black block text-xs hover:text-green-600 font-medium">Track Order</Link>
          <Link href="/login" className="mb-2 text-black block text-xs hover:text-green-600 font-medium">My Account</Link>
          <Link href="/registration" className="mb-2 text-black block text-xs hover:text-green-600 font-medium">Sign Up</Link>
          <p className="mt-4 text-xs text-gray-500 font-medium">© 2026 Food Store Inc.</p>
        </div>
      </div>
    </footer>
  );
}