import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Heart, Users, Calendar, HandHeart, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const opportunities = [
    {
      icon: Heart,
      title: 'Donate',
      description: 'Your financial support helps us reach more communities and create lasting change.',
      action: 'Make a Donation'
    },
    {
      icon: Users,
      title: 'Volunteer',
      description: 'Join our team of dedicated volunteers and make a direct impact in communities.',
      action: 'Sign Up to Volunteer'
    },
    {
      icon: Calendar,
      title: 'Organize Events',
      description: 'Help us organize fundraising events and awareness campaigns in your area.',
      action: 'Become an Organizer'
    },
    {
      icon: HandHeart,
      title: 'Corporate Partnership',
      description: 'Partner with us for CSR initiatives and employee volunteer programs.',
      action: 'Explore Partnership'
    },
    {
      icon: Globe,
      title: 'Spread the Word',
      description: 'Share our mission on social media and help us reach more supporters.',
      action: 'Share Our Story'
    },
    {
      icon: Award,
      title: 'Monthly Giving',
      description: 'Become a monthly donor and provide sustainable support for our programs.',
      action: 'Join Monthly Donors'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
        <div className="container mx-auto px-6 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-4">
            Get Involved
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join us in creating positive change. Every contribution, big or small, makes a difference in someone's life.
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-playfair font-bold text-primary text-center mb-12">
            Ways You Can Help
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <Card key={index} className="hover:shadow-luxury transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="text-primary-foreground" size={24} />
                    </div>
                    <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {opportunity.description}
                    </p>
                    <Button variant="luxury" className="w-full">
                      {opportunity.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold text-primary text-center mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Fill out the form below and we'll connect you with the right opportunity
            </p>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="+94 77 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Area of Interest *</label>
                    <select
                      required
                      className="w-full px-3 py-2 border border-input bg-background rounded-md"
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    >
                      <option value="">Select an area</option>
                      <option value="education">Education</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="infrastructure">Infrastructure</option>
                      <option value="fundraising">Fundraising</option>
                      <option value="events">Events</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us about your skills, availability, and how you'd like to help..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <Button type="submit" variant="luxury" size="lg" className="w-full">
                  Submit Application
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-playfair font-bold text-primary text-center mb-12">
            Your Impact So Far
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '500+', label: 'Active Volunteers' },
              { number: '₨10M+', label: 'Funds Raised' },
              { number: '50+', label: 'Projects Completed' },
              { number: '100K+', label: 'Lives Impacted' }
            ].map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <h3 className="text-4xl font-bold text-secondary mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;