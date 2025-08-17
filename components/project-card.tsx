import React, { useState } from "react";
import { Project } from "@/lib/projects";
import { ExternalLink, Image as ImageIcon, Monitor } from "lucide-react";
import ImageViewer from "./image-viewer";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);
  const [isWebsiteOpen, setIsWebsiteOpen] = useState(false);

  const handleOpenGallery = (index: number) => {
    setInitialImageIndex(index);
    setIsGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setIsGalleryOpen(false);
  };

  const handleOpenWebsite = () => {
    setIsWebsiteOpen(true);
  };

  const handleCloseWebsite = () => {
    setIsWebsiteOpen(false);
  };

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

      {(project.projectLink || project.images) && (
        <div className="flex flex-wrap gap-2 mt-4">
          {project.projectLink && (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-64 rounded-lg overflow-hidden border border-slate-6 block relative group"
            >
              <iframe
                src={project.projectLink}
                title={`${project.title} Website`}
                className="w-full h-full border-none pointer-events-none"
              ></iframe>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-200" />
              </div>
            </a>
          )}
          {project.images && project.images.length > 0 && (
            <button
              onClick={() => handleOpenGallery(0)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-3 text-slate-12 border border-slate-6 rounded-lg hover:bg-slate-4 transition-colors duration-200 text-sm font-medium"
            >
              <ImageIcon className="w-4 h-4" />
              View Screenshots
            </button>
          )}
        </div>
      )}

      {project.images && (
        <ImageViewer
          images={project.images}
          isOpen={isGalleryOpen}
          onClose={handleCloseGallery}
          initialIndex={initialImageIndex}
        />
      )}
    </div>
  );
};