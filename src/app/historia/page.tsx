import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const hitos = [
  {
    periodo: "Grecia Clásica · S. V a.C.",
    titulo: "El ideal del kalós kagathós",
    texto:
      "Los griegos no separaban la belleza física de la excelencia moral. El hombre completo era aquel que cultivaba el cuerpo en el gimnasio y el espíritu en la filosofía. Sócrates, Platón, Aristóteles: todos entendían que la virtud no era un accidente, sino el resultado de un esfuerzo consciente y sostenido.",
  },
  {
    periodo: "Roma · S. II a.C. — S. II d.C.",
    titulo: "Virtus como fundamento de la República",
    texto:
      "Para los romanos, virtus era inseparable del deber cívico. Cicerón la definía como la disposición del alma conforme a la razón. Marco Aurelio la practicaba cada madrugada antes de que el mundo se despertara. No era un ideal abstracto: era una exigencia cotidiana que debía demostrarse en el foro, en el campo de batalla y en el hogar.",
  },
  {
    periodo: "Renacimiento · S. XV — XVI",
    titulo: "El hombre universal",
    texto:
      "Leon Battista Alberti lo formuló con claridad: el hombre puede hacer de sí mismo lo que quiera. El Renacimiento recuperó la convicción clásica de que la excelencia humana era alcanzable mediante el estudio, la disciplina y la voluntad. Leonardo, Dante, Maquiavelo: hombres que se forjaron a sí mismos con una ambición que no conocía límites cómodos.",
  },
];

export default function HistoriaPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}
      <section className="relative w-full h-[55vh] overflow-hidden">
        <Image
          src="/images/issue1.webp"
          alt="Historia de la virtud masculina"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
          style={{ objectPosition: "center 20%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 container mx-auto">
          <p className="text-[10px] uppercase tracking-[0.5em] text-accent mb-4 font-bold">
            Historia
          </p>
          <h1
            className="serif font-black leading-none text-foreground"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)", letterSpacing: "-0.03em" }}
          >
            El hombre a través<br />del tiempo
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="container mx-auto px-6 md:px-12 py-20 max-w-4xl">
        <p
          className="serif text-foreground/80 leading-relaxed"
          style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)" }}
        >
          La historia de la humanidad es, en buena parte, la historia de los hombres que eligieron
          ser más de lo que las circunstancias exigían. No porque tuvieran garantizado el éxito,
          sino porque entendían que la alternativa —la mediocridad elegida— era una forma de muerte
          en vida. Repasamos tres momentos en que esa convicción tomó forma definitiva.
        </p>
      </section>

      {/* Hitos */}
      <section className="container mx-auto px-6 md:px-12 pb-28 max-w-4xl">
        <div className="space-y-16">
          {hitos.map((hito, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 md:gap-12 items-start border-t border-black/8 pt-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold leading-relaxed">
                  {hito.periodo}
                </p>
              </div>
              <div>
                <h2 className="serif text-3xl font-black mb-4 text-foreground">{hito.titulo}</h2>
                <p className="text-gray-500 leading-relaxed text-base">{hito.texto}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-black/8 pt-10 flex justify-between items-center">
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
