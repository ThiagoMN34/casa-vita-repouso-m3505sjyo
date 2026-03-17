import { HeartPulse, Coffee, UserCheck, Activity } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: HeartPulse,
      title: 'Enfermagem 24h',
      desc: 'Equipe de saúde dedicada em tempo integral para assistência contínua.',
    },
    {
      icon: UserCheck,
      title: 'Acompanhamento Médico',
      desc: 'Visitas médicas regulares focadas em cuidado preventivo e humanizado.',
    },
    {
      icon: Coffee,
      title: 'Nutrição Balanceada',
      desc: '6 refeições diárias elaboradas e supervisionadas por nutricionistas.',
    },
    {
      icon: Activity,
      title: 'Fisioterapia',
      desc: 'Atividades motoras para manter e recuperar a mobilidade e vitalidade.',
    },
  ]

  return (
    <section id="servicos" className="py-24 bg-emerald-50/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Nossos Serviços</h2>
        <p className="text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
          Cuidado integral e acolhedor, atendendo todas as necessidades físicas e emocionais dos
          nossos residentes para uma vida plena.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-emerald-50"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6">
                <s.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
