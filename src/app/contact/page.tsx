import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ContactForm } from "./contact-form";
import { Phone, Mail, MapPin } from "lucide-react";

const contactImage = PlaceHolderImages.find(p => p.id === 'contact-dog');

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-headline">Get In Touch</h1>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            Have questions or want to book an appointment? We'd love to hear from you!
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-sm">
             <h2 className="text-2xl font-bold font-headline mb-6">Contact Form</h2>
             <ContactForm />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold font-headline mb-6">Our Information</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-primary"/>
                  <span>123 Canine Court, West Park, FL 12345</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-primary"/>
                  <a href="tel:555-123-4567" className="hover:text-primary transition-colors">(555) 123-4567</a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary"/>
                  <a href="mailto:hello@westparkgrooming.com" className="hover:text-primary transition-colors">hello@westparkgrooming.com</a>
                </li>
              </ul>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                {contactImage && (
                    <Image
                        src={contactImage.imageUrl}
                        alt={contactImage.description}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        data-ai-hint={contactImage.imageHint}
                    />
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
