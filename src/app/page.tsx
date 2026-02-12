import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2, Sparkles, ShowerHead } from "lucide-react";

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-dog');

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl font-headline font-bold md:text-6xl drop-shadow-lg">
            Pamper Your Pooch
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-md">
            Expert grooming for happy, healthy dogs. We treat every pet like our own.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/services">View Our Services</Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-headline font-bold">Why Choose West Park?</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              We provide a safe, comfortable, and stress-free grooming experience for your furry friend.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 font-headline">Expert Groomers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our certified groomers have years of experience with all breeds and temperaments.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 font-headline">Premium Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We use only high-quality, natural shampoos and conditioners that are safe for your pet.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ShowerHead className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 font-headline">Clean & Safe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our salon is kept impeccably clean and sanitized for the health of all our furry clients.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-secondary">
          <div className="container mx-auto px-4 md:px-6 py-16 text-center">
              <h2 className="text-3xl font-bold font-headline">Ready for a Pawsitive Experience?</h2>
              <p className="mt-2 text-foreground/80 max-w-xl mx-auto">
                  Your dog deserves the best. Book an appointment today and see the West Park difference.
              </p>
              <Button asChild size="lg" className="mt-8">
                  <Link href="/contact">Contact Us</Link>
              </Button>
          </div>
      </section>
    </div>
  );
}
