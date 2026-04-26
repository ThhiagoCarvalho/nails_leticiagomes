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
    <section id="identidade" className="py-28 px-6 md:px-8 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Content */}
        <motion.div 
          className="w-full md:w-1/2 order-2 md:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-primary-container/80" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-label font-semibold">
              Nossa Essência
            </span>
            <span className="w-8 h-px bg-primary-container/80" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-light italic text-primary mb-4 leading-tight">
            Beleza que Reflete
            <br />
            <span className="not-italic font-semibold">Quem Você É</span>
          </h2>
          <div className="mb-6">
            <div className="gold-divider" />
          </div>
          
          <p className="text-base md:text-lg text-secondary/80 mb-5 leading-relaxed font-light">
            Mais do que um simples atendimento, oferecemos uma experiência de renovação e autoestima. Acreditamos que o cuidado com as mãos é um momento de conexão consigo mesma, refletindo sua personalidade e estilo único no mundo.
          </p>
          
          <p className="text-base md:text-lg text-secondary/80 mb-6 leading-relaxed font-light">
            Nossa missão é entregar resultados impecáveis com máxima segurança, higiene e durabilidade, priorizando a saúde das suas unhas naturais acima de tudo. Trabalhamos exclusivamente com marcas premium e técnicas validadas.
          </p>
          
        </motion.div>

        {/* Image */}
        <motion.div 
          className="w-full md:w-1/2 order-1 md:order-2 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden ambient-shadow-lg relative border-[6px] border-white">
            <LazyImage 
              src={spaImg} 
              alt="Ambiente Relaxante de Spa" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            {/* Decorative ring */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/8 rounded-[1.6rem] pointer-events-none" />
          </div>
          {/* Outer decorative ring */}
          <div className="absolute -inset-3 rounded-[2.3rem] border border-primary/8 pointer-events-none" />
        </motion.div>

      </div>
    </section>
  )
})

export default Identity
