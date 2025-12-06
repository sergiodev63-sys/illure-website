
"use client";

import Link from 'next/link';
import Image from 'next/image'; // Added Image import
import { useState } from 'react';
import { Menu } from 'lucide-react'; // Cpu and X removed as X is part of SheetContent
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { label: 'Soluções', href: '#solutions' },
  { label: 'Nossos Projetos', href: '#nossos-projetos' },
  { label: 'Sobre', href: '#about' },
  { label: 'Contato', href: '#contact' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary/80 transition-colors">
          <Image
            src="/images/logo200x100.png"
            alt="illure Logo"
            width={150} // Adjusted width for better fit in navbar, original was 200
            height={75} // Adjusted height maintaining aspect ratio, original was 100
            priority
            className="h-auto" // to maintain aspect ratio if height is constrained by parent
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col gap-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-bold text-primary mb-4" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src="/images/logo200x100.png"
                    alt="illure Logo"
                    width={150}
                    height={75}
                    className="h-auto"
                  />
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
