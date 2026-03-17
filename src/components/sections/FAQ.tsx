import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Quais são os horários de visita?',
    answer:
      'As visitas são abertas diariamente, das 10h às 17h. Acreditamos que a presença e o carinho da família são fundamentais para o bem-estar e a alegria dos nossos residentes.',
  },
  {
    question: 'O serviço de Cuidados 24h está incluído?',
    answer:
      'Sim, todos os nossos residentes contam com Cuidados 24h. Nossa equipe multidisciplinar está sempre presente para garantir acompanhamento contínuo e assistência imediata.',
  },
  {
    question: 'Como funciona a alimentação na Casa Vita?',
    answer:
      'Oferecemos 6 refeições diárias balanceadas e saborosas, elaboradas por nossa equipe de nutrição. O cardápio é adaptado de acordo com as restrições médicas e preferências de cada idoso.',
  },
  {
    question: 'Quais atividades são oferecidas aos residentes?',
    answer:
      'Promovemos uma programação rica que inclui atividades de estímulo cognitivo, fisioterapia preventiva, musicoterapia, oficinas de artes e momentos de lazer ao ar livre.',
  },
  {
    question: 'É possível agendar uma visita para conhecer o espaço?',
    answer:
      'Com certeza! Adoramos receber visitantes. Você pode agendar uma visita facilmente através do nosso WhatsApp, escolhendo o melhor dia e horário para vir nos conhecer.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-gray-50/50 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tire suas dúvidas sobre a rotina e os serviços da Casa Vita.
          </p>
        </div>
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-100 last:border-0"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-[#B4D330] py-5 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
