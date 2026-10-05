import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="Portfolio in React"
          description="My portfolio page, built from small reusable React components."
          tech="React · Tailwind CSS"
          link="https://github.com/KarlManzalinto"
        />
        <ProjectCard
          year="2025"
          title="Simple Calculator"
          description="A calculator web page that does basic add, subtract, multiply, and divide."
          tech="HTML · CSS · JavaScript"
          link="https://github.com/KarlManzalinto"
        />
        <ProjectCard
          year="2025"
          title="Grade Calculator"
          description="A console program that computes a student's average grade."
          tech="C++"
          link="https://github.com/KarlManzalinto"
        />
        <ProjectCard
          year="2024"
          title="Library Book Tracker"
          description="A small app that keeps a list of books and who borrowed them."
          tech="Java · MySQL"
          link="https://github.com/KarlManzalinto"
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
