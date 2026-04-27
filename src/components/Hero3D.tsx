"use client";

import { Canvas } from "@react-three/fiber";
import DavidModel from "./DavidModel";
import { Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const [frameloop, setFrameloop] = useState<"always" | "never">("always");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setFrameloop(entry.isIntersecting ? "always" : "never"),
      { threshold: 0 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-background">
      {/* 1. Placeholder Estático de Alta Prioridad para LCP */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
          <Image
            src="/images/logo.webp"
            alt="Virtus Placeholder"
            fill
            priority
            className="object-contain opacity-[0.03] grayscale scale-150"
          />
        </div>
      </div>

      {/* 2. El Texto: Renderizado inmediato fuera del Canvas */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center items-center">
        {/* Vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-background/40" />
        
        <h1
          className="serif font-black select-none leading-none text-center text-foreground/[0.08]"
          style={{
            fontSize: "clamp(5rem, 18vw, 16rem)",
            letterSpacing: "-0.04em",
          }}
        >
          VIRTUS
        </h1>
        <p
          className="text-xs uppercase tracking-[0.6em] mt-5 font-bold text-foreground/50"
        >
          Tradición &nbsp;·&nbsp; Honor &nbsp;·&nbsp; Historia
        </p>

        {/* Bottom-right label */}
        <div className="absolute bottom-[6rem] right-[3rem] text-right hidden md:block opacity-30">
          <p className="text-[10px] uppercase tracking-widest mb-2 text-foreground">Miguel Ángel, 1504</p>
          <p className="text-[10px] uppercase tracking-widest text-foreground">Il David — Florencia</p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-[2rem] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[9px] uppercase tracking-[0.4em] text-foreground/40">Scroll</span>
          <motion.div
            animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-accent origin-top"
          />
        </div>
      </div>

      {/* 3. El Canvas 3D: Carga en segundo plano */}
      <div className="absolute inset-0 z-10">
        <Suspense fallback={null}>
          <Canvas
            frameloop={frameloop}
            camera={{ position: [0, 0, 3], fov: 40 }}
            dpr={[1, 1.5]}
            gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
          >
            <ambientLight intensity={1.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
            <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={1} color="#9d824d" />
            <pointLight position={[0, 0, 5]} intensity={1} />

            <Suspense fallback={null}>
              <DavidModel />
            </Suspense>
          </Canvas>
        </Suspense>
      </div>
    </section>
  );
}
