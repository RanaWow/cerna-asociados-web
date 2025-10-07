'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  Scale, Gavel, Building2, FileText, Phone, Mail, MapPin, Clock,
  ShieldCheck, ArrowRight, MessageCircle, Home, Briefcase,
} from 'lucide-react';

export default function Page() {
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_0%,rgba(59,130,246,0.16),transparent_60%)]" />
        <div className="pointer-events-none absolute -right-28 top-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Tu defensa y asesoría legal con<br />
                <span className="text-blue-400">confianza y resultados</span>
              </h1>

              {/* Chips (móvil ordenado, sin guiones sueltos) */}
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

              {/* Párrafo principal (si quieres eliminar, borra este <p>) */}
              <p className="mt-6 max-w-xl text-slate-300">
                Representamos a personas y empresas en juicios laborales, administrativos,
                civiles y ejecutivos. También asesoramos en licitaciones, sociedades y
                corretaje de propiedades.
              </p>

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
            Experiencia en mundo del trabajo, sector público, litigios civiles y ejecutivos,
            y servicios legales integrales en Chile.
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
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="sobre" className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight">Sobre nosotros</h2>
            <p className="mt-3 text-slate-300">
              Somos un equipo con experiencia en Laboral, Administrativo, Contratación Pública y
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
              <a href="tel:+56920437413" className="hover:underline">+56 9 2043 7413</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:cernayasociados.cl@gmail.com" className="text-blue-400 hover:underline">
                cernayasociados.cl@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Rancagua / Chile (online y presencial)
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> L–V 09:00 a 18:00
            </p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Hablemos de tu caso</h2>
            <p className="mt-3 text-slate-300">
              Contáctanos por WhatsApp o correo electrónico:
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/56920437413?text=Hola%20Cerna%20%26%20Asociados%2C%20quisiera%20hacer%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3 font-medium text-white transition hover:bg-[#128C7E] animate-[pulse_2s_ease-in-out_infinite]"
              >
                <span className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-[#25D366]/30 blur-xl" />
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>

              <a
                href="mailto:cernayasociados.cl@gmail.com?subject=Consulta%20Legal"
                className="flex items-center justify-center gap-2 rounded-2xl bg-blue-500 px-5 py-3 font-medium text-white transition hover:bg-blue-600"
              >
                <Mail className="h-5 w-5" /> Correo
              </a>
            </div>

            <p className="mt-2 text-xs text-slate-400">
              Atención online y presencial · L–V 09:00 a 18:00
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
              <li><a href="#" className="hover:text-slate-200">Cookies</a></li>
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

      {/* BOTÓN FLOTANTE WHATSAPP (glow + ping) */}
      <a
        href="https://wa.me/56920437413?text=Hola%2C%20quiero%20hacer%20una%20consulta"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        title="WhatsApp"
        className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors hover:bg-[#128C7E]"
      >
        <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#25D366]/30 blur-xl" />
        <span className="pointer-events-none absolute inset-0 -z-10 rounded-full ring-2 ring-[#25D366]/40 animate-[ping_1.8s_ease-in-out_infinite]" />
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}

/* ---------- COMPONENTES ---------- */
type MiniFeatureProps = { icon: ReactNode; title: string; text: string };
function MiniFeature({ icon, title, text }: MiniFeatureProps) {
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

type PracticeCardProps = { icon: ReactNode; title: string; bullets: string[] };
function PracticeCard({ icon, title, bullets }: PracticeCardProps) {
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

type StatProps = { number: string; label: string };
function Stat({ number, label }: StatProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <div className="text-3xl font-bold text-blue-400">{number}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}
