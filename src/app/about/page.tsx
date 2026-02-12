import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { PawPrint, Heart, Leaf } from "lucide-react";

const aboutSalonImage = PlaceHolderImages.find(p => p.id === 'about-salon');
const groomer1Image = PlaceHolderImages.find(p => p.id === 'groomer-1');
const groomer2Image = PlaceHolderImages.find(p => p.id === 'groomer-2');

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold font-headline">Our Story</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Founded in 2015, West Park Dog Grooming was born from a simple passion: a love for dogs and a desire to provide them with the best possible care. We started as a small, one-person operation and have grown into a beloved local business, thanks to our wonderful community of pet owners.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our mission is to create a welcoming, safe, and calm environment where every dog feels comfortable and leaves looking and feeling their best. We believe grooming is an essential part of a dog's health and happiness.
            </p>
          </div>
          <div>
            {aboutSalonImage && (
              <Image
                src={aboutSalonImage.imageUrl}
                alt={aboutSalonImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint={aboutSalonImage.imageHint}
              />
            )}
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold font-headline">Our Core Values</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <PawPrint className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-bold font-headline">Animal First</h3>
              <p className="mt-2 text-muted-foreground">The safety, comfort, and well-being of your pet is our absolute top priority.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-bold font-headline">Passionate Care</h3>
              <p className="mt-2 text-muted-foreground">We are true dog lovers and pour our hearts into making every grooming session a positive experience.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-bold font-headline">Quality & Natural</h3>
              <p className="mt-2 text-muted-foreground">We use only the finest, eco-friendly, and natural products on your beloved pets.</p>
            </div>
          </div>
        </div>
        
        {/* Meet the Team Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold font-headline text-center">Meet Our Groomers</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            <Card className="flex flex-col md:flex-row items-center overflow-hidden">
              {groomer1Image && (
                <div className="w-full md:w-1/3">
                  <Image
                    src={groomer1Image.imageUrl}
                    alt={groomer1Image.description}
                    width={400}
                    height={400}
                    className="object-cover h-full w-full"
                    data-ai-hint={groomer1Image.imageHint}
                  />
                </div>
              )}
              <div className="w-full md:w-2/3">
                <CardHeader>
                  <CardTitle className="font-headline">Jessica Miller</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"With over 10 years of experience, I specialize in gentle handling for anxious dogs. Seeing a dog leave happy and confident is the best part of my day!"</p>
                </CardContent>
              </div>
            </Card>
            <Card className="flex flex-col md:flex-row items-center overflow-hidden">
              {groomer2Image && (
                <div className="w-full md:w-1/3">
                  <Image
                    src={groomer2Image.imageUrl}
                    alt={groomer2Image.description}
                    width={400}
                    height={400}
                    className="object-cover h-full w-full"
                    data-ai-hint={groomer2Image.imageHint}
                  />
                </div>
              )}
              <div className="w-full md:w-2/3">
                <CardHeader>
                  <CardTitle className="font-headline">David Chen</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"I love working with all breeds, big and small. My expertise is in breed-specific cuts and creative styling. I look forward to meeting your furry family member!"</p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
