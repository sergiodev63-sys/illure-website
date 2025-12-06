
"use client";

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import type { Project } from '@/lib/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigateNext: () => void;
  onNavigatePrev: () => void;
  isNextDisabled: boolean;
  isPrevDisabled: boolean;
}

export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
  onNavigateNext,
  onNavigatePrev,
  isNextDisabled,
  isPrevDisabled,
}: ProjectDetailModalProps) {
  if (!project) {
    return null;
  }

  const isVideo = project.details?.detailImageUrl && project.details.detailImageUrl.toLowerCase().endsWith('.mp4');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] grid grid-rows-[auto_1fr_auto] p-0">
        <DialogHeader className="p-6 pb-4 border-b">
          <DialogTitle className="text-2xl font-bold text-primary">
            {project.details?.detailTitle || project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="overflow-y-auto px-6"> {/* Removed ScrollArea, direct scroll on this div */}
          <div className="space-y-4 py-6"> {/* Added py-6 to maintain spacing previously provided by ScrollArea's inner div */}
            {project.details?.detailImageUrl && (
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-black">
                {isVideo ? (
                  <video
                    autoPlay
                    loop
                    playsInline
                    controls
                    className="w-full h-full object-contain"
                    preload="metadata"
                    key={project.details.detailImageUrl} 
                  >
                    <source src={project.details.detailImageUrl} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                ) : (
                  <Image
                    src={project.details.detailImageUrl}
                    alt={project.details.detailTitle || project.title}
                    fill
                    style={{ objectFit: 'contain' }}
                    data-ai-hint={project.details.detailImageHint || project.imageHint}
                  />
                )}
              </div>
            )}
            {project.details?.detailSubtitle && (
              <p className="text-lg font-semibold text-foreground mt-4">
                {project.details.detailSubtitle}
              </p>
            )}
            {project.details?.detailText && project.details.detailText.length > 0 ? (
              project.details.detailText.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
                 <p className="text-muted-foreground">Mais detalhes sobre este projeto estarão disponíveis em breve.</p>
            )}
             {project.details && !project.details.detailImageUrl && !project.details.detailSubtitle && (!project.details.detailText || project.details.detailText.length === 0) && (
              <p className="text-muted-foreground"><i>Descrição detalhada não disponível para este projeto. Mostrando informações gerais:</i></p>
            )}
            {!project.details && (
                 <>
                    <p className="text-lg font-semibold text-foreground">{project.category}</p>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                 </>
            )}
          </div>
        </div>

        <DialogFooter className="flex justify-between border-t bg-background p-4 sm:p-6"> 
          <Button variant="outline" onClick={onNavigatePrev} disabled={isPrevDisabled}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
          </Button>
          <Button variant="outline" onClick={onNavigateNext} disabled={isNextDisabled}>
            Próximo <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
