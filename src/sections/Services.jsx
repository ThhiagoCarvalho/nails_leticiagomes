import { memo } from 'react'
import { motion } from 'framer-motion'
import LazyImage from '../components/LazyImage'
import Button from '../components/Button'

import fibraImg from '../assets/service_fibra_1776303133581.png'
import moldeImg from '../assets/service_molde_f1_1776303201152.png'
import banhoGelImg from '../assets/service_banho_gel_1776303183274.png'
import manicureImg from '../assets/service_manicure_1776303215098.png'
import pedicureImg from '../assets/pedicure_service.png'
import reconstrucaoImg from '../assets/reconstrucao_service.png'

const servicesData = [
  {
    category: 'Manicure e Pedicure',
    description: 'Cuidado completo para a saúde e beleza das suas mãos e pés.',
    items: [
      {
        id: 'manicure',
        name: 'Manicure',
        desc: 'Cuidado completo para as mãos: cutilagem, lixamento, hidratação e esmaltação impecável. Ideal para quem quer unhas bem feitas, com acabamento limpo e delicado.',
        img: manicureImg,
        prices: [
          { type: 'Serviço', value: 'R$ 35,00' }
        ]
      },
      {
        id: 'pedicure',
        name: 'Pedicure',
        desc: 'Tratamento completo para os pés com remoção de cutículas, esfoliação, hidratação e finalização com esmaltação. Deixa os pés macios, bonitos e bem cuidados.',
        img: pedicureImg,
        prices: [
          { type: 'Serviço', value: 'R$ 35,00' }
        ]
      },
      {
        id: 'reconstrucao-pes',
        name: 'Reconstrução unhas dos pés',
        desc: 'Tratamento especializado para recuperar a estética e saúde das unhas dos pés.',
        img: reconstrucaoImg,
        prices: [
          { type: 'Serviço', value: 'R$ 80,00' }
        ]
      },
      {
        id: 'esmalta-gel',
        name: 'Esmaltação em Gel - Blindagem',
        desc: 'Esmaltação com gel e cura na cabine UV/LED, garantindo brilho intenso e maior durabilidade no dia a dia. Ideal para quem quer unhas sempre bonitas por mais tempo, com acabamento impecável.',
        img: banhoGelImg,
        prices: [
          { type: 'Serviço', value: 'R$ 65,00' }
        ]
      }
    ]
  },
  {
    category: 'Alongamentos e Gel',
    description: 'Técnicas avançadas para alongar, fortalecer e embelezar suas unhas.',
    items: [
      {
        id: 'fibra',
        name: 'Alongamento Fibra de Vidro',
        desc: 'Técnica ideal para quem quer unhas mais longas e resistentes, com acabamento natural e elegante.',
        img: fibraImg,
        prices: [
          { type: 'Aplicação', value: 'R$ 140,00' },
          { type: 'Manutenção', value: 'R$ 110,00' },
        ]
      },
      {
        id: 'molde-f1',
        name: 'Alongamento Molde F1',
        desc: 'Técnica ideal para quem quer unhas mais longas e resistentes, com acabamento natural e elegante.',
        img: moldeImg,
        prices: [
          { type: 'Aplicação', value: 'R$ 120,00' },
          { type: 'Manutenção', value: 'R$ 100,00' },
        ]
      },
      {
        id: 'banho-gel',
        name: 'Banho de Gel',
        desc: 'Perfeito para fortalecer as unhas naturais. Aplicamos uma camada de gel que cria proteção, melhora a resistência e ajuda no crescimento, mantendo um acabamento brilhante e alinhado.',
        img: banhoGelImg,
        prices: [
          { type: 'Serviço', value: 'R$ 100,00' }
        ]
      }
    ]
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
}

const ServiceCard = ({ item }) => (
  <motion.div
    className="group bg-white rounded-2xl overflow-hidden card-premium flex flex-col md:flex-row h-full border border-black/5 ambient-shadow"
    variants={fadeUp}
  >
    {/* Image */}
    {item.img && (
      <div className="w-full md:w-[25%] lg:w-[25%] aspect-video md:aspect-auto overflow-hidden relative">
        <LazyImage
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 pointer-events-none" />
      </div>
    )}

    {/* Content */}
    <div className={`w-full ${item.img ? 'md:w-[75%] lg:w-[75%]' : ''} px-6 pb-6 pt-4 md:p-8 flex flex-col justify-between`}>
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="w-4 h-px bg-primary/40" />
          <h4 className="text-xl md:text-[22px] font-headline font-bold text-on-surface leading-tight tracking-wide">
            {item.name}
          </h4>
        </div>
        <p className="text-on-surface/60 leading-relaxed font-light text-[14px] md:text-[15px] mb-6">
          {item.desc}
        </p>
      </div>

      {/* Prices */}
      {item.prices && item.prices.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-surface-variant/30">
          {item.prices.map((price, idx) => (
            <div
              key={idx}
              className={`flex flex-col px-4 py-2.5 rounded-xl ${price.type === 'Aplicação' || price.type === 'Serviço'
                ? 'bg-primary-container/20 text-primary border border-primary/10'
                : 'bg-surface text-on-surface-variant border border-surface-variant/50'
                }`}
            >
              <span className="text-[9px] uppercase tracking-[0.2em] font-label mb-1 opacity-70 font-medium">
                {price.type}
              </span>
              <span className="text-xl font-headline font-semibold leading-none">
                {price.value}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  </motion.div>
)

const Services = memo(function Services() {
  return (
    <section id="servicos" className="py-28 md:py-32 px-6 md:px-8 relative bg-surface-container-low overflow-hidden">

      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container/8 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
        >

          {/* Nível 1: Título Principal */}
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-6 leading-tight tracking-tight">
            Serviços Especializados
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-0.5 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
          </div>

        </motion.div>

        <div className="space-y-24">
          {servicesData.map((category, idx) => (
            <div key={idx} className="relative">

              {/* Nível 2: Categoria */}
              <motion.div
                className="mb-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <div className="inline-flex flex-col items-center">
                  <h3 className="text-[26px] md:text-[30px] font-headline font-semibold text-primary mb-2">
                    {category.category}
                  </h3>
                  <div className="w-full flex items-center justify-center gap-4 mb-3">
                    <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/30" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/30" />
                  </div>
                  <p className="text-secondary/80 text-[15px] font-normal max-w-md mx-auto">
                    {category.description}
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {category.items.map(item => (
                  <ServiceCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="mt-32 p-12 md:p-16 rounded-3xl text-center relative overflow-hidden border border-primary/10 ambient-shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #f5ede0 0%, #ede0cc 50%, #e8d5b0 100%)'
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] aspect-square bg-white/30 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/8 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary/60 font-label font-bold mb-4">
              Pronta para transformar?
            </p>
            <h3 className="text-[28px] md:text-[36px] font-headline font-medium text-on-surface mb-4 leading-tight">
              Suas unhas merecem
              <br />
              <span className="italic font-light">o melhor cuidado</span>
            </h3>
            <div className="flex justify-center mb-6">
              <div className="gold-divider" />
            </div>
            <p className="text-on-surface/70 text-[15px] md:text-base mb-10 max-w-xl mx-auto font-light leading-relaxed">
              Agende seu horário e garanta um momento de cuidado, beleza e relaxamento que você merece.
            </p>
            <Button href="#contato" icon="calendar_today" variant="primary">
              Agendar agora
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default Services

