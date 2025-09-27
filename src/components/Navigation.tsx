import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "glass py-4" : "bg-white py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
              <span
                className={`text-xl font-bold font-playfair ${
                  isScrolled ? "text-black" : "text-blue"
                }`}
              >
                DF
              </span>
            </div>
            <span
              className={`text-2xl font-bold font-playfair ${
                isScrolled ? "text-black" : "text-blue"
              } hidden sm:block`}
            >
              Dishdiya Foundation
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`${
                isScrolled ? "text-black" : "text-blue"
              } hover:text-secondary transition-all duration-300`}
            >
              Home
            </button>
            {/* <button
              onClick={() => scrollToSection("founders")}
              className={`${
                isScrolled ? "text-black" : "text-white"
              } hover:text-secondary transition-all duration-300`}
            >
              Founders
            </button> */}
            {/* <button
              onClick={() => scrollToSection("projects")}
              className={`${
                isScrolled ? "text-black" : "text-white"
              } hover:text-secondary transition-all duration-300`}
            >
              Projects
            </button> */}
            {/* <button
              onClick={() => scrollToSection("mission")}
              className={`${
                isScrolled ? "text-black" : "text-white"
              } hover:text-secondary transition-all duration-300`}
            >
              Mission
            </button> */}
            <Link
              to="/about"
              className={`${
                isScrolled ? "text-black" : "text-blue"
              } hover:text-secondary transition-all duration-300`}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`${
                isScrolled ? "text-black" : "text-blue"
              } hover:text-secondary transition-all duration-300`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`${
                isScrolled ? "text-black" : "text-red"
              } hover:text-secondary transition-all duration-300`}
            >
              Contact
            </Link>
            <Button variant="luxury" size="sm">
              Donate Now
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? "text-black" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-border pt-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className={`${
                  isScrolled ? "text-black" : "text-white"
                } hover:text-secondary transition-colors duration-300 text-left`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("founders")}
                className={`${
                  isScrolled ? "text-black" : "text-white"
                } hover:text-secondary transition-colors duration-300 text-left`}
              >
                Founders
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`${
                  isScrolled ? "text-black" : "text-white"
                } hover:text-secondary transition-colors duration-300 text-left`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("mission")}
                className={`${
                  isScrolled ? "text-black" : "text-white"
                } hover:text-secondary transition-colors duration-300 text-left`}
              >
                Mission
              </button>
              <Link
                to="/about"
                className={`${
                  isScrolled ? "text-black" : "text-white"
                } hover:text-secondary transition-colors duration-300`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/get-involved"
                className={`${
                  isScrolled ? "text-black" : "text-white"
                } hover:text-secondary transition-colors duration-300`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Involved
              </Link>
              <Link
                to="/contact"
                className={`${
                  isScrolled ? "text-black" : "text-white"
                } hover:text-secondary transition-colors duration-300`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button variant="luxury" size="sm" className="w-full">
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
