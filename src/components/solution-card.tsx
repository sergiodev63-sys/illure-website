import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SolutionCardProps { // Renamed from ServiceCardProps
  icon: LucideIcon;
  title: string;
  description: string;
}

export function SolutionCard({ icon: Icon, title, description }: SolutionCardProps) { // Renamed from ServiceCard
  return (
    <Card className="flex h-full transform flex-col overflow-hidden rounded-xl border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <div className="rounded-full bg-primary/10 p-3 text-primary">
          <Icon className="h-8 w-8" />
        </div>
        <CardTitle className="text-xl font-semibold text-card-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
