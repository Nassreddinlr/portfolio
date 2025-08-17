import React from "react";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-2 rounded-lg p-6 space-y-4 text-left">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-slate-12">{project.title}</h3>
        <p className="text-sm text-slate-11 leading-relaxed">{project.description}</p>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium text-slate-12">Key Features:</h4>
        <ul className="text-sm text-slate-11 space-y-1 list-disc list-inside">
          {project.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium text-slate-12">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologiesUsed.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-slate-4 text-slate-12 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};