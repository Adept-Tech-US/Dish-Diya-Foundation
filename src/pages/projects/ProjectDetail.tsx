import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import EmblaCarousel from "@/components/EmblaCarousel";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20">
        <section className="py-20 bg-gradient-navy text-white">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-6 animate-fade-in-up">
              {project.title}
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto text-white/90 animate-fade-in-up animation-delay-200">
              {project.category} - {project.shortDescription}
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {project.fullDescription && (
                <>
                  <h2 className="text-3xl font-playfair font-bold mb-6 text-primary">
                    Overview
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    {project.fullDescription}
                  </p>
                </>
              )}

              {project.problem && (
                <>
                  <h2 className="text-3xl font-playfair font-bold mb-6 text-primary">
                    The Challenge
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    {project.problem}
                  </p>
                </>
              )}

              {project.solution && (
                <>
                  <h2 className="text-3xl font-playfair font-bold mb-6 text-primary">
                    Our Solution
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    {project.solution}
                  </p>
                </>
              )}

              {project.stages && project.stages.length > 0 && (
                <>
                  <h2 className="text-3xl font-playfair font-bold mb-6 text-primary">
                    Project Stages
                  </h2>
                  <Accordion
                    type="single"
                    collapsible
                    defaultValue="stage-0"
                    className="mb-8 w-full border rounded-md shadow-luxury"
                  >
                    {project.stages.map((stage, index) => (
                      <AccordionItem key={index} value={`stage-${index}`}>
                        <AccordionTrigger className="text-lg font-semibold px-4 py-2 hover:bg-muted">
                          {stage.title}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-2">
                          <p className="text-muted-foreground mb-4">
                            {stage.description}
                          </p>
                          {stage.images && stage.images.length > 0 && (
                            <EmblaCarousel images={stage.images} />
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </>
              )}

              {project.timeline && project.timeline.length > 0 && (
                <>
                  <h2 className="text-3xl font-playfair font-bold mb-6 text-primary">
                    Timeline
                  </h2>
                  <div className="overflow-x-auto mb-8">
                    <table className="min-w-full bg-white border border-gray-300">
                      <thead>
                        <tr>
                          <th className="py-2 px-4 border-b text-left">Date</th>
                          <th className="py-2 px-4 border-b text-left">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.timeline.map((step, index) => (
                          <tr key={index}>
                            <td className="py-2 px-4 border-b">{step.date}</td>
                            <td className="py-2 px-4 border-b">
                              {step.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              {project.impact && (
                <>
                  <h2 className="text-3xl font-playfair font-bold mb-6 text-primary">
                    Impact
                  </h2>
                  <p className="text-muted-foreground mb-8">{project.impact}</p>
                </>
              )}

              <div className="flex gap-4 justify-center mt-8">
                <Button variant="luxury" className="flex-1 max-w-xs">
                  Support This Project
                </Button>
                <Button variant="luxury-outline" className="flex-1 max-w-xs">
                  Share
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
