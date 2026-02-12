"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Info, Scissors, Droplets, Footprints } from "lucide-react";
import { ServiceInfoModal } from "./service-info-modal";

const serviceData = [
  {
    id: "bath-brush",
    title: "Bath & Brush",
    price: "$45+",
    shortDescription: "A refreshing wash and brush-out for a clean, happy pup.",
    longDescription: "Our Bath & Brush service includes a deep-cleaning bath with premium, natural shampoo, a full brush-out to remove loose fur and prevent matting, nail trimming, and ear cleaning. Perfect for keeping your dog fresh between full grooms.",
    icon: <Droplets className="h-8 w-8" />,
    imageId: "service-bath",
  },
  {
    id: "full-groom",
    title: "Full Groom",
    price: "$75+",
    shortDescription: "The complete spa experience with a stylish haircut.",
    longDescription: "The Full Groom is our all-inclusive package. It features everything from the Bath & Brush, plus a customized haircut and styling based on your preference and your dog's breed. We finish with a bandana or bow and a spritz of cologne.",
    icon: <Scissors className="h-8 w-8" />,
    imageId: "service-haircut",
  },
  {
    id: "paw-dicure",
    title: "Paw-dicure",
    price: "$25",
    shortDescription: "Keep those paws healthy and comfortable.",
    longDescription: "Our Paw-dicure service focuses on paw health. It includes a nail trim and grind for smooth edges, a paw pad trim to prevent slipping, and a soothing paw balm application to moisturize and protect dry or cracked pads.",
    icon: <Footprints className="h-8 w-8" />,
    imageId: "service-nails",
  },
];

export type Service = (typeof serviceData)[0];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-headline">Our Services</h1>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              We offer a range of services to meet every dog's needs. Prices may vary based on breed, size, and coat condition.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceData.map((service) => {
              const image = PlaceHolderImages.find(p => p.id === service.imageId);
              return (
                <Card key={service.id} className="flex flex-col">
                  {image && (
                    <div className="relative h-48 w-full">
                       <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover rounded-t-lg"
                          data-ai-hint={image.imageHint}
                       />
                    </div>
                  )}
                  <CardHeader className="flex-row items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="font-headline">{service.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-primary">{service.price}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.shortDescription}</p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setSelectedService(service)}
                    >
                      <Info className="mr-2 h-4 w-4" />
                      More Info
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <ServiceInfoModal
        service={selectedService}
        isOpen={!!selectedService}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setSelectedService(null);
          }
        }}
      />
    </>
  );
}
