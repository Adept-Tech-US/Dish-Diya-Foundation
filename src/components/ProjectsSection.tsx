
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-12 text-primary">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <p className="text-muted-foreground mt-2">
                {project.shortDescription}
              </p>
              <Link
                to={`/projects/${project.slug}`}
                className="mt-4 inline-block text-primary hover:underline"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
