import { memo } from 'react'
import { motion } from 'framer-motion'
import LazyImage from '../components/LazyImage'
import Button from '../components/Button'

import fibraImg from '../assets/service_fibra_1776303133581.png'
import moldeImg from '../assets/service_molde_f1_1776303201152.png'
import banhoGelImg from '../assets/service_banho_gel_1776303183274.png'
import manicureImg from '../assets/service_manicure_1776303215098.png'

const servicesData = [
  {
    category: 'Alongamentos',
    description: 'Transforme o comprimento e formato das suas unhas com técnicas de alta durabilidade.',
    items: [
      {
        id: 'fibra',
        name: 'Fibra de Vidro',
        desc: 'Alongamento super natural e resistente, ideal para quem busca durabilidade e um acabamento fino impecável.',
        img: fibraImg,
        prices: [
          { type: 'Aplicação', value: 'R$ 180' },
          { type: 'Manutenção', value: 'R$ 100' },
        ]
      },
      {
        id: 'molde-f1',
        name: 'Molde F1',
        desc: 'Técnica express para alongamentos perfeitos com estrutura otimizada e simetria precisa.',
        img: moldeImg,
        prices: [
          { type: 'Aplicação', value: 'R$ 160' },
          { type: 'Manutenção', value: 'R$ 90' },
        ]
      }
    ]
  },
  {
    category: 'Cuidados e Proteção',
    description: 'Serviços pensados para a saúde, proteção e estética da sua unha natural.',
    items: [
      {
        id: 'banho-gel',
        name: 'Banho de Gel',
        desc: 'Cria uma blindagem protetora sobre as unhas naturais, prevenindo quebras e mantendo o esmalte intacto.',
        img: banhoGelImg,
        prices: [
          { type: 'Aplicação', value: 'R$ 120' },
          { type: 'Manutenção', value: 'R$ 80' },
        ]
      },
      {
        id: 'manicure-luxo',
        name: 'Manicure & Esmaltação',
        desc: 'Cuticulagem combinada e esmaltação em gel com finalização de alto brilho e durabilidade estendida.',
        img: manicureImg,
        prices: [
          { type: 'Serviço', value: 'R$ 70' },
        ]
      }
    ]
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const ServiceCard = ({ item }) => (
  <motion.div 
    className="group bg-surface-container-lowest rounded-2xl overflow-hidden ambient-shadow flex flex-col md:flex-row h-full transition-all duration-300 hover:shadow-lg"
    variants={fadeUp}
  >
    <div className="w-full md:w-2/5 aspect-square md:aspect-auto overflow-hidden">
      <LazyImage 
        src={item.img} 
        alt={item.name} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>
    <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
      <h4 className="text-2xl font-headline text-primary mb-3">{item.name}</h4>
      <p className="text-secondary mb-6 leading-relaxed flex-grow">{item.desc}</p>
      
      <div className="flex flex-wrap gap-4 mt-auto">
        {item.prices.map((price, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col px-4 py-2 rounded-xl ${price.type === 'Aplicação' || price.type === 'Serviço' ? 'bg-primary-container text-on-primary-container' : 'bg-surface-variant text-on-surface-variant'}`}
          >
            <span className="text-xs uppercase tracking-wider font-label mb-1 opacity-80">{price.type}</span>
            <span className="text-xl font-bold font-headline">{price.value}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
)

const Services = memo(function Services() {
  return (
    <section id="servicos" className="py-24 px-6 relative bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">Serviços Especializados</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto font-light">
            Procedimentos realizados com produtos de alta qualidade para garantir unhas impecáveis e saudáveis.
          </p>
        </motion.div>

        {servicesData.map((category, idx) => (
          <div key={idx} className="mb-20 last:mb-0">
            <motion.div 
              className="mb-8 pl-4 border-l-4 border-primary"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-headline text-on-surface">{category.category}</h3>
              <p className="text-secondary mt-2">{category.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {category.items.map(item => (
                <ServiceCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
        
        {/* CTA Banner */}
        <motion.div 
          className="mt-24 p-12 bg-primary-container rounded-3xl text-center ambient-shadow relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square bg-white/20 blur-3xl pointer-events-none rounded-full" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-headline text-on-primary-container mb-4">Pronta para transformar suas unhas?</h3>
            <p className="text-on-primary-container/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">
              Agende seu horário e garanta um momento de cuidado, beleza e relaxamento que você merece.
            </p>
            <Button href="#contato" icon="calendar_today" className="shadow-lg">
              Agendar agora
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default Services
