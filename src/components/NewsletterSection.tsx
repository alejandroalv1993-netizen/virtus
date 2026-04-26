"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: connect to mailing service
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="relative bg-[#111009] overflow-hidden">
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Faint watermark */}
      <p
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.03] font-black serif whitespace-nowrap select-none pointer-events-none"
        style={{ fontSize: "clamp(5rem, 18vw, 14rem)", letterSpacing: "-0.04em" }}
      >
        VIRTUS
      </p>

      <div className="relative container mx-auto px-6 py-28 md:py-36">
        {/* Top ornament */}
        <div className="flex items-center gap-4 mb-16 max-w-xl mx-auto">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-[#9d824d] text-xs tracking-[0.5em] uppercase font-bold">I</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center max-w-5xl mx-auto">

          {/* Left — copy */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#9d824d] mb-6 font-bold">
              Hermandad · Editorial N° 01
            </p>
            <h2
              className="serif font-black text-white leading-[0.9] mb-8"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
            >
              Únete a la<br />
              <em className="not-italic" style={{ color: "#9d824d" }}>Hermandad</em>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Reflexiones semanales sobre historia, valores y el camino hacia una masculinidad virtuosa. Sin ruido. Sin concesiones.
            </p>

            {/* Decorative quote */}
            <div className="mt-10 pl-5 border-l border-[#9d824d]/40">
              <p className="serif italic text-white/25 text-lg leading-snug">
                "No naces hombre,<br />te conviertes en uno."
              </p>
              <span className="text-[10px] uppercase tracking-widest text-white/20 mt-2 block">
                — Simone de Beauvoir, adaptado
              </span>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === "success" ? (
              <div className="border border-[#9d824d]/30 p-10 text-center">
                <p className="text-[#9d824d] text-xs uppercase tracking-[0.4em] mb-4">Bienvenido</p>
                <h3 className="serif text-white text-3xl font-black mb-3">Has sido iniciado.</h3>
                <p className="text-white/30 text-sm">Recibirás la primera entrega en tu correo.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <label
                  htmlFor="newsletter-email"
                  className="block text-[10px] uppercase tracking-[0.4em] text-white/30 mb-3"
                >
                  Correo electrónico
                </label>

                <div className="relative mb-4">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    required
                    className="w-full bg-white/[0.04] border border-white/10 px-5 py-4 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#9d824d] focus:bg-white/[0.06] transition-all duration-300"
                  />
                  {/* Gold focus line */}
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-[#9d824d] transition-all duration-500 peer-focus:w-full" />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#9d824d] text-white py-4 text-xs uppercase tracking-[0.4em] font-bold hover:bg-[#b8975a] active:scale-[0.99] transition-all duration-300 shadow-lg shadow-[#9d824d]/10 mt-1"
                >
                  Suscribirse
                </button>

                <p className="text-white/20 text-[10px] text-center mt-5 leading-relaxed">
                  Sin spam. Baja cuando quieras.
                </p>

                {/* Divider with num */}
                <div className="flex items-center gap-3 mt-8">
                  <div className="flex-1 h-px bg-white/8" />
                  <span className="text-white/15 text-[10px] tracking-widest uppercase">o comparte</span>
                  <div className="flex-1 h-px bg-white/8" />
                </div>

                <div className="flex gap-3 mt-4">
                  {["X / Twitter", "Instagram"].map((net) => (
                    <button
                      key={net}
                      type="button"
                      className="flex-1 py-3 border border-white/8 text-white/30 text-[10px] uppercase tracking-widest hover:border-white/20 hover:text-white/50 transition-all duration-300"
                    >
                      {net}
                    </button>
                  ))}
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom ornament */}
        <div className="flex items-center gap-4 mt-16 max-w-xl mx-auto">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-[#9d824d] text-[10px] tracking-[0.5em] uppercase font-bold">MMXXVI</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
      </div>
    </section>
  );
}
