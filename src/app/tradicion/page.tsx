import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const pilares = [
  {
    titulo: "La cadena que no debe romperse",
    texto:
      "Cada generación recibe una herencia y tiene la responsabilidad de transmitirla. No como un museo que conserva objetos muertos, sino como un taller vivo donde el pasado se convierte en herramienta para el presente. Los hombres que rompieron ese vínculo no encontraron la libertad que buscaban: encontraron el vacío.",
  },
  {
    titulo: "Saber de dónde vienes",
    texto:
      "La tradición no es nostalgia. Es orientación. El hombre que conoce su historia —la de su familia, la de su cultura, la de los que pensaron y construyeron antes que él— tiene un punto de referencia desde el que evaluar el presente. El que no la conoce navega sin brújula, susceptible a cualquier corriente que sople con suficiente fuerza.",
  },
  {
    titulo: "Lo que merece preservarse",
    texto:
      "No toda tradición merece ser conservada. La tradición viva distingue entre lo accidental y lo esencial, entre lo que fue conveniente en su tiempo y lo que sigue siendo verdadero. Lo que se preserva no es la forma sino el principio: el respeto al padre, la lealtad a la palabra dada, el cuidado de los que dependen de ti. Eso no caduca.",
  },
];

export default function TradicionPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero split */}
      <section className="container mx-auto px-6 md:px-12 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center min-h-[50vh]">

          {/* Text */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-accent mb-5 font-bold">
              Tradición
            </p>
            <h1
              className="serif font-black leading-none text-foreground mb-8"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", letterSpacing: "-0.03em" }}
            >
              La herencia<br />que nos<br />
              <em style={{ color: "#9d824d" }}>sostiene</em>
            </h1>
            <p className="text-gray-500 text-base leading-relaxed max-w-md">
              La tradición no es el pasado. Es el presente interpretado con la sabiduría
              de quienes vivieron antes. Es el hilo que convierte una vida aislada
              en parte de algo más grande.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[420px] md:h-[520px] overflow-hidden">
            <Image
              src="/images/bg-tradicion.webp"
              alt="Tradición"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="flex items-center gap-4 max-w-4xl">
          <div className="flex-1 h-px bg-black/8" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">III</span>
          <div className="flex-1 h-px bg-black/8" />
        </div>
      </div>

      {/* Pilares */}
      <section className="container mx-auto px-6 md:px-12 pb-28 max-w-4xl">
        <div className="space-y-12">
          {pilares.map((p, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[60px_1fr] gap-4 md:gap-10">
              <div className="pt-1">
                <span className="serif text-5xl font-black text-foreground/8 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h2 className="serif text-2xl font-black mb-4 text-foreground">{p.titulo}</h2>
                <p className="text-gray-500 leading-relaxed text-base">{p.texto}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cierre */}
        <div className="mt-20 p-10 border border-black/8 text-center">
          <p className="serif italic text-foreground/40 text-xl mb-2">
            "La tradición no es la adoración de las cenizas,<br />sino la transmisión del fuego."
          </p>
          <span className="text-[10px] uppercase tracking-widest text-foreground/25">
            — Gustav Mahler
          </span>
        </div>

        <div className="mt-12 pt-10 border-t border-black/8 flex justify-between items-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/30">
            Virtus · Editorial N° 01
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:text-accent transition-all"
          >
            Archivo <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </main>
  );
}
