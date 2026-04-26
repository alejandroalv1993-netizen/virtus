"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { user, loading } = useAuth();

  // If already logged in, redirect to dashboard
  if (user && !loading) {
    router.push("/admin/dashboard");
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin/dashboard");
    } catch (err: any) {
      setError("Credenciales inválidas. Solo el administrador tiene acceso.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full glass p-12"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black serif mb-2">VIRTUS</h1>
          <p className="text-xs uppercase tracking-widest text-accent">Panel de Control</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Correo</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/5 border border-black/10 px-6 py-4 focus:outline-none focus:border-accent transition-colors text-foreground"
              required
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/5 border border-black/10 px-6 py-4 focus:outline-none focus:border-accent transition-colors text-foreground"
              required
            />
          </div>

          {error && <p className="text-red-500 text-xs italic">{error}</p>}

          <button
            type="submit"
            className="w-full bg-foreground text-background py-4 uppercase text-xs font-bold tracking-widest hover:bg-accent hover:text-white transition-all shadow-lg"
          >
            Entrar
          </button>
        </form>
      </motion.div>
    </div>
  );
}
