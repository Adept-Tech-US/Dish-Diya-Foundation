import { useEffect, useRef } from "react";
import { Card } from "./ui/card";
import founder1 from "../assets/DishanDias.jpeg";
import founder2 from "@/assets/images/founder-2.jpeg";

const founders = [
  {
    name: "Mr. Dishan Dias",
    title: "Founder",
    image: founder1,
    bio: "Dishan Dias is a driven student-athlete whose journey reflects both academic commitment and entrepreneurial vision. A proud graduate of Archbishop Mitty High School, Dishan continued his education at Long Beach before pursuing his studies at San Jose State University.Beyond academics, Dishan has demonstrated leadership and initiative through his involvement in meaningful projects in Sri Lanka, where he has been engaged in community development and giving back to his roots. One of his standout initiatives includes the creation of a weight training and fitness center, designed to empower young athletes and provide opportunities for strength training and wellness in underserved communities.Dishan’s passion for sports and fitness has been a constant throughout his journey. His experience in athletics and his commitment to weight training have shaped not only his personal discipline but also his ability to inspire and guide others toward healthier lifestyles. With a vision that blends education, athletics, and social impact, Dishan continues to expand his horizons and make a lasting difference both locally and internationally.",
  },
  {
    name: "Miss. Diyanka Dias",
    title: "Co-Founder",
    image: founder2,
    bio: "Diyanka Dias is a 15-year-old sophomore at Archbishop Mitty High School, where she excels both in academics and athletics. She is a member of the varsity water polo team and also contributes to the school’s swimming program. Outside of school, Diyanka plays club water polo with Pacific Valley Premier on the under-18 team, where she played to compete in the 2025 Junior Olympics. Driven and competitive, she is passionate about growing as an athlete while balancing her academic and extracurricular commitments.",
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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
