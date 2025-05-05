import { Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-6 w-6" />
              <span className="text-xl font-bold">Brew Haven</span>
            </div>
            <p className="text-amber-200 mb-4">
              Crafting exceptional coffee experiences since 2010.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-amber-200 hover:text-white">Home</a></li>
              <li><a href="#menu" className="text-amber-200 hover:text-white">Menu</a></li>
              <li><a href="#about" className="text-amber-200 hover:text-white">About Us</a></li>
              <li><a href="#contact" className="text-amber-200 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Policies</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white">Refund Policy</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-amber-200 mb-4">
              Subscribe to get updates on new coffee blends and special offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="p-2 rounded-l-md bg-amber-800 border border-amber-700 text-amber-50 focus:outline-none focus:ring-1 focus:ring-amber-500 flex-grow"
              />
              <button 
                type="submit" 
                className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-r-md"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-12 pt-8 text-center text-amber-300">
          <p>&copy; {new Date().getFullYear()} Brew Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}