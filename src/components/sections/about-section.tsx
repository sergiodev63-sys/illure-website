import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Sobre a <span className="text-primary">illure</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg"> {/* Removed shadow-xl */}
              <Image
                src="/images/illure1.png" 
                alt="Equipe illure ou projeto interativo da illure"
                fill
                style={{ objectFit: 'contain' }} 
                className="transform transition-transform duration-500 hover:scale-105"
                data-ai-hint="company team"
              />
            </div>
          </div>
          <div className="md:col-span-3 space-y-6 text-muted-foreground text-base md:text-lg">
            <p>
              A illure é uma empresa voltada para o desenvolvimento de tecnologias interativas, fazendo a integração de software e hardware.
            </p>
            <p>
              Elaboramos projetos para museus, centro-culturais, exposições, ações de marketing, simulação, e projetos especiais, utilizando tecnologias interativas como: sistemas de informação em totens, mesas touchscreen, projeção mapeada e interativa, interface de uso natural, imersão, realidade virtual e mista, simuladores, games e aplicativos mobile.
            </p>
            <p>
              Nossa equipe é formada por profissionais com grande experiência nas três áreas em que atua: consultoria, desenvolvimento de sistemas e design. Estamos em constante processo de atualização tecnológica, através de pesquisa e utilização de novas ferramentas e recursos que resultam em soluções inovadoras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
