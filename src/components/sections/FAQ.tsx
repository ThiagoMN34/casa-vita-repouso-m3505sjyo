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
      'As visitas na Casa Vita são abertas diariamente das 10h às 17h. Acreditamos que o convívio com a família é essencial para o bem-estar e a alegria dos nossos residentes.',
  },
  {
    question: 'Quais serviços estão inclusos na mensalidade?',
    answer:
      'Nossa mensalidade inclui hospedagem, alimentação balanceada com acompanhamento nutricional, cuidados 24h por nossa equipe especializada, lavanderia, além de atividades de recreação e estímulo cognitivo.',
  },
  {
    question: 'A Casa Vita aceita convênios médicos?',
    answer:
      'Trabalhamos de forma particular, mas auxiliamos os familiares com os trâmites necessários para solicitar o sistema de reembolso junto aos convênios médicos dos residentes, de acordo com o plano de saúde.',
  },
  {
    question: 'Como funciona o processo de adaptação?',
    answer:
      'O processo de adaptação é feito de forma gradual e humanizada. Nossa equipe multidisciplinar acompanha de perto os primeiros dias, integrando o residente às atividades e aos demais moradores para que ele se sinta verdadeiramente em casa.',
  },
  {
    question: 'Existe a opção de hospedagem temporária?',
    answer:
      'Sim! Oferecemos opções de hospedagem tanto permanente quanto temporária, ideal para situações de pós-operatório, reabilitação ou quando a família precisa viajar e necessita de um local seguro para o idoso.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o funcionamento e os serviços oferecidos pela Casa Vita.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-xl px-6 bg-primary/5 data-[state=open]:bg-white data-[state=open]:border-primary/20 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
