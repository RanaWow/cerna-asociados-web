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
  ArrowRight,
  MessageCircle,
  Home,
  Briefcase,
} from 'lucide-react';

/* =========================================
 *  Página completa
 * =======================================*/
export default function Page(): JSX.Element {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-800 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-xl border border-blue-400/40 bg-blue-400/20">
              <Scale className="h-5 w-5 text-blue-400" />
            </div>
            <div className="leading-tight">
              <span className="font-semibold tracking-tight">Cerna &amp; Asociados</span>
              <span className="block text-xs text-slate-400">
                Abogados · Derecho Administrativo · Laboral · Corretaje
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#areas" className="hover:text-white">Áreas</a>
            <a href="#sobre" className="hover:text-white">Sobre nosotros</a>
            <a href="#casos" className="hover:text-white">Casos</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </nav>

          <a
            href="#contacto"
            className="inline-flex items-center rounded-2xl bg-blue-500 px-4 py-2 text-sm font-medium transition hover:bg-blue-600"
          >
            Agenda una consulta
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Fondo suave con halo */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_0%,rgba(59,130,246,0.16),transparent_60%)]" />
        <div className="pointer-events-none absolute -right-28 top-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Texto principal */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Tu defensa y asesoría legal con<br />
                <span className="text-blue-400">confianza y resultados</span>
              </h1>

              {/* Chips (móvil ordenado, sin guiones) */}
              <ul className="mt-5 flex flex-wrap gap-2">
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
                    className="rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-1 text-sm text-blue-300"
                  >
                    {label}
                  </li>
                ))}
              </ul>

              {/* Bajada corta y clara */}
              <p className="mt-6 max-w-xl text-slate-300">
                Representamos a personas y empresas en juicios laborales, administrativos,
                civiles y ejecutivos. También asesoramos en licitaciones, sociedades y corretaje de propiedades.
              </p>

              {/* CTA */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center rounded-2xl bg-blue-500 px-4 py-2 text-sm font-medium transition hover:bg-blue-600"
                >
                  Agenda tu consulta legal
                </a>
                <a
                  href="#areas"
                  className="inline-flex items-center rounded-2xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-900/60"
                >
                  Conoce nuestras áreas de práctica
                </a>
              </div>

              {/* Sellos */}
              <div className="mt-6 flex items-center gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" /> Estrategia con sustento legal
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> Respuesta oportuna
                </span>
                <span className="flex items-center gap-2">
                  <Gavel className="h-4 w-4" /> Enfoque en resultados
                </span>
              </div>
            </motion.div>

            {/* Tarjetas rápidas al lado */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-[2rem] bg-blue-500/15 blur-3xl" />
                <div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
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
                      text="Defensa civil; cobros ejecutivos, desalojos y medidas precautorias."
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

      {/* ÁREAS */}
      <section id="areas" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">Áreas de práctica</h2>
          <p className="mt-3 text-slate-300">
            Experiencia en mundo del trabajo, sector público, litigios civiles y ejecutivos, y servicios
            legales integrales en Chile.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PracticeCard
            icon={<Gavel className="h-6 w-6" />}
            title="Laboral: individual y colectivo"
            bullets={[
              'Despidos y cobros',
              'Tutela de derechos (Ley Karin)',
              'Reglamento interno y jornadas',
              'Negociación colectiva',
            ]}
          />
          <PracticeCard
            icon={<Building2 className="h-6 w-6" />}
            title="Derecho Administrativo"
            bullets={[
              'Sumarios y vistas fiscales',
              'Estatutos (APS, Docente, Asistentes)',
              'Probidad e incompatibilidades',
              'Contraloría y recursos',
            ]}
          />
          <PracticeCard
            icon={<FileText className="h-6 w-6" />}
            title="Contratación Pública"
            bullets={[
              'Bases y anexos',
              'Evaluación y adjudicación',
              'Impugnaciones y reclamos',
              'Ejecución y término anticipado',
            ]}
          />
          <PracticeCard
            icon={<Scale className="h-6 w-6" />}
            title="Litigación"
            bullets={[
              'Juzgados del Trabajo',
              'Tribunales Contencioso-Adm.',
              'Recursos de protección',
              'SUSESO, DT y fiscalizadores',
            ]}
          />
          <PracticeCard
            icon={<Scale className="h-6 w-6" />}
            title="Civil y Ejecutivo"
            bullets={[
              'Cobro de títulos ejecutivos',
              'Término de arriendo y desalojos',
              'Lanzamiento y monitorios',
              'Juicios declarativos',
            ]}
          />
          <PracticeCard
            icon={<Briefcase className="h-6 w-6" />}
            title="Empresas y Sociedades"
            bullets={[
              'Constitución de sociedades',
              'Estatutos y actas',
              'Asesoría societaria',
              'Modificaciones y disoluciones',
            ]}
          />
          <PracticeCard
            icon={<Home className="h-6 w-6" />}
            title="Corretaje de propiedades"
            bullets={[
              'Búsqueda y negociación asistida',
              'Estudio de títulos y due diligence',
              'Promesa y compraventa',
              'Gestión notarial y CBR',
            ]}
          />
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="sobre" className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight">Sobre nosotros</h2>
            <p className="mt-3 text-slate-300">
              Somos un equipo en crecimiento con experiencia en Laboral, Administrativo, Contratación Pública y
              Societario. Integramos el Corretaje de Propiedades con acompañamiento legal desde la promesa hasta la
              compraventa.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Stat number="10+" label="Años de experiencia" />
              <Stat number="300+" label="Escritos y presentaciones" />
              <Stat number="100%" label="Transparencia y ética" />
            </div>
          </div>

          <div className="space-y-3 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-slate-300">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+56920437413" className="hover:underline">
                +56 9 2043 7413
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:cernayasociados.cl@gmail.com" className="text-blue-400 hover:underline">
                cernayasociados.cl@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <a
                href="https://wa.me/56920437413?text=Hola%20Cerna%20%26%20Asociados%2C%20necesito%20asesor%C3%ADa%20legal."
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                WhatsApp: +56 9 2043 7413
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Rancagua / Chile (online y presencial)
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> L–V 09:00 a 18:00
            </p>
            <p className="text-sm text-slate-400">Sujeto a secreto profesional.</p>
          </div>
        </div>
      </section>

      {/* CASOS */}
      <section id="casos" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">Experiencia y casos</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <CaseCard
            title="Tutela laboral y despidos"
            text="Defensas y demandas por vulneración de derechos fundamentales y despidos indebidos."
          />
          <CaseCard
            title="Procedimientos administrativos"
            text="Vistas fiscales, cargos, descargos y recursos administrativos."
          />
          <CaseCard
            title="Constitución de sociedades"
            text="Acompañamiento en constitución, estatutos y trámites de sociedades."
          />
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Hablemos de tu caso</h2>
            <p className="mt-3 text-slate-300">
              Contáctanos de la forma más rápida. Estamos disponibles por WhatsApp o correo electrónico:
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                {/* WhatsApp con pulso + glow */}
                <a
                  href="https://wa.me/56920437413?text=Hola%20Cerna%20%26%20Asociados%2C%20quisiera%20hacer%20una%20consulta%20legal."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3 font-medium text-white transition hover:bg-[#128C7E] animate-[pulse_2s_ease-in-out_infinite]"
                >
                  {/* halo */}
                  <span className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-[#25D366]/30 blur-xl" />
                  <MessageCircle className="h-5 w-5" /> WhatsApp
                </a>

                <a
                  href="mailto:cernayasociados.cl@gmail.com?subject=Consulta%20Legal&body=Hola%2C%20quisiera%20asesor%C3%ADa%20en..."
                  className="flex items-center justify-center gap-2 rounded-2xl bg-blue-500 px-5 py-3 font-medium text-white transition hover:bg-blue-600"
                >
                  <Mail className="h-5 w-5" /> Correo electrónico
                </a>
              </div>

              <p className="text-xs text-slate-400">Atención online y presencial · L–V 09:00 a 18:00</p>
            </div>
          </div>

          <div className="space-y-3 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-slate-300">
            <p>
              • Tratamiento de datos personales conforme a Ley 19.628.<br />
              • Cookies y analítica con consentimiento informado.<br />
              • Honorarios a convenir.
            </p>
            <p className="text-sm text-slate-400">
              *Este sitio es informativo y no constituye asesoría legal. Cada caso requiere análisis específico.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 text-sm text-slate-400 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-xl border border-blue-400/40 bg-blue-400/20">
                <Scale className="h-5 w-5 text-blue-400" />
              </div>
              <span className="font-medium text-slate-200">Cerna &amp; Asociados</span>
            </div>
            <p className="mt-3">Rancagua · Atención online y presencial</p>
          </div>

          <div>
            <p className="font-medium text-slate-200">Legal</p>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:text-slate-200">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-slate-200">Política de cookies</a></li>
              <li><a href="#" className="hover:text-slate-200">Términos y condiciones</a></li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-slate-200">Contacto</p>
            <p className="mt-2 flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+56920437413" className="hover:underline">+56 9 2043 7413</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:cernayasociados.cl@gmail.com" className="hover:underline">
                cernayasociados.cl@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Cerna &amp; Asociados. Todos los derechos reservados.
        </div>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP (global) */}
      <a
        href="https://wa.me/56920437413?text=Hola%2C%20quiero%20hacer%20una%20consulta"
        target="_blank"
        rel="noopener"
        aria-label="Escríbenos por WhatsApp"
        title="WhatsApp"
        className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors hover:bg-[#128C7E]"
      >
        {/* halo */}
        <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#25D366]/30 blur-xl" />
        {/* pulso */}
        <span className="pointer-events-none absolute inset-0 -z-10 rounded-full ring-2 ring-[#25D366]/40 animate-[ping_1.8s_ease-in-out_infinite]" />
        {/* ícono */}
        <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7" fill="currentColor">
          <path d="M19.11 17.39c-.3-.15-1.73-.85-2-.95s-.46-.15-.65.15-.75.95-.92 1.15-.34.22-.63.07a6.63 6.63 0 0 1-1.95-1.2 7.3 7.3 0 0 1-1.35-1.67c-.14-.23 0-.36.1-.5s.23-.27.34-.42a1.65 1.65 0 0 0 .22-.37.45.45 0 0 0 0-.42c0-.15-.64-1.56-.88-2.13s-.47-.5-.65-.5h-.55a1 1 0 0 0-.73.34 3.06 3.06 0 0 0-.96 2.27 5.31 5.31 0 0 0 1.11 2.84 12.12 12.12 0 0 0 4.64 4.18 15.86 15.86 0 0 0 1.58.58 3.8 3.8 0 0 0 1.74.11 2.83 2.83 0 0 0 1.86-1.31 2.33 2.33 0 0 0 .16-1.31c-.05-.08-.24-.15-.54-.3zM16.02 3.2A12.79 12.79 0 0 0 3.2 15.99a12.6 12.6 0 0 0 1.74 6.42L3 29l6.76-1.78a12.86 12.86 0 0 0 6.25 1.6h.01a12.79 12.79 0 0 0 12.79-12.79A12.72 12.72 0 0 0 16.02 3.2zm7.54 20.33a10.86 10.86 0 0 1-7.55 3.13h-.01a10.94 10.94 0 0 1-5.56-1.5l-.4-.24-4.01 1.05 1.07-3.91-.26-.4a10.93 10.93 0 0 1-1.68-5.81 10.88 10.88 0 0 1 18.57-7.68 10.73 10.73 0 0 1 3.15 7.54 10.85 10.85 0 0 1-3.32 7.22z" />
        </svg>
        <span className="sr-only">Abrir WhatsApp</span>
      </a>
    </div>
  );
}

/* =========================================
 *  Componentes reutilizables (tipados)
 * =======================================*/
type MiniFeatureProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

function MiniFeature({ icon, title, text }: MiniFeatureProps): JSX.Element {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <div className="flex items-center gap-2 text-blue-400">
        {icon}
        <span className="font-medium">{title}</span>
      </div>
      <p className="mt-2 text-sm text-slate-300">{text}</p>
    </div>
  );
}

type PracticeCardProps = {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
};

function PracticeCard({ icon, title, bullets }: PracticeCardProps): JSX.Element {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60">
      <div className="flex items-center gap-3 p-6">
        <div className="grid h-10 w-10 place-items-center rounded-2xl border border-blue-400/30 bg-blue-400/15 text-blue-400">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="px-6 pb-6">
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
          {bullets.map((b, i) => (
            <li key={`${title}-${i}`}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

type CaseCardProps = {
  title: string;
  text: string;
};

function CaseCard({ title, text }: CaseCardProps): JSX.Element {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{text}</p>
      <a href="#contacto" className="mt-4 inline-flex items-center gap-2 text-blue-400 hover:underline">
        Consultar <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

type StatProps = {
  number: string;
  label: string;
};

function Stat({ number, label }: StatProps): JSX.Element {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <div className="text-3xl font-bold text-blue-400">{number}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}
