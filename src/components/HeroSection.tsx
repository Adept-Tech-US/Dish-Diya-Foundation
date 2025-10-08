import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "/assets/images/hero-bg.jpg";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <img
          src={heroImage}
          alt="Dishdiya Foundation Community Projects"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 animate-fade-in-up">
            Empowering Communities
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-4 text-gradient-gold">
              Transforming Lives
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 text-white/90">
            Building sustainable futures for Sri Lankan communities through
            education, infrastructure, and compassionate action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button variant="luxury" size="lg">
              Support Our Mission
            </Button>
            <Button variant="glass" size="lg">
              Discover Our Impact
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/70" size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
