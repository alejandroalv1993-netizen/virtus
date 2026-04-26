"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroEditorial() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yStatue = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-background flex items-center justify-center"
    >
      {/* Background Text */}
      <motion.div 
        style={{ y: yText, opacity }}
        className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0"
      >
        <h1 className="hero-text text-black/5 select-none">
          VIRTUS
        </h1>
        <div className="flex gap-24 mt-4 opacity-10">
          <span className="text-xs tracking-[1.5em] uppercase font-bold text-black">Tradición</span>
          <span className="text-xs tracking-[1.5em] uppercase font-bold text-black">Honor</span>
          <span className="text-xs tracking-[1.5em] uppercase font-bold text-black">Historia</span>
        </div>
      </motion.div>

      {/* Main Statue Image */}
      <motion.div
        style={{ y: yStatue, scale }}
        className="relative z-10 w-full max-w-4xl aspect-[4/5] md:aspect-auto md:h-[80vh] flex justify-center"
      >
        <img
          src="/images/hero-david.webp"
          alt="David de Miguel Ángel"
          className="h-full w-auto object-contain drop-shadow-[0_0_50px_rgba(0,0,0,0.05)]"
        />
        
        {/* Subtle radial gradient to blend the statue */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-background pointer-events-none" />
      </motion.div>

      {/* Foreground Content */}
      <div className="absolute bottom-24 left-0 w-full px-12 flex justify-between items-end z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-sm"
        >
          <p className="text-accent text-xs uppercase tracking-widest mb-4 font-bold">Estética Clásica</p>
          <h2 className="text-4xl serif leading-tight text-foreground">La Virtud del Hombre en el Mundo Moderno</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-right hidden md:block"
        >
          <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-4">Editorial N° 01</p>
          <p className="text-sm font-medium text-gray-500">Inspiración, Historia <br /> & Valores Atemporales</p>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-accent" />
      </motion.div>
    </section>
  );
}
