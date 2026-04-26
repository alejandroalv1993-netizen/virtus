import Link from "next/link";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Historia", href: "/historia" },
  { name: "Valores", href: "/valores" },
  { name: "Tradición", href: "/tradicion" },
  { name: "Archivo", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-black/8">
      <div className="container mx-auto px-6 py-16">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-3 font-bold">Editorial N° 01</p>
            <span className="serif text-4xl font-black tracking-tighter text-foreground">VIRTUS</span>
            <p className="text-xs text-foreground/40 mt-2 max-w-[220px] leading-relaxed">
              Tradición, honor e identidad.<br />Para el hombre que no olvida sus raíces.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-widest text-foreground/50 hover:text-accent transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-black/6 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-foreground/30">
          <p>© {new Date().getFullYear()} Virtus — Todos los derechos reservados</p>
          <p className="hidden md:block">
            <span className="italic normal-case tracking-normal font-light serif text-foreground/20 text-xs">
              Virtus, virtutis — excelencia, valor, carácter
            </span>
          </p>
          <p>Hecho con disciplina</p>
        </div>

      </div>
    </footer>
  );
}
