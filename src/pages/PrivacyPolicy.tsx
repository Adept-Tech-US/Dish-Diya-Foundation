import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <Card className="p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                Dishdiya Foundation collects information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Make a donation or contribution</li>
                <li>Sign up for our newsletter</li>
                <li>Contact us through our website or social media</li>
                <li>Participate in our programs or events</li>
                <li>Apply to volunteer with us</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Process donations and send tax receipts</li>
                <li>Send newsletters and updates about our work</li>
                <li>Respond to your inquiries and requests</li>
                <li>Improve our programs and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                <li>With your consent</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist in our operations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with relevant authorities</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-foreground">
                  <strong>Dishdiya Foundation</strong><br />
                  123 Main Street, Colombo, Sri Lanka<br />
                  Email: privacy@dishdiyafoundation.org<br />
                  Phone: +94 11 234 5678
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;