
"use client";

import { useState } from 'react';
import { ProjectCard } from '@/components/project-card';
import { projectsData, type Project } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ProjectDetailModal } from '@/components/project-detail-modal';

export function ProjectsSection() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (projectIndex: number) => {
    setSelectedProjectIndex(projectIndex);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProjectIndex(null);
  };

  const handleNavigateNext = () => {
    if (selectedProjectIndex !== null && selectedProjectIndex < projectsData.length - 1) {
      setSelectedProjectIndex(selectedProjectIndex + 1);
    }
  };

  const handleNavigatePrev = () => {
    if (selectedProjectIndex !== null && selectedProjectIndex > 0) {
      setSelectedProjectIndex(selectedProjectIndex - 1);
    }
  };
  
  const selectedProject = selectedProjectIndex !== null ? projectsData[selectedProjectIndex] : null;

  return (
    <>
      <section id="nossos-projetos" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Nossos <span className="text-primary">Projetos</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Conheça alguns dos nossos trabalhos
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.id}
                imageUrl={project.imageUrl}
                imageHint={project.imageHint}
                title={project.title}
                category={project.category}
                description={project.description}
                onOpenModal={() => handleOpenModal(index)}
                projectData={project} 
              />
            ))}
          </div>
          {/* O botão "Ver Todos os Projetos" foi removido daqui */}
        </div>
      </section>
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onNavigateNext={handleNavigateNext}
          onNavigatePrev={handleNavigatePrev}
          isNextDisabled={selectedProjectIndex === projectsData.length - 1}
          isPrevDisabled={selectedProjectIndex === 0}
        />
      )}
    </>
  );
}

