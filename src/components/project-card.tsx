
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/data';

interface ProjectCardProps {
  imageUrl: string;
  imageHint: string;
  title: string;
  category: string;
  description: string;
  onOpenModal: () => void;
  projectData: Project;
}

export function ProjectCard({
  imageUrl,
  imageHint,
  title,
  category,
  description,
  onOpenModal,
  projectData
}: ProjectCardProps) {
  const hasDetails = !!(projectData && projectData.details);

  return (
    <Card className="group flex h-full transform flex-col overflow-hidden rounded-xl border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-[160/117] w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            className="object-top transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-grow flex-col p-6">
        <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">{category}</span>
        <CardTitle className="mb-2 text-xl font-semibold text-card-foreground">{title}</CardTitle>
        <CardDescription className="flex-grow text-sm text-muted-foreground">{description}</CardDescription>
      </CardContent>
      {hasDetails && (
        <CardFooter className="p-6 pt-0">
          <Button
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary/5 hover:text-primary"
            onClick={onOpenModal}
          >
            Ver Detalhes
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
