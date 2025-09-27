import { Heart, Users, Target, Globe } from 'lucide-react';
import { Card } from './ui/card';

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We believe in treating every individual with dignity, respect, and empathy.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building strong, self-sustaining communities through collaborative efforts.',
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'Creating measurable, lasting change that transforms lives for generations.',
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description: 'Implementing eco-friendly solutions that preserve our planet for the future.',
  },
];

const stats = [
  { number: '10,000+', label: 'Lives Impacted' },
  { number: '7+', label: 'Active Projects' },
  { number: '10+', label: 'Partner Organizations' },
  { number: '3', label: 'Districts Covered' },
];

const MissionSection = () => {
  return (
    <section id="mission" className="py-20 bg-gradient-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white/90">
            To empower Sri Lankan communities through sustainable development, 
            education, and infrastructure projects that create lasting positive change 
            and improve quality of life for all.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 mb-16 border border-white/20">
          <h3 className="text-3xl font-playfair font-bold mb-4 text-center text-gradient-gold">
            Our Vision
          </h3>
          <p className="text-lg text-center max-w-3xl mx-auto text-white/90">
            A Sri Lanka where every community has access to quality education, 
            healthcare, clean water, and opportunities for sustainable growth, 
            enabling all citizens to reach their full potential.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <value.icon className="w-12 h-12 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-semibold mb-2 text-white">{value.title}</h4>
              <p className="text-white/80 text-sm">{value.description}</p>
            </Card>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                {stat.number}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;