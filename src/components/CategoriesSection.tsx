"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Tradición",
    avatar: "/images/tradicion.webp",
    href: "/blog/virtus-identidad-proposito",
  },
  {
    name: "Hábitos",
    avatar: "/images/habitos.webp",
    href: "/blog/pancracio-forja-guerrero",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-24 border-b border-black/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-sm uppercase tracking-[0.4em] text-accent mb-12 font-bold">Pilares de Excelencia</h2>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={category.href} className="group flex flex-col items-center">
                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6">
                  <div className="relative w-full h-full rounded-full border-4 border-background overflow-hidden shadow-2xl bg-[#e9e5d9] transition-all duration-500 group-hover:scale-110 group-hover:shadow-accent/20 group-hover:border-accent/30">
                    <Image
                      src={category.avatar}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -inset-2 rounded-full border border-black/5 scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
                </div>
                <span className="serif text-2xl md:text-3xl text-foreground/80 group-hover:text-accent transition-colors duration-300">
                  {category.name}
                </span>
                <div className="h-px w-0 group-hover:w-full bg-accent/30 transition-all duration-500 mt-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
