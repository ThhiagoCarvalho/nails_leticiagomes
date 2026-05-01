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
    className="group bg-white rounded-2xl overflow-hidden card-premium flex flex-col md:flex-row h-full border border-surface-variant/20"
    variants={fadeUp}
  >
    {/* Image */}
    {item.img && (
      <div className="w-full md:w-2/5 aspect-square md:aspect-auto overflow-hidden relative">
        <LazyImage
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 pointer-events-none" />
      </div>
    )}

    {/* Content */}
    <div className={`w-full ${item.img ? 'md:w-3/5' : ''} p-7 md:p-9 flex flex-col justify-between`}>
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="w-5 h-px bg-primary/40" />
          <h4 className="text-2xl md:text-3xl font-headline font-medium text-primary leading-tight">
            {item.name}
          </h4>
        </div>
        <p className="text-secondary/80 leading-relaxed font-light text-sm mb-6">
          {item.desc}
        </p>
      </div>

      {/* Prices */}
      {item.prices && item.prices.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-surface-variant/30">
          {item.prices.map((price, idx) => (
            <div
              key={idx}
              className={`flex flex-col px-5 py-3 rounded-xl ${
                price.type === 'Aplicação' || price.type === 'Serviço'
                  ? 'bg-primary-container/40 text-on-primary-container'
                  : 'bg-surface-container text-on-surface-variant'
              }`}
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-label mb-1 opacity-70 font-semibold">
                {price.type}
              </span>
              <span className="text-2xl font-headline font-semibold text-primary leading-none">
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
    <section id="servicos" className="py-28 px-6 md:px-8 relative bg-surface-container-low overflow-hidden">

      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container/8 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-3 mb-5 justify-center">
            <span className="w-8 h-px bg-primary-container/80" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-label font-semibold">
              Especialidades
            </span>
            <span className="w-8 h-px bg-primary-container/80" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-light text-primary mb-4 leading-tight">
            Serviços Especializados
          </h2>
          <div className="flex justify-center mb-5">
            <div className="gold-divider" />
          </div>
          <p className="text-lg text-secondary/80 max-w-2xl mx-auto font-light leading-relaxed">
            Procedimentos realizados com produtos de alta qualidade para garantir unhas impecáveis e saudáveis.
          </p>
        </motion.div>

        {servicesData.map((category, idx) => (
          <div key={idx} className="mb-20 last:mb-0">

            {/* Category label */}
            <motion.div
              className="mb-8 flex items-center gap-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              <div>
                <h3 className="text-2xl md:text-3xl font-headline font-medium text-on-surface">
                  {category.category}
                </h3>
                <p className="text-secondary/70 mt-1 text-sm font-light">{category.description}</p>
              </div>
              <div className="h-px w-8 bg-primary/20" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {category.items.map(item => (
                <ServiceCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}

        {/* CTA Banner */}
        <motion.div
          className="mt-24 p-12 md:p-16 rounded-3xl text-center relative overflow-hidden border border-primary/10"
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
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary/60 font-label font-semibold mb-4">
              Pronta para transformar?
            </p>
            <h3 className="text-3xl md:text-5xl font-headline font-light text-primary mb-3 leading-tight">
              Suas unhas merecem
              <br />
              <span className="italic">o melhor cuidado</span>
            </h3>
            <div className="flex justify-center mb-6">
              <div className="gold-divider" />
            </div>
            <p className="text-secondary/80 text-base md:text-lg mb-10 max-w-xl mx-auto font-light leading-relaxed">
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
