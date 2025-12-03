import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageSquare, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-navy text-white">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-6 animate-fade-in-up">
              Get In Touch
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto text-white/90 animate-fade-in-up animation-delay-200">
              We'd love to hear from you. Whether you want to volunteer, donate,
              or learn more about our work, we're here to help.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="p-8 shadow-luxury">
                <h2 className="text-3xl font-playfair font-bold mb-6 text-primary">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Snow"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.snow@outlook.com"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+94 77 123 4567"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="luxury"
                    size="lg"
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>

              <div className="space-y-6">
                <Card className="p-6 hover:shadow-luxury transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-gold rounded-full">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                      <p className="text-muted-foreground">
                        27. Palawatte Road
                        <br />
                        Baththaramulla
                        <br />
                        Sri Lanka
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-luxury transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-gold rounded-full">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                      <p className="text-muted-foreground">
                        Main Office: +94 11 234 5678
                        <br />
                        Mobile: +94 77 890 1234
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-luxury transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-gold rounded-full">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                      <p className="text-muted-foreground">
                        General: info@dishdiyafoundation.org
                        <br />
                        Donations: donate@dishdiyafoundation.org
                        <br />
                        Volunteer: volunteer@dishdiyafoundation.org
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-luxury transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-gold rounded-full">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Office Hours
                      </h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-primary">
              Find Us
            </h2>
            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden shadow-luxury">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d355.3534419412071!2d79.93131313599396!3d6.885898143658027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae250bb3bfce1e3%3A0xf28541a06b6b758c!2sVWPJ%2B8H8!5e0!3m2!1sen!2slk!4v1756563135881!5m2!1sen!2slk"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-primary">
              Quick Contact Options
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* <Card className="p-6 text-center hover:shadow-luxury transition-all cursor-pointer group">
                <MessageSquare className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Chat with our team in real-time
                </p>
                <Button variant="luxury-outline" size="sm" className="w-full">
                  Start Chat
                </Button>
              </Card> */}

              <Card className="p-6 text-center hover:shadow-luxury transition-all cursor-pointer group">
                <Phone className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Schedule a Call</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Book a time to speak with us
                </p>
                <Button variant="luxury-outline" size="sm" className="w-full">
                  Book Now
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-luxury transition-all cursor-pointer group">
                <Globe className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Social Media</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with us online
                </p>
                <Button variant="luxury-outline" size="sm" className="w-full">
                  Follow Us
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
