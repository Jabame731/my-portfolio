import ProjectCard from '@/components/molecules/ProjectCard/ProjectCard';
import { projects } from '@/utils/projects';

const WorkProjects = () => {
  return (
    <div
      className="bg-base-100 flex flex-col justify-center items-center space-y-8 pb-20 pt-20"
      id="projects"
    >
      <div className="container px-4 space-y-2 text-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-base-content-300 mt-2">
          Here are some of the projects I’ve built, showcasing my frontend and
          full-stack development skills.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
          {projects.map((p, idx) => (
            <ProjectCard key={idx} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProjects;
