import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const valores = [
  {
    numero: "I",
    nombre: "Identidad",
    descripcion:
      "Conocerse a uno mismo no es un ejercicio de autocomplacencia. Es la base sin la cual ninguna acción tiene dirección. El hombre que no sabe quién es acepta la identidad que otros le impongan. El que sí lo sabe puede elegir con libertad real a qué dedica su tiempo, su energía y su lealtad.",
    imagen: "/images/tradicion.webp",
  },
  {
    numero: "II",
    nombre: "Disciplina",
    descripcion:
      "La libertad no es la ausencia de límites: es el dominio sobre uno mismo. La disciplina no es el yugo que te impone el mundo, sino el que tú te impones a ti mismo porque entiendes que sin estructura no hay excelencia posible. Cada hábito cultivado con constancia es una declaración de intenciones sobre quién eliges ser.",
    imagen: "/images/habitos.webp",
  },
  {
    numero: "III",
    nombre: "Honor",
    descripcion:
      "El honor es la coherencia entre lo que dices ser y lo que demuestras ser. No es una virtud que se proclame: es una que se observa. Un hombre honorable cumple su palabra aunque nadie lo vea, protege lo que le han confiado y responde de sus actos sin excusas. En un mundo de escapismos, el honor es un acto radical.",
    imagen: "/images/bg-tradicion.webp",
  },
  {
    numero: "IV",
    nombre: "Legado",
    descripcion:
      "¿Qué dejará de ti el tiempo? El hombre que piensa solo en el presente vive para sí mismo. El que piensa en el legado vive también para los que vendrán. Puede ser una obra, una familia, una enseñanza o un ejemplo. La forma importa menos que la intención: construir algo que trascienda la propia comodidad.",
    imagen: "/images/bg-habitos.webp",
  },
];

export default function ValoresPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 pt-40 pb-16 max-w-4xl">
        <p className="text-[10px] uppercase tracking-[0.5em] text-accent mb-5 font-bold">
          Pilares de Excelencia
        </p>
        <h1
          className="serif font-black leading-none text-foreground mb-8"
          style={{ fontSize: "clamp(3rem, 7vw, 6rem)", letterSpacing: "-0.03em" }}
        >
          Los valores<br />que nos definen
        </h1>
        <p className="text-gray-500 text-base leading-relaxed max-w-xl">
          Cuatro principios que no cambian con las modas ni se negocian con la conveniencia.
          La arquitectura de un carácter que merece durar.
        </p>
      </section>

      {/* Valores */}
      <section className="container mx-auto px-6 md:px-12 pb-28 max-w-4xl">
        <div className="space-y-0">
          {valores.map((v, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-black/8"
            >
              {/* Image */}
              <div
                className={`relative h-64 md:h-80 overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <Image
                  src={v.imagen}
                  alt={v.nombre}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-75 hover:opacity-90 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
              </div>

              {/* Text */}
              <div className={`flex flex-col justify-center p-8 md:p-12 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <span className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold mb-4">
                  {v.numero}
                </span>
                <h2 className="serif text-4xl font-black mb-5 text-foreground">{v.nombre}</h2>
                <p className="text-gray-500 leading-relaxed text-sm">{v.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-black/8 flex justify-between items-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/30">
            Virtus · Editorial N° 01
          </p>
          <Link
            href="/tradicion"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:text-accent transition-all"
          >
            Tradición <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </main>
  );
}
