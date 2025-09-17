import { Project } from '@/models/Project.model';
import ProjectButtons from '../ProjectButtons/ProjectButtons';

export interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-base-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl mb-4"
        />
      )}

      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-base-content-300 mt-2">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.tech.map((t, i) => (
          <span key={i} className="px-3 py-1 text-sm bg-base-300 rounded-full">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        <ProjectButtons demo={project.link} github={project.github} />
      </div>
    </div>
  );
};

export default ProjectCard;
