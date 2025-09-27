import { useEffect, useRef } from "react";
import { Card } from "./ui/card";
import founder1 from "@/assets/images/founder-1.jpg";
import founder2 from "@/assets/images/founder-2.jpg";

const founders = [
  {
    name: "Mr. Dishan Dias",
    title: "Founder",
    image: founder1,
    bio: "A visionary leader with over 3 years of experience in community development, Mr. Dias established Dishdiya Foundation with a mission to create lasting positive change in Sri Lankan communities.",
  },
  {
    name: "Miss. Diyanka Dias",
    title: "Co-Founder",
    image: founder2,
    bio: "With a background in social work and education, Miss. Dias brings invaluable expertise in program development and community engagement, ensuring our initiatives create meaningful impact.",
  },
];

const FoundersSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".founder-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="founders" ref={sectionRef} className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Our Founders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the visionary leaders behind Dishdiya Foundation's mission to
            transform communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {founders.map((founder, index) => (
            <Card
              key={index}
              className="founder-card opacity-0 hover:shadow-luxury transition-all duration-500 overflow-hidden group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-2">
                  {founder.name}
                </h3>
                <p className="text-secondary font-semibold mb-4">
                  {founder.title}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
