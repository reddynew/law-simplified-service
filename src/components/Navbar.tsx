
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Services
            </a>
            <a href="#expertise" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Areas of Expertise
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Testimonials
            </a>
            <Button variant="outline" className="text-black border-black hover:bg-black hover:text-white">
              Login
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800">
              Sign Up
            </Button>
          </nav>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-in">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-sm font-medium px-4 py-2 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#expertise" 
                className="text-sm font-medium px-4 py-2 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Areas of Expertise
              </a>
              <a 
                href="#testimonials" 
                className="text-sm font-medium px-4 py-2 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="text-black border-black hover:bg-black hover:text-white w-full">
                  Login
                </Button>
                <Button className="bg-black text-white hover:bg-gray-800 w-full">
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
