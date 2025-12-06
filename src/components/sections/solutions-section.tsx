import { SolutionCard } from '@/components/solution-card'; // Renamed from ServiceCard
import { solutionsData } from '@/lib/data'; // Renamed from servicesData

export function SolutionsSection() { // Renamed from ServicesSection
  return (
    <section id="solutions" className="py-16 md:py-24 bg-background"> {/* id changed to solutions */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Nossas <span className="text-primary">Soluções</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Desenvolvemos tecnologias interativas que integram software e hardware de forma inovadora.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"> {/* Adjusted grid for potentially 5 items */}
          {solutionsData.map((solution) => (
            <SolutionCard
              key={solution.id}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
