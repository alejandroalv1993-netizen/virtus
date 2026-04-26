import Hero3D from "@/components/Hero3D";
import CategoriesSection from "@/components/CategoriesSection";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const featuredPosts = [
  {
    title: "Pancracio: La Forja del Guerrero Absoluto",
    excerpt: "Fuerza, técnica y voluntad. Exploramos el arte marcial más brutal de la antigua Grecia y su legado en la disciplina moderna.",
    date: "25 de Abril, 2026",
    category: "Disciplina",
    slug: "pancracio-forja-guerrero",
    image: "/images/bg-habitos.webp",
    objectPosition: "80% center",
  },
  {
    title: "Virtus: Identidad, Tradición y Propósito",
    excerpt: "Nuestra razón de ser. Definimos los pilares de la masculinidad virtuosa en un mundo que ha olvidado sus raíces.",
    date: "24 de Abril, 2026",
    category: "Identidad",
    slug: "virtus-identidad-proposito",
    image: "/images/issue1.webp",
    objectPosition: "center",
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      <Hero3D />

      <CategoriesSection />

      {/* Lo Último Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent mb-4 font-bold">Lo Último</h2>
          <h3 className="text-5xl font-black serif mb-8">Últimos artículos</h3>
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:text-accent transition-all border-b border-black/10 pb-1">
            Ver todo el archivo <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {featuredPosts.map((post) => (
            <article key={post.slug} className="group cursor-pointer">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-[3/2] overflow-hidden mb-4 bg-black/5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectPosition: (post as any).objectPosition || "center" }}
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3 glass px-3 py-1 text-[10px] uppercase tracking-widest text-foreground">
                    {post.category}
                  </div>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">{post.date}</p>
                <h4 className="text-xl font-bold serif mb-3 group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="text-xs uppercase tracking-widest border-b border-accent pb-1">
                  Leer más
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
