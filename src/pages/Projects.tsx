import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ProjectsSection from "@/components/ProjectsSection";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20">
        <ProjectsSection />

        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6 text-primary">
              Join Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Together, we can create lasting change and build a brighter future
              for Sri Lankan communities.
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

export default Projects;
