'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Scale, ShieldCheck, MessageCircle, Mail, Gavel, Building2, FileText, Briefcase, Home, ArrowRight, Phone
} from 'lucide-react';

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-blue-600/10 grid place-items-center border border-blue-600/25">
              <Scale className="h-5 w-5 text-blue-600" />
            </div>
            <div className="leading-tight">
              <span className="font-semibold tracking-tight">Cerna &amp; Asociados</span>
              <span className="block text-xs text-slate-500">
                Abogados · Administrativo · Laboral · Corretaje
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#areas" className="hover:text-slate-900">Áreas</a>
            <a href="#sobre" className="hover:text-slate-900">Sobre nosotros</a>
            <a href="#casos" className="hover:text-slate-900">Casos</a>
            <a href="#contacto" className="hover:text-slate-900">Contacto</a>
          </nav>

          <a
            href="#contacto"
            className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition shadow-sm"
          >
            Agenda una consulta
          </a>
        </div>
      </header>

      {/* HERO CLARO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_10%_0%,rgba(37,99,235,0.08),transparent_60%)]" />
        <div className="absolute -right-32 top-24 h-80 w-80 bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                Tu defensa y asesoría legal con
                <span className="block text-blue-700">confianza y resultados</span>
              </h1>
              <p className="mt-5 text-lg text-slate-600">
                Representamos a personas y empresas en juicios laborales, administrativos,
                civiles y ejecutivos. También asesoramos en licitaciones públicas, constitución
                de sociedades y corretaje de propiedades. Trabajo serio, estratégico y cercano.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/56920437413?text=Hola%20Cerna%20%26%20Asociados%2C%20quisiera%20asesor%C3%ADa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 transition"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp inmediato
                </a>
                <a
                  href="mailto:cernayasociados.cl@gmail.com?subject=Consulta%20legal&body=Hola%2C%20quisiera%20asesor%C3%ADa..."
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
                >
                  <Mail className="h-4 w-4" /> Escribir por correo
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-600">
                <Badge icon={<ShieldCheck className="h-3.5 w-3.5" />}>Estrategia con sustento legal</Badge>
                <Badge icon={<Gavel className="h-3.5 w-3.5" />}>Enfoque en resultados</Badge>
                <Badge icon={<Phone className="h-3.5 w-3.5" />}>Respuesta oportuna</Badge>
              </div>
            </motion.div>

            {/* Tarjetas visuales (derecha) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              <MiniCard icon={<Gavel className="h-5 w-5" />} title="Derecho Laboral" text="Despidos, tutela de derechos y negociación." />
              <MiniCard icon={<Building2 className="h-5 w-5" />} title="Derecho Administrativo" text="Sumarios, estatutos, probidad y sanciones." />
              <MiniCard icon={<FileText className="h-5 w-5" />} title="Contratación Pública" text="Bases, impugnaciones y cumplimiento." />
              <MiniCard icon={<Briefcase className="h-5 w-5" />} title="Empresas y Sociedades" text="Constitución, actas y asesoría." />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ÁREAS (claro) */}
      <section id="areas" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">Áreas de práctica</h2>
          <p className="mt-3 text-slate-600">
            Experiencia en el mundo del trabajo, sector público, litigios civiles y ejecutivos,
            y servicios legales integrales en Chile.
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PracticeCard icon={<Gavel className="h-6 w-6" />} title="Laboral: individual y colectivo" bullets={["Despidos y cobros", "Tutela (Ley Karin)", "Jornadas y reglamento", "Negociación colectiva"]} />
          <PracticeCard icon={<Building2 className="h-6 w-6" />} title="Derecho Administrativo" bullets={["Sumarios", "Estatutos APS/Docente/Asistentes", "Probidad e incompatibilidades", "Contraloría y recursos"]} />
          <PracticeCard icon={<FileText className="h-6 w-6" />} title="Contratación Pública" bullets={["Bases y anexos", "Evaluación y adjudicación", "Reclamos/impugnaciones", "Ejecución y término"]} />
          <PracticeCard icon={<Scale className="h-6 w-6" />} title="Litigación" bullets={["Juzgados del Trabajo", "Tribunales Contencioso-Adm.", "Recursos de protección", "SUSESO y DT"]} />
          <PracticeCard icon={<Scale className="h-6 w-6" />} title="Civil y Ejecutivo" bullets={["Cobro de títulos", "Término de arriendo", "Desalojos", "Juicios declarativos/monitorios"]} />
          <PracticeCard icon={<Home className="h-6 w-6" />} title="Corretaje de propiedades" bullets={["Estudio de títulos", "Promesa y compraventa", "Gestión notarial y CBR", "Acompañamiento integral"]} />
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tight">Sobre nosotros</h2>
              <p className="mt-3 text-slate-600">
                Equipo con experiencia en Laboral, Administrativo, Contratación Pública y Societario.
                Integramos <strong>Corretaje de Propiedades</strong> con asesoría legal en cada etapa.
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <Stat number="10+" label="Años de experiencia" />
                <Stat number="300+" label="Escritos y presentaciones" />
                <Stat number="100%" label="Transparencia y ética" />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 space-y-3 shadow-sm">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-500" />
                <a href="tel:+56920437413" className="hover:underline">+56 9 2043 7413</a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-slate-500" />
                <a
                  className="text-blue-700 hover:underline"
                  target="_blank" rel="noopener noreferrer"
                  href="https://wa.me/56920437413?text=Hola%20Cerna%20%26%20Asociados%2C%20quisiera%20asesor%C3%ADa"
                >
                  WhatsApp inmediato
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-500" />
                <a href="mailto:cernayasociados.cl@gmail.com" className="text-blue-700 hover:underline">
                  cernayasociados.cl@gmail.com
                </a>
              </p>
              <p className="text-sm text-slate-500">Sujeto a secreto profesional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASOS */}
      <section id="casos" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">Experiencia y casos</h2>
          <p className="mt-3 text-slate-600">Ejemplos de asuntos trabajados (sin revelar datos sensibles):</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <CaseCard title="Tutela laboral y despidos" text="Defensas y demandas por vulneración de derechos fundamentales y despidos indebidos." />
          <CaseCard title="Procedimientos administrativos" text="Vistas fiscales, cargos, descargos y recursos administrativos." />
          <CaseCard title="Constitución de sociedades" text="Acompañamiento en constitución, estatutos y trámites de sociedades." />
        </div>
      </section>

      {/* CONTACTO (sin formulario, botones claros) */}
      <section id="contacto" className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">¿Hablamos de tu caso?</h2>
              <p className="mt-3 text-slate-600">
                Contáctanos por el canal que te acomode. Respondemos con alternativas y un plan de acción.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/56920437413?text=Hola%2C%20quisiera%20hacer%20una%20consulta"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 transition"
                >
                  <MessageCircle className="h-4 w-4" /> Escribir por WhatsApp
                </a>
                <a
                  href="mailto:cernayasociados.cl@gmail.com?subject=Consulta%20legal"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
                >
                  <Mail className="h-4 w-4" /> Enviar correo
                </a>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Tratamiento de datos personales conforme a Ley 19.628.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <ul className="space-y-2 text-slate-700">
                <li>• Atención online y presencial en Rancagua.</li>
                <li>• Honorarios a convenir según complejidad.</li>
                <li>• Este sitio es informativo y no constituye asesoría legal.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CLARO */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-blue-600/10 grid place-items-center border border-blue-600/25">
                <Scale className="h-5 w-5 text-blue-700" />
              </div>
              <span className="font-medium text-slate-800">Cerna &amp; Asociados</span>
            </div>
            <p className="mt-3 text-slate-600">Rancagua · Atención online y presencial</p>
          </div>
          <div>
            <p className="text-slate-800 font-medium">Legal</p>
            <ul className="mt-2 space-y-1 text-slate-600">
              <li><a className="hover:text-slate-900" href="#">Política de privacidad</a></li>
              <li><a className="hover:text-slate-900" href="#">Política de cookies</a></li>
              <li><a className="hover:text-slate-900" href="#">Términos y condiciones</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-slate-800 font-medium">Contacto</p>
            <p className="flex items-center gap-2 text-slate-700">
              <Phone className="h-4 w-4 text-slate-500" />
              <a href="tel:+56920437413" className="hover:underline">+56 9 2043 7413</a>
            </p>
            <p className="flex items-center gap-2 text-slate-700">
              <Mail className="h-4 w-4 text-slate-500" />
              <a href="mailto:cernayasociados.cl@gmail.com" className="hover:underline">
                cernayasociados.cl@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-slate-500 border-t border-slate-200">
          © {new Date().getFullYear()} Cerna &amp; Asociados. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

/* ====== Subcomponentes (claros) ====== */
function Badge({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-1 text-slate-700">
      {icon} {children}
    </span>
  );
}

function MiniCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 text-blue-700">
        {icon}
        <span className="font-medium">{title}</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}

function PracticeCard({ icon, title, bullets }: { icon: React.ReactNode; title: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 p-6">
        <div className="h-10 w-10 grid place-items-center rounded-2xl bg-blue-600/10 border border-blue-600/20 text-blue-700">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      </div>
      <div className="px-6 pb-6">
        <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
          {bullets.map((b, i) => (<li key={i}>{b}</li>))}
        </ul>
      </div>
    </div>
  );
}

function CaseCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
      <a href="#contacto" className="mt-4 inline-flex items-center gap-2 text-blue-700 hover:underline">
        Consultar <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="text-3xl font-bold text-blue-700">{number}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}
