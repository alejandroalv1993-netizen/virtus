import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getStaticPost } from "@/lib/static-posts";
import { notFound } from "next/navigation";

export default async function PostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getStaticPost(slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-background">

      {/* ── Header: split layout ── */}
      <section className="container mx-auto px-6 md:px-12 pt-32 pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent mb-12 hover:gap-4 transition-all"
        >
          <ArrowLeft size={14} /> Volver
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-start">

          {/* Left — metadata + title */}
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.5em] text-accent mb-5 font-bold">
              {post.category} — {post.date}
            </p>
            <h1
              className="serif font-black leading-[0.92] mb-8 text-foreground"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", letterSpacing: "-0.02em" }}
            >
              {post.title}
            </h1>
            <p className="text-gray-500 text-base leading-relaxed max-w-lg border-l-2 border-accent/40 pl-5">
              {post.excerpt}
            </p>

            {/* Decorative rule */}
            <div className="flex items-center gap-4 mt-10">
              <div className="h-px w-12 bg-accent/40" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/30">Virtus</span>
            </div>
          </div>

          {/* Right — cover as editorial object */}
          <div className="md:sticky md:top-32 self-start">
            <div
              className="relative overflow-hidden shadow-2xl bg-white"
              style={{ width: "clamp(180px, 22vw, 280px)", aspectRatio: "3/4" }}
            >
              {/* White border frame */}
              <div className="absolute inset-[6px] z-10 ring-1 ring-black/5 pointer-events-none" />
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
            {/* Caption below cover */}
            <p className="text-[9px] uppercase tracking-widest text-foreground/25 mt-3 text-center"
               style={{ width: "clamp(180px, 22vw, 280px)" }}>
              Editorial N° 01 — {post.category}
            </p>
          </div>

        </div>
      </section>

      {/* ── Divider ── */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="h-px bg-black/8 max-w-3xl" />
      </div>

      {/* ── Article body ── */}
      <article className="container mx-auto px-6 md:px-12 py-20">
        <div className="max-w-3xl">
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8 prose-headings:serif prose-headings:text-foreground prose-strong:text-foreground prose-a:text-accent"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

    </main>
  );
}
