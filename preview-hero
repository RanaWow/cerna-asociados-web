'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, ShieldCheck, MessageCircle, Mail } from 'lucide-react';

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
            <span className="font-semibold tracking-tight">Cerna &amp; Asociados — Demo Hero</span>
          </div>
          <a href="/" className="text-sm text-slate-300 hover:text-white">Volver al inicio</a>
        </div>
      </header>

      {/* HERO nuevo */}
      <section className="relative overflow-hidden">
        {/* Fondo: gradiente sutil + glow */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_0%,rgba(59,130,246,0.18),transparent_60%)]" />
        <div className="absolute -right-32 -top-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-14 sm:pt-24 sm:pb-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Texto compacto */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                Tu defensa y asesoría legal con<br/>
                <span className="text-blue-400">confianza y resultados</span>
              </h1>

              {/* Etiquetas en vez de una línea larga */}
              <div className="mt-4 flex flex-wrap gap-2">
                {['Laboral','Administrativo','Societario','Civil','Ejecutivo','Corretaje'].map(tag => (
                  <span key={tag}
                        className="text-sm px-3 py-1 rounded-full border border-slate-700/80 bg-slate-900/60 text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Micro-beneficios muy cortos */}
              <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Estrategia sólida</span>
                <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Respuesta rápida</span>
                <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Acompañamiento cercano</span>
              </div>

              {/* CTAs principales */}
              <div className="mt-7 flex flex-wrap gap-3">
                {/* WhatsApp con “latido” */}
                <a
                  href="https://wa.me/56920437413?text=Hola%20Cerna%20%26%20Asociados%2C%20quisiera%20agendar%20una%20consulta."
                  target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3 text-sm font-medium text-slate-950
                             shadow-lg hover:shadow-xl transition-transform
                             animate-[pulse_2.4s_ease-in-out_infinite]">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp inmediato
                </a>

                {/* Correo */}
                <a
                  href="mailto:cernayasociados.cl@gmail.com?subject=Consulta%20legal&body=Hola,%20quisiera%20hacer%20una%20consulta..."
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 px-5 py-3 text-sm font-medium
                             text-slate-200 hover:bg-slate-900/60 transition">
                  <Mail className="h-5 w-5" />
                  Enviar correo
                </a>
              </div>

              {/* Texto SEO opcional, corto */}
              <p className="mt-5 max-w-xl text-slate-400">
                Abordamos litigios laborales, administrativos, civiles y societarios; más contratación pública y corretaje,
                con enfoque en resultados y trato cercano.
              </p>
            </motion.div>

            {/* Lado visual (sin imágenes externas). Puedes reemplazar por /public/hero.jpg cuando quieras */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}>
              <div className="relative">
                <div className="absolute -inset-1 bg-blue-500/20 blur-2xl rounded-[2rem]" />
                <div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                  {/* Tarjeta simulando “portafolio” para dar ritmo visual */}
                  <div className="grid gap-4">
                    <div className="rounded-2xl border border-slate-800 p-5">
                      <p className="text-sm text-slate-400">Casos recientes</p>
                      <ul className="mt-2 space-y-1 text-slate-200 text-sm">
                        <li>• Tutela laboral y despido injustificado</li>
                        <li>• Sumario administrativo con descargos</li>
                        <li>• Cobro ejecutivo y medidas precautorias</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-slate-800 p-5">
                      <p className="text-sm text-slate-400">Cómo trabajamos</p>
                      <ul className="mt-2 space-y-1 text-slate-200 text-sm">
                        <li>• Diagnóstico claro</li>
                        <li>• Estrategia y plazos</li>
                        <li>• Comunicación permanente</li>
                      </ul>
                    </div>
                  </div>

                  {/* Si luego agregas /public/hero.jpg, descomenta esto:
                  <img src="/hero.jpg" alt="Estudio jurídico"
                       className="mt-4 w-full rounded-xl object-cover h-56 opacity-90" />
                  */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
