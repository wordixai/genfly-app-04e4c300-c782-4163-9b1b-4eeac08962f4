import { useState } from "react";
import { Menu, X, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-amber-900 text-amber-50 py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Coffee className="h-6 w-6" />
          <span className="text-xl font-bold">Brew Haven</span>
        </div>

        {isMobile ? (
          <>
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-amber-900 p-4 shadow-lg md:hidden">
                <div className="flex flex-col space-y-4">
                  <a href="#home" className="hover:text-amber-200" onClick={toggleMenu}>Home</a>
                  <a href="#menu" className="hover:text-amber-200" onClick={toggleMenu}>Menu</a>
                  <a href="#about" className="hover:text-amber-200" onClick={toggleMenu}>About</a>
                  <a href="#testimonials" className="hover:text-amber-200" onClick={toggleMenu}>Testimonials</a>
                  <a href="#contact" className="hover:text-amber-200" onClick={toggleMenu}>Contact</a>
                  <Button variant="coffee" className="bg-amber-50 text-amber-900 hover:bg-amber-100">Order Now</Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-amber-200">Home</a>
            <a href="#menu" className="hover:text-amber-200">Menu</a>
            <a href="#about" className="hover:text-amber-200">About</a>
            <a href="#testimonials" className="hover:text-amber-200">Testimonials</a>
            <a href="#contact" className="hover:text-amber-200">Contact</a>
            <Button variant="coffee" className="bg-amber-50 text-amber-900 hover:bg-amber-100">Order Now</Button>
          </div>
        )}
      </div>
    </nav>
  );
}