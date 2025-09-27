import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg font-playfair">
                  DF
                </span>
              </div>
              <span className="text-xl font-bold font-playfair">
                Dishdiya Foundation
              </span>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Empowering Sri Lankan communities through sustainable development
              and compassionate action since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/#projects"
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Annual Reports
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary" />
                <span className="text-sm text-primary-foreground/80">
                  27. Palawatte Road
                  <br />
                  Baththaramulla
                  <br />
                  Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-sm text-primary-foreground/80">
                  +94 11 234 5678
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="text-sm text-primary-foreground/80">
                  info@dishdiyafoundation.org
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Subscribe to our newsletter for updates on our projects and
              impact.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="luxury" size="sm" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80 text-center md:text-left">
              © 2025 Dishdiya Foundation. All rights reserved. | Registered
              Charity No: DF/2010/12345
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
