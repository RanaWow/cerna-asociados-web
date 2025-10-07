'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Scale,
  Gavel,
  Building2,
  FileText,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  MessageCircle,
  Home,
  Briefcase,
} from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-blue-400/20 grid place-items-center border border-blue-400/40">
              <Scale className="h-5 w-5 text-blue-400" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold tracking-tight">Cerna &amp; Asociados</span>
              <span className="text-xs text-slate-400">
                Abogados · Derecho Administrativo · Laboral · Corretaje
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#areas" className="hover:text-white">Áreas</a>
            <a href="#sobre" className="hover:text-white">Sobre nosotros</a>
            <a href="#casos" className="hover:text-white">Casos</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contacto"
              className="inline-flex items-center rounded-2xl bg-blue-500 px-4 py-2 text-sm font-medium hover:bg-blue-600 transition"
            >
              Agenda una consulta
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* TITULAR PRINCIPAL */}
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
                Tu defensa y asesoría legal con
                <br className="hidden sm:block" />
                <span className="text-blue-400"> confianza y resultados</span>
              </h1>

              {/* ÁREAS: chips en móvil, texto lineal en desktop */}
              <div className="mt-4">
                {/* Desktop */}
                <p className="hidden sm:block text-blue-400 text-2xl font-semibold">
                  Laboral · Administrativo · Societario · Civil y Ejecutivo · Licitaciones Públicas · Corretaje
                </p>

                {/* Móvil */}
                <ul className="sm:hidden mt-3 flex flex-wrap gap-2">
                  {[
                    'Laboral',
                    'Administrativo',
                    'Societario',
                    'Civil y Ejecutivo',
                    'Licitaciones Públicas',
                    'Corretaje',
                  ].map((label) => (
                    <li
                      key={label}
                      className="text-blue-300 text-sm font-medium bg-blue-400/10 border border-blue-400/30 rounded-full px-3 py-1"
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botones principales */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center rounded-2xl bg-blue-500 px-4 py-2 text-sm font-medium hover:bg-blue-600 transition"
                >
                  Agenda tu consulta legal
                </a>
                <a
                  href="#areas"
                  className="inline-flex items-center rounded-2xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-900/60 transition"
                >
                  Conoce nuestras áreas de práctica
                </a>
              </div>

              {/* Frases pequeñas */}
              <div className="mt-6 flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" /> Estrategia con sustento legal
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> Respuesta oportuna
                </div>
                <div className="flex items-center gap-2">
                  <Gavel className="h-4 w-4" /> Enfoque en resultados
                </div>
              </div>
            </motion.div>

            {/* CUADRO DERECHA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-blue-500/20 blur-3xl rounded-[2rem]" />
                <div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <MiniFeature
                      icon={<Gavel className="h-5 w-5" />}
                      title="Derecho Laboral"
                      text="Despidos, tutela de derechos fundamentales, prácticas antisindicales y negociación."
                    />
                    <MiniFeature
                      icon={<Building2 className="h-5 w-5" />}
                      title="Derecho Administrativo"
                      text="Sumarios, estatutos (APS, Docente, Asistentes), probidad y responsabilidad."
                    />
                    <MiniFeature
                      icon={<Scale className="h-5 w-5" />}
                      title="Litigios Civiles y Ejecutivos"
                      text="Defensa en tribunales civiles; cobros ejecutivos, desalojos y medidas precautorias."
                    />
                    <MiniFeature
                      icon={<FileText className="h-5 w-5" />}
                      title="Contratación Pública"
                      text="Bases, licitaciones, impugnaciones y cumplimiento contractual."
                    />
                    <MiniFeature
                      icon={<Briefcase className="h-5 w-5" />}
                      title="Empresas y Sociedades"
                      text="Constitución, estatutos, actas y asesoría societaria."
                    />
                    <MiniFeature
                      icon={<Home className="h-5 w-5" />}
                      title="Corretaje de Propiedades"
                      text="Promesas, compraventas y gestión notarial/CBR."
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BOTÓN WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/56920437413?text=Hola%20Cerna%20%26%20Asociados%2C%20necesito%20asesor%C3%ADa%20legal."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-lg transition transform hover:scale-110 animate-[pulse_2s_ease-in-out_infinite]"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

/* ---- COMPONENTES ---- */

function MiniFeature({ icon, title, text }: any) {
  return (
    <div className="border border-slate-800 rounded-2xl p-4 bg-slate-900/40 hover:bg-slate-900/60 transition">
      <div className="flex items-center gap-2 mb-2 text-blue-400">
        {icon}
        <span className="font-semibold text-slate-200">{title}</span>
      </div>
      <p className="text-sm text-slate-400">{text}</p>
    </div>
  );
}
