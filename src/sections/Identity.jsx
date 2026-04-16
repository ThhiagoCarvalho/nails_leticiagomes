import { memo } from 'react'
import { motion } from 'framer-motion'
import LazyImage from '../components/LazyImage'
import spaImg from '../assets/top-view-spa-element-collection.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const Identity = memo(function Identity() {
  return (
    <section id="identidade" className="py-24 px-6 bg-surface-container-lowest">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Content */}
        <motion.div 
          className="w-full md:w-1/2 order-2 md:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[2px] bg-primary"></span>
            <span className="text-secondary uppercase tracking-widest font-label font-bold text-sm">
              Nossa Essência
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-6">
            Beleza que Reflete Quem Você É
          </h2>
          
          <p className="text-lg text-secondary mb-6 leading-relaxed font-light">
            Mais do que um simples atendimento, oferecemos uma experiência de renovação e autoestima. Acreditamos que o cuidado com as mãos é um momento de conexão consigo mesma, refletindo sua personalidade e estilo único no mundo.
          </p>
          
          <p className="text-lg text-secondary mb-8 leading-relaxed font-light">
            Nossa missão é entregar resultados impecáveis com máxima segurança, higiene e durabilidade, priorizando a saúde das suas unhas naturais acima de tudo. Trabalhamos exclusivamente com marcas premium e técnicas validadas.
          </p>
          
        </motion.div>

        {/* Image */}
        <motion.div 
          className="w-full md:w-1/2 order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden ambient-shadow relative border-8 border-surface-container-lowest">
            <LazyImage 
              src={spaImg} 
              alt="Ambiente Relaxante de Spa" 
              className="w-full h-full object-cover"
            />
            {/* Decorative Overlay Box */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[1.5rem] pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  )
})

export default Identity
