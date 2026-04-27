"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CategoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  avatarUrl: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
}

const CategoryCard = React.forwardRef<HTMLDivElement, CategoryCardProps>(
  (
    {
      className,
      imageUrl,
      avatarUrl,
      title,
      subtitle,
      description,
      href,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative w-full aspect-[3/4] overflow-hidden rounded-2xl border border-black/5 bg-card shadow-xl",
          "transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-4",
          className
        )}
        {...props}
      >
        {/* Background Image with Zoom Effect */}
        <img
          src={imageUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

        {/* Content Container */}
        <div className="relative flex h-full flex-col justify-between p-8 text-white">
          
          {/* Top Section: Avatar Floating */}
          <div className="flex justify-center pt-4">
             <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-background shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                <img src={avatarUrl} alt={title} className="h-full w-full object-cover" />
             </div>
          </div>
          
          {/* Middle Section: Details (slides up on hover) */}
          <div className="space-y-4 transition-transform duration-500 ease-in-out group-hover:-translate-y-20">
            <div>
              <p className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold mb-1">{subtitle}</p>
              <h3 className="text-5xl serif leading-none">{title}</h3>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2">ESENCIA</h4>
              <p className="text-sm text-white/70 leading-relaxed font-light line-clamp-3">
                {description}
              </p>
            </div>
          </div>

          {/* Bottom Section: Button (revealed on hover) */}
          <div className="absolute -bottom-20 left-0 w-full p-8 opacity-0 transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:opacity-100">
            <Button render={<Link href={href} />} variant="outline" className="w-full bg-white text-black hover:bg-accent hover:text-white border-none h-14 text-xs uppercase tracking-widest font-bold">
              Explorar Pilar <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);
CategoryCard.displayName = "CategoryCard";

export { CategoryCard };