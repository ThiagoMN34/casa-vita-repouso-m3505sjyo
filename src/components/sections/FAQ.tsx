import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQ() {
  const faqs = [
    {
      question: 'Quais são os horários de visita?',
      answer:
        'As visitas são abertas diariamente das 10h às 17h. Acreditamos que o contato frequente e afetuoso com a família é fundamental para o bem-estar físico e emocional dos residentes.',
    },
    {
      question: 'O que está incluso na mensalidade?',
      answer:
        'Nossa mensalidade contempla a hospedagem completa, 6 refeições diárias balanceadas, acompanhamento médico periódico, assistência de enfermagem 24 horas, fisioterapia preventiva, suporte nutricional e serviço de lavanderia.',
    },
    {
      question: 'A Casa Vita aceita idosos com Alzheimer ou outras demências?',
      answer:
        'Sim, nossa equipe multidisciplinar é amplamente capacitada para acolher, respeitar e cuidar de idosos com Alzheimer e outras condições cognitivas, garantindo um ambiente seguro e estímulos adequados.',
    },
    {
      question: 'Como funciona o período de adaptação?',
      answer:
        'Temos um protocolo especial e cuidadoso de acolhimento. Nos primeiros dias, acompanhamos de perto o residente, incentivando a participação nas rotinas e mantendo a família sempre informada sobre cada avanço.',
    },
    {
      question: 'O idoso pode levar seus móveis ou pertences pessoais?',
      answer:
        "Com certeza! Incentivamos que os quartos sejam decorados com objetos afetivos, fotos e pequenos móveis (mediante avaliação de espaço) para que o ambiente fique realmente com 'cara de casa'.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600 text-lg">
            Tire suas principais dúvidas sobre o funcionamento e o cuidado na Casa Vita.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-emerald-100 rounded-2xl px-6 bg-emerald-50/30 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-emerald-600 hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
