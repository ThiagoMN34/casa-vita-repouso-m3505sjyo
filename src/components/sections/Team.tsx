export function Team() {
  const team = [
    {
      name: 'Dra. Ana Lúcia',
      role: 'Diretora Médica',
      desc: 'Especialista em Geriatria com mais de 15 anos de experiência em cuidados com idosos.',
      img: 'https://img.usecurling.com/ppl/medium?gender=female&seed=15',
    },
    {
      name: 'Carlos Mendes',
      role: 'Enfermeiro Chefe',
      desc: 'Lidera nossa equipe de enfermagem garantindo atendimento humanizado e seguro 24 horas.',
      img: 'https://img.usecurling.com/ppl/medium?gender=male&seed=42',
    },
    {
      name: 'Mariana Costa',
      role: 'Fisioterapeuta',
      desc: 'Focada na reabilitação e manutenção da capacidade motora e autonomia dos nossos residentes.',
      img: 'https://img.usecurling.com/ppl/medium?gender=female&seed=23',
    },
    {
      name: 'Roberto Almeida',
      role: 'Nutricionista',
      desc: 'Responsável por elaborar cardápios saudáveis, saborosos e perfeitamente adaptados a cada necessidade.',
      img: 'https://img.usecurling.com/ppl/medium?gender=male&seed=8',
    },
  ]

  return (
    <section id="equipe" className="py-24 bg-emerald-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Nossa Equipe</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Profissionais altamente qualificados e apaixonados pelo que fazem. Cuidamos de quem você
            ama com carinho, técnica e muito respeito.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-[2rem] p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-emerald-50"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-emerald-100"
              />
              <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-emerald-600 font-medium mb-4">{member.role}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
