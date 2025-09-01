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
              <span className="text-xs text-slate-400">Abogados · Derecho Administrativo · Laboral · Corretaje</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#areas" className="hover:text-white">Áreas</a>
            <a href="#sobre" className="hover:text-white">Sobre nosotros</a>
            <a href="#casos" className="hover:text-white">Casos</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contacto" className="inline-flex items-center rounded-2xl bg-blue-500 px-4 py-2 text-sm font-medium hover:bg-blue-600 transition">
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
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                Defensa y asesoría estratégica
                <span className="block text-blue-400">Laboral, Administrativo, Sociedades &amp; Corretaje</span>
              </h1>
              <p className="mt-4 text-slate-300 text-lg">
                Acompañamos a personas y empresas en juicios laborales, procedimientos administrativos, contratación pública, litigios,
                <strong> constitución de sociedades</strong> y <strong> corretaje de propiedades</strong> con respaldo jurídico integral.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contacto" className="inline-flex items-center rounded-2xl bg-blue-500 px-4 py-2 text-sm font-medium hover:bg-blue-600 transition">Agenda una reunión</a>
                <a href="#areas" className="inline-flex items-center rounded-2xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-900/60 transition">Ver áreas de práctica</a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Estrategia con sustento legal</div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Respuesta oportuna</div>
                <div className="flex items-center gap-2"><Gavel className="h-4 w-4" /> Enfoque en resultados</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="relative">
                <div className="absolute -inset-1 bg-blue-500/20 blur-3xl rounded-[2rem]" />
                <div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <MiniFeature icon={<Gavel className="h-5 w-5" />} title="Derecho Laboral" text="Despidos, tutela de derechos fundamentales, prácticas antisindicales y negociación." />
                    <MiniFeature icon={<Building2 className="h-5 w-5" />} title="Derecho Administrativo" text="Sumarios, estatutos (APS, Docente, Asistentes), probidad y responsabilidad." />
                    <MiniFeature icon={<FileText className="h-5 w-5" />} title="Contratación Pública" text="Bases, licitaciones, impugnaciones y cumplimiento contractual." />
                    <MiniFeature icon={<Scale className="h-5 w-5" />} title="Litigios" text="Presentaciones, recursos y defensa en tribunales." />
                    <MiniFeature icon={<Briefcase className="h-5 w-5" />} title="Empresas y Sociedades" text="Constitución, estatutos, actas y asesoría societaria." />
                    <MiniFeature icon={<Home className="h-5 w-5" />} title="Corretaje de Propiedades" text="Promesas, compraventas y gestión notarial/CBR." />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section id="areas" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">Áreas de práctica</h2>
          <p className="mt-3 text-slate-300">Experiencia en el mundo del trabajo, sector público administrativo y servicios legales integrales en Chile.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PracticeCard icon={<Gavel className="h-6 w-6" />} title="Laboral: individual y colectivo" bullets={["Despidos y cobros laborales", "Tutela de derechos fundamentales (Ley Karin)", "Reglamento interno y jornadas", "Negociación y relaciones colectivas"]} />
          <PracticeCard icon={<Building2 className="h-6 w-6" />} title="Derecho Administrativo" bullets={["Sumarios y vistas fiscales", "Estatutos: APS, Docente, Asistentes", "Probidad, incompatibilidades y sanciones", "Contraloría y recursos administrativos"]} />
          <PracticeCard icon={<FileText className="h-6 w-6" />} title="Contratación Pública" bullets={["Bases y anexos", "Evaluación y adjudicación", "Impugnaciones y reclamos", "Ejecución y término anticipado"]} />
          <PracticeCard icon={<Scale className="h-6 w-6" />} title="Litigación" bullets={["Juzgados del Trabajo", "Tribunales Contencioso-Adm.", "Recursos de protección", "SUSESO, DT y órganos fiscalizadores"]} />
          <PracticeCard icon={<Briefcase className="h-6 w-6" />} title="Empresas y Sociedades" bullets={["Constitución de sociedades", "Redacción de estatutos", "Asesoría societaria y actas", "Modificaciones y disoluciones"]} />
          <PracticeCard icon={<Home className="h-6 w-6" />} title="Corretaje de propiedades" bullets={["Búsqueda y negociación asistida", "Estudio de títulos y due diligence", "Promesa de compraventa", "Contrato de compraventa", "Gestión notarial y CBR"]} />
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-slate-900/40 border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tight">Sobre nosotros</h2>
              <p className="mt-3 text-slate-300">
                Somos un equipo en crecimiento con experiencia en Laboral, Administrativo, Contratación Pública y Societario.
                Integramos <strong>corretaje de propiedades</strong> con acompañamiento legal desde la promesa hasta la compraventa.
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <Stat number="10+" label="Años de experiencia" />
                <Stat number="300+" label="Escritos y presentaciones" />
                <Stat number="100%" label="Transparencia y ética" />
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-slate-300 space-y-3">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+56961946929" className="hover:underline">+56 9 6194 6929</a>
              </p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> alexis.arancibia.c@gmail.com</p>
              <p className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <a
                  href="https://wa.me/56961946929?text=Hola%20Cerna%20%26%20Asociados%2C%20necesito%20asesor%C3%ADa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  WhatsApp: +56 9 6194 6929
                </a>
              </p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Rancagua / Chile (online y presencial)</p>
              <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> L–V 09:00 a 18:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASOS */}
      <section id="casos" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">Experiencia y casos</h2>
          <p className="mt-3 text-slate-300">Algunos tipos de asuntos que hemos abordado (sin revelar información sensible):</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <CaseCard title="Tutela laboral y despidos" text="Defensas y demandas por vulneración de derechos fundamentales y despidos indebidos." />
          <CaseCard title="Procedimientos administrativos" text="Vistas fiscales, cargos, descargos y recursos administrativos." />
          <CaseCard title="Constitución de sociedades" text="Acompañamiento en constitución, estatutos y trámites de sociedades." />
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Hablemos de tu caso</h2>
            <p className="mt-3 text-slate-300">Cuéntanos brevemente tu situación. Te responderemos con alternativas y plan de acción.</p>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="Nombre" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2" />
              <input type="email" placeholder="Email" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2" />
              <input placeholder="Teléfono / WhatsApp" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2" />
              <textarea placeholder="Resumen del caso (máx. 500 caracteres)" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2" rows={5} />
              <div className="flex gap-3">
                <button className="inline-flex items-center rounded-2xl bg-blue-500 px-4 py-2 text-sm font-medium hover:bg-blue-600 transition">
                  Enviar consulta
                </button>
                <a
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-900/60 transition"
                  href="https://wa.me/56961946929?text=Hola%20Cerna%20%26%20Asociados%2C%20necesito%20asesor%C3%ADa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
              <p className="text-xs text-slate-400">
                Al enviar, aceptas la <a href="#" className="underline">política de privacidad</a>.
              </p>
            </form>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-slate-300 space-y-3">
            <p>• Tratamiento de datos personales conforme a Ley 19.628.<br />• Cookies y analítica con consentimiento informado.<br />• sujeto a secreto profesional.<br />• Honorarios a convenir.</p>
            <div className="text-sm text-slate-400">*Este sitio es informativo y no constituye asesoría legal. Cada caso requiere análisis específico.</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-400 grid md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-blue-400/20 grid place-items-center border border-blue-400/40">
                <Scale className="h-5 w-5 text-blue-400" />
              </div>
              <span className="font-medium text-slate-200">Cerna &amp; Asociados</span>
            </div>
            <p className="mt-3">Rancagua · Atención online y presencial</p>
          </div>
          <div className="space-y-2">
            <p className="text-slate-200 font-medium">Legal</p>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-slate-200">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-slate-200">Política de cookies</a></li>
              <li><a href="#" className="hover:text-slate-200">Términos y condiciones</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-slate-200 font-medium">Contacto</p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+56961946929" className="hover:underline">+56 9 6194 6929</a>
            </p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> alexis.arancibia.c@gmail.com</p>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-slate-500 border-t border-slate-800">
          © {new Date().getFullYear()} Cerna &amp; Asociados. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

function MiniFeature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/60">
      <div className="flex items-center gap-2 text-blue-400">
        {icon}
        <span className="font-medium">{title}</span>
      </div>
      <p className="mt-2 text-sm text-slate-300">{text}</p>
    </div>
  );
}

function PracticeCard({ icon, title, bullets }: { icon: React.ReactNode; title: string; bullets: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60">
      <div className="flex items-center gap-3 p-6">
        <div className="h-10 w-10 grid place-items-center rounded-2xl bg-blue-400/15 border border-blue-400/30 text-blue-400">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="px-6 pb-6">
        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
          {bullets.map((b, i) => (<li key={i}>{b}</li>))}
        </ul>
      </div>
    </div>
  );
}

function CaseCard({ title, text }: { title: string; text: string }) {
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

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/60">
      <div className="text-3xl font-bold text-blue-400">{number}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}
