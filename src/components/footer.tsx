import Link from 'next/link';
import { Dog } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 flex items-center md:mb-0">
            <Dog className="mr-2 h-6 w-6 text-primary" />
            <span className="text-lg font-bold font-headline">West Park Dog Grooming</span>
          </div>
          <div className="flex space-x-6">
            <Link href="/" className="text-sm hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="text-sm hover:text-primary transition-colors">About</Link>
            <Link href="/services" className="text-sm hover:text-primary transition-colors">Services</Link>
            <Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
        <div className="mt-6 border-t border-muted pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} West Park Dog Grooming. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
