'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Scale,
  ShieldCheck,
  MessageCircle,
  Mail,
  Gavel,
  Building2,
  FileText,
  Briefcase,
  Home,
  ArrowRight,
  Phone,
} from 'lucide-react';

export default function PreviewHeroPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 relative overflow-hidden">
      {/* ===== Fondo artístico: malla + halos + noise ===== */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(800px 400px at 15% -10%, rgba(59,130,246,0.15), transparent 60%),
            radial-gradient(800px 400px at 85% 10%, rgba(14,165,233,0.12), transparent 60%),
            radial-gradient(700px 350px at 50% 110%, rgba(59,130,246,0.10), transparent 60%),
            linear-gradient(transparent 0%, rgba(2,6,23,0.4) 100%)
          `,
        }}
      />
      {/* Tramas diagonales suaves */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            'linear-gradient(135deg, #fff 1px, transparent 1px), linear-gradient(225deg, #fff 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          backgroundPosition: '0 0, 11px 11px',
        }}
      />
      {/* Ruido suave */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"60\\" height=\\"60\\"><filter id=\\"n\\"><feTurbulence type=\\"fractalNoise\\" baseFrequency=\\"0.8\\" numOctaves=\\"2\\"/></filter><rect width=\\"100%\\" height=\\"100%\\" filter=\\"url(%23n)\\" opacity=\\"0.5\\"/></svg>")',
          backgroundSize: '140px 140px',
        }}
      />

      {/* ===== NAV ===== */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-blue-400/15 grid place-items-center border border-blue-400/25">
              <Scale className="h-4 w-4 text-blue-400" />
            </div>
            <span className="font-semibold tracking-tight text-slate-100">
              Cerna &amp; Asociados — Demo
            </span>
          </div>
          <Link href="/" className="text-sm text-slate-300 hover:text-white transition">
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Texto principal */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-[2.4rem] sm:text-5xl font-extrabold leading-tight tracking-tight text-slate-100">
                Tu defensa y asesoría legal con{' '}
                <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  confianza y resultados
                </span>
              </h1>

              <p className="mt-5 text-slate-300/90 text-lg max-w-2xl">
                Representamos a personas y empresas en{' '}
                <span className="text-slate-200">juicios laborales, administrativos, civiles y ejecutivos</span>. También
                asesoramos en <span className="text-slate-200">licitaciones públicas, constitución de sociedades</span> y{' '}
                <span className="text-slate-200">corretaje de propiedades</span>. Enfoque estratégico, tiempos oportunos y
                trato cercano.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition shadow-[0_0_0_1px_rgba(59,130,246,0.35)]"
                >
                  Agenda una consulta <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#areas"
                  className="inline-flex items-center rounded-2xl border border-slate-700/70 bg-slate-900/50 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-900/80 transition"
                >
                  Áreas de práctica
                </a>
              </div>
            </motion.div>

            {/* Tarjetas de áreas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              <MiniCard icon={<Gavel className="h-5 w-5" />} title="Derecho Laboral" text="Despidos, tutela y prácticas antisindicales." />
              <MiniCard icon={<Building2 className="h-5 w-5" />} title="Derecho Administrativo" text="Sumarios, estatutos APS/Docente, probidad." />
              <MiniCard icon={<Scale className="h-5 w-5" />} title="Litigios Civiles y Ejecutivos" text="Cobros, desalojos y precautorias." />
              <MiniCard icon={<FileText className="h-5 w-5" />} title="Contratación Pública" text="Bases, impugnaciones y cumplimiento." />
              <MiniCard icon={<Briefcase className="h-5 w-5" />} title="Empresas y Sociedades" text="Constitución, estatutos y actas." />
              <MiniCard icon={<Home className="h-5 w-5" />} title="Corretaje de Propiedades" text="Promesas, compraventas y gestión notarial." />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== BOTÓN FLOTANTE WHATSAPP ===== */}
      <a
        href="https://wa.me/56920437413?text=Hola%20Cerna%20%26%20Asociados%2C%20quisiera%20hacer%20una%20consulta."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        title="Escríbenos por WhatsApp"
        className="group fixed right-5 bottom-5 z-50"
      >
        <span className="absolute inset-0 -m-1 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition pointer-events-none shine"></span>
        <span className="absolute -left-[165px] top-1/2 -translate-y-1/2 hidden md:block px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/70 text-slate-200 text-[12px] font-medium opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition">
          ¿Necesitas ayuda? <span className="text-slate-400">Escríbenos</span>
          <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 rotate-45 h-3 w-3 bg-slate-900/90 border-r border-b border-slate-700/70"></span>
        </span>
        <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-1 ring-black/10 hover:scale-[1.04] transition-transform">
          <span className="absolute inset-0 rounded-full animate-pulse bg-[#25D366]/25"></span>
          <svg viewBox="0 0 32 32" aria-hidden="true" className="relative h-7 w-7" fill="currentColor">
            <path d="M19.11 17.39c-.3-.15-1.73-.85-2-.95s-.46-.15-.65.15-.75.95-.92 1.15-.34.22-.63.07a6.63 6.63 0 0 1-1.95-1.2 7.3 7.3 0 0 1-1.35-1.67c-.14-.23 0-.36.1-.5s.23-.27.34-.42a1.65 1.65 0 0 0 .22-.37.45.45 0 0 0 0-.42c0-.15-.64-1.56-.88-2.13s-.47-.5-.65-.5h-.55a1 1 0 0 0-.73.34 3.06 3.06 0 0 0-.96 2.27 5.31 5.31 0 0 0 1.11 2.84 12.12 12.12 0 0 0 4.64 4.18 15.86 15.86 0 0 0 1.58.58 3.8 3.8 0 0 0 1.74.11 2.83 2.83 0 0 0 1.86-1.31 2.33 2.33 0 0 0 .16-1.31c-.05-.08-.24-.15-.54-.3zM16.02 3.2A12.79 12.79 0 0 0 3.2 15.99a12.6 12.6 0 0 0 1.74 6.42L3 29l6.76-1.78a12.86 12.86 0 0 0 6.25 1.6h.01a12.79 12.79 0 0 0 12.79-12.79A12.72 12.72 0 0 0 16.02 3.2zm7.54 20.33a10.86 10.86 0 0 1-7.55 3.13h-.01a10.94 10.94 0 0 1-5.56-1.5l-.4-.24-4.01 1.05 1.07-3.91-.26-.4a10.93 10.93 0 0 1-1.68-5.81 10.88 10.88 0 0 1 18.57-7.68 10.73 10.73 0 0 1 3.15 7.54 10.85 10.85 0 0 1-3.32 7.22z" />
          </svg>
        </span>
      </a>

      {/* ===== Estilos extra para brillo giratorio ===== */}
      <style jsx global>{`
        .shine {
          background: radial-gradient(60% 60% at 50% 50%, rgba(37, 211, 102, 0.35), transparent 60%),
            conic-gradient(
              from 0deg,
              rgba(37, 211, 102, 0.0),
              rgba(37, 211, 102, 0.2),
              rgba(37, 211, 102, 0.0)
            );
          animation: spin 6s linear infinite;
          filter: blur(8px);
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

function MiniCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 hover:bg-slate-900/80 transition">
      <div className="flex items-center gap-2 text-blue-300">
        {icon}
        <span className="font-medium text-slate-100">{title}</span>
      </div>
      <p className="mt-2 text-sm text-slate-300/90">{text}</p>
    </div>
  );
}
