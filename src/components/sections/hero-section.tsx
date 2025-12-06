
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10 overflow-hidden"> {/* Added overflow-hidden here */}
        <Image
          src="/hero.jpg" 
          alt="Pessoas interagindo com uma grande tela touch screen com documentos e livros digitais"
          fill
          style={{ objectFit: 'cover' }}
          quality={80}
          priority
          data-ai-hint="interactive display"
          className="animate-hero-zoom-out" // Added animation class
        />
        <div className="absolute inset-0 bg-black/60"></div> {/* Overlay escuro */}
      </div>
      
      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Transformamos Ideias em <span className="text-accent">Experiências Digitais Interativas</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-primary-foreground/90 sm:text-xl md:text-2xl">
          Combinamos design e tecnologia intuitiva para criar experiências memoráveis digitais que encantam e engajam.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-transform hover:scale-105">
            <Link href="#solutions">
              Nossas Soluções
            </Link>
          </Button>
          <Button asChild size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
            <Link href="#contact">
              Entre em Contato
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
