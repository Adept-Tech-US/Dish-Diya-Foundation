import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Calendar, Users, Target } from 'lucide-react';

const timeline = [
  {
    year: '2020',
    title: 'Foundation Established',
    description: 'Dishdiya Foundation was born from a vision to transform Sri Lankan communities.',
  },
  {
    year: '2022',
    title: 'First Community Center',
    description: 'Opened our first community center serving 1,000+ families.',
  },
  {
    year: '2023',
    title: 'Education Initiative Launch',
    description: 'Started comprehensive education programs in rural schools.',
  },
  {
    year: '2023',
    title: 'Clean Water Project',
    description: 'Initiated sustainable water solutions across 10 villages.',
  },
  {
    year: '2024',
    title: 'Healthcare Expansion',
    description: 'Launched mobile medical camps reaching remote areas.',
  },
  {
    year: '2025',
    title: 'Community Gymnasium',
    description: 'Built state-of-the-art fitness facility for public health.',
  },
];

const team = [
  {
    name: 'Dr. Anura Silva',
    role: 'Program Director',
    expertise: 'Community Development',
  },
  {
    name: 'Ms. Kavitha Perera',
    role: 'Operations Manager',
    expertise: 'Project Management',
  },
  {
    name: 'Mr. Ranil Fernando',
    role: 'Finance Director',
    expertise: 'Financial Management',
  },
  {
    name: 'Ms. Nimal Jayawardena',
    role: 'Community Liaison',
    expertise: 'Community Engagement',
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-navy text-white">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-6 animate-fade-in-up">
              About Dishdiya Foundation
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto text-white/90 animate-fade-in-up animation-delay-200">
              A decade of dedication to empowering communities and transforming lives across Sri Lanka
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-primary">
                Our Story
              </h2>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="mb-6">
                  Founded in 2020, Dishdiya Foundation emerged from a simple yet powerful belief, 
                  every community deserves the opportunity to thrive. What began as a small initiative 
                  to support a single village has grown into a comprehensive development organization 
                  touching thousands of lives across Sri Lanka.
                </p>
                <p className="mb-6">
                  Our journey started when our founders witnessed the challenges faced by rural 
                  communities - limited access to education, healthcare, clean water, and recreational 
                  facilities. Rather than accepting these limitations, they envisioned a future where 
                  every Sri Lankan, regardless of their location or background, could access the 
                  resources needed for a dignified life.
                </p>
                <p>
                  Today, Dishdiya Foundation stands as a beacon of hope and progress, having 
                  successfully implemented over 7 major projects, built essential infrastructure 
                  including the community gymnasium that serves over 2,000 people, and created 
                  sustainable solutions that continue to benefit communities long after project completion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-primary">
              Our Journey
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center mb-8 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className="w-1/2 pr-8 text-right">
                      {index % 2 === 0 && (
                        <Card className="p-6 hover:shadow-luxury transition-all inline-block text-left">
                          <div className="text-secondary font-bold mb-2">{item.year}</div>
                          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </Card>
                      )}
                    </div>
                    <div className="relative">
                      <div className="w-4 h-4 bg-secondary rounded-full"></div>
                    </div>
                    <div className="w-1/2 pl-8">
                      {index % 2 !== 0 && (
                        <Card className="p-6 hover:shadow-luxury transition-all inline-block">
                          <div className="text-secondary font-bold mb-2">{item.year}</div>
                          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </Card>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-primary">
              Our Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-luxury transition-all">
                  <div className="w-20 h-20 bg-gradient-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-secondary text-sm mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.expertise}</p>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Achievements */}
        <section className="py-20 bg-gradient-gold">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-primary">
              Our Achievements
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">National Excellence Award</h3>
                <p className="text-sm text-primary/80">
                  Recognized for outstanding community service (2025)
                </p>
              </div>
              <div className="text-center">
                <Target className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">SDG Champion</h3>
                <p className="text-sm text-primary/80">
                  Contributing to UN Sustainable Development Goals
                </p>
              </div>
              <div className="text-center">
                <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">5 Years of Impact</h3>
                <p className="text-sm text-primary/80">
                  Consistent service and growth since 2020
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6 text-primary">
              Join Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Together, we can create lasting change and build a brighter future for Sri Lankan communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="lg">
                Become a Volunteer
              </Button>
              <Button variant="luxury-outline" size="lg">
                Partner With Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;