"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { Service } from "./page";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServiceInfoModalProps {
  service: Service | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ServiceInfoModal({ service, isOpen, onOpenChange }: ServiceInfoModalProps) {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                {service.icon}
            </div>
            <div>
                <DialogTitle className="text-2xl font-headline">{service.title}</DialogTitle>
                <p className="text-xl font-bold text-primary">{service.price}</p>
            </div>
          </div>
          <DialogDescription className="text-left text-base text-muted-foreground">
            {service.longDescription}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex justify-end gap-2">
            <Button variant="secondary" onClick={() => onOpenChange(false)}>
                Close
            </Button>
            <Button asChild>
                <Link href="/contact">Book This Service</Link>
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
