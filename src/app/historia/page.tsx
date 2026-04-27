import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const hitos = [
  {
    numero: "I",
    periodo: "Grecia Clásica · S. V a.C.",
    titulo: "El ideal del kalós kagathós",
    texto:
      "Los griegos no separaban la belleza física de la excelencia moral. El hombre completo era aquel que cultivaba el cuerpo en el gimnasio y el espíritu en la filosofía. Sócrates, Platón, Aristóteles: todos entendían que la virtud no era un accidente, sino el resultado de un esfuerzo consciente y sostenido.",
    imagen: "/images/tradicion.webp",
  },
  {
    numero: "II",
    periodo: "Roma · S. II a.C. — S. II d.C.",
    titulo: "Virtus como fundamento de la República",
    texto:
      "Para los romanos, virtus era inseparable del deber cívico. Cicerón la definía como la disposición del alma conforme a la razón. Marco Aurelio la practicaba cada madrugada antes de que el mundo se despertara. No era un ideal abstracto: era una exigencia cotidiana que debía demostrarse en el foro, en el campo de batalla y en el hogar.",
    imagen: "/images/issue1.webp",
  },
  {
    numero: "III",
    periodo: "Renacimiento · S. XV — XVI",
    titulo: "El hombre universal",
    texto:
      "Leon Battista Alberti lo formuló con claridad: el hombre puede hacer de sí mismo lo que quiera. El Renacimiento recuperó la convicción clásica de que la excelencia humana era alcanzable mediante el estudio, la disciplina y la voluntad. Leonardo, Dante, Maquiavelo: hombres que se forjaron a sí mismos con una ambición que no conocía límites cómodos.",
    imagen: "/images/habitos.webp",
  },
];

export default function HistoriaPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 pt-40 pb-16 max-w-4xl">
        <p className="text-[10px] uppercase tracking-[0.5em] text-accent mb-5 font-bold">
          Historia
        </p>
        <h1
          className="serif font-black leading-none text-foreground mb-8"
          style={{ fontSize: "clamp(3rem, 7vw, 6rem)", letterSpacing: "-0.03em" }}
        >
          El hombre a través<br />del tiempo
        </h1>
        <p className="text-gray-500 text-base leading-relaxed max-w-xl">
          La historia de la humanidad es, en buena parte, la historia de los hombres que eligieron
          ser más de lo que las circunstancias exigían. Tres momentos en que esa convicción
          tomó forma definitiva.
        </p>
      </section>

      {/* Hitos */}
      <section className="container mx-auto px-6 md:px-12 pb-28 max-w-4xl">
        <div className="space-y-0">
          {hitos.map((hito, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-black/8"
            >
              {/* Image */}
              <div className={`relative h-64 md:h-80 overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <Image
                  src={hito.imagen}
                  alt={hito.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-75 hover:opacity-90 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
              </div>

              {/* Text */}
              <div className={`flex flex-col justify-center p-8 md:p-12 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <span className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold mb-1">
                  {hito.numero}
                </span>
                <p className="text-[10px] uppercase tracking-widest text-foreground/30 mb-4">
                  {hito.periodo}
                </p>
                <h2 className="serif text-3xl font-black mb-5 text-foreground">{hito.titulo}</h2>
                <p className="text-gray-500 leading-relaxed text-sm">{hito.texto}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-black/8 flex justify-between items-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/30">
            Virtus · Editorial N° 01
          </p>
          <Link
            href="/valores"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:text-accent transition-all"
          >
            Valores <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </main>
  );
}
