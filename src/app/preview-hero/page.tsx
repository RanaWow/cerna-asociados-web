'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, ShieldCheck, MessageCircle, Mail } from 'lucide-react';
import Link from 'next/link'; // ✅ Import necesario para navegación interna

export default function PreviewHeroPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* NAV minimal para volver a Home */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-blue-400/20 grid place-items-center border border-blue-400/40">
              <Scale className="h-4 w-4 text-blue-400" />
            </div>
            <span className="font-semibold tracking-tight">Cerna &amp; Asociados – Demo Hero</span>
          </div>

          {/* ✅ Usa Link para la navegación interna */}
          <Link href="/" className="text-sm text-slate-300 hover:text-white transition">
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Hero nuevo */}
      <section className="relative overflow-hidden">
        {/* Fondo: gradiente sutil + glow */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_0%,rgba(59,130,246,0.18),transparent_60%)]" />
        <div className="absolute -right-32 top-24 h-96 w-96 bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 sm:pt-24 sm:pb-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* Texto principal */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                Tu defensa y asesoría legal con<br />
                <span className="text-blue-400">confianza y resultados</span>
              </h1>
              <p className="mt-6 text-slate-300 max-w-xl">
                Representamos a personas y empresas en juicios laborales, administrativos, civiles y
                ejecutivos. Asesoramos en licitaciones públicas, constitución de sociedades y corretaje de
                propiedades. Estrategia sólida y acompañamiento cercano.
              </p>
            </motion.div>

            {/* Iconos visuales (derecha) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              <div className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <ShieldCheck className="h-6 w-6 text-blue-400" />
                <span className="text-slate-200">Derecho Laboral</span>
              </div>

              <div className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <MessageCircle className="h-6 w-6 text-blue-400" />
                <span className="text-slate-200">Derecho Administrativo</span>
              </div>

              <div className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <Mail className="h-6 w-6 text-blue-400" />
                <span className="text-slate-200">Contratación Pública</span>
              </div>

              <div className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <Scale className="h-6 w-6 text-blue-400" />
                <span className="text-slate-200">Sociedades & Corretaje</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Imagen opcional (puedes activarla si subes /public/hero.jpg) */}
        {/*
        <div className="relative">
          <img src="/hero.jpg" alt="estudio jurídico" className="mt-4 w-full rounded-xl object-cover h-56 opacity-90" />
        </div>
        */}
      </section>
    </div>
  );
}
