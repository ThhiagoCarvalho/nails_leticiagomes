import { memo, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import LazyImage from '../components/LazyImage'
import MaterialIcon from '../components/MaterialIcon'

import quadradoImg from '../assets/quadradas-e1701207905622.jpg'
import amendoadoImg from '../assets/amendoado.jpg'
import bailarinaImg from '../assets/Bailarina.jpg'
import stilettoImg from '../assets/Stiletto.jpg'
import ovalImg from '../assets/oval.jpg'

const formats = [
  {
    id: 'quadrado',
    title: 'Formato Quadrado',
    description:
      'Laterais retas e ponta marcada. Ideal para quem busca firmeza e sofisticação.',
    image: quadradoImg,
  },
  {
    id: 'amendoado',
    title: 'Formato Amendoado',
    description: 'Laterais afinadas e ponta arredondada. Elegante e delicado.',
    image: amendoadoImg,
  },
  {
    id: 'bailarina',
    title: 'Formato Bailarina',
    description:
      'Ponta levemente afunilada, estilo moderno e impactante.',
    image: bailarinaImg,
  },
  {
    id: 'stiletto',
    title: 'Formato Stiletto',
    description: 'Ponta extremamente fina e agressiva, para visual ousado.',
    image: stilettoImg,
  },
  {
    id: 'oval',
    title: 'Formato Oval',
    description: 'Clássico e atemporal, proporciona aparência alongada aos dedos.',
    image: ovalImg,
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const Portfolio = memo(function Portfolio() {
  const scrollRef = useRef(null)

  const scroll = useCallback((direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }, [])

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-between items-end mb-12">
          <SectionHeader label="Portfolio" title="Formatos de Alongamento" align="left" className="mb-0" />

          {/* Navigation Buttons - Visible on Desktop */}
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary-container hover:border-transparent transition-all ambient-shadow bg-white"
              aria-label="Anterior"
            >
              <MaterialIcon name="chevron_left" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary-container hover:border-transparent transition-all ambient-shadow bg-white"
              aria-label="Próximo"
            >
              <MaterialIcon name="chevron_right" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-2 -mx-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {formats.map((format, index) => (
            <motion.div
              key={format.id}
              className="shrink-0 w-[280px] sm:w-[320px] md:w-[380px] snap-center group bg-surface-container-lowest rounded-2xl overflow-hidden ambient-shadow flex flex-col border border-surface-variant/30"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
            >
              <div className="h-72 overflow-hidden relative">
                <LazyImage
                  src={format.image}
                  alt={format.title}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <div className="p-8">
                <h5 className="text-2xl font-headline text-primary mb-3">
                  {format.title}
                </h5>
                <p className="text-on-surface-variant leading-relaxed font-light">
                  {format.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="md:hidden flex justify-center mt-4">
          <div className="flex gap-1.5">
            {formats.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/20" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export default Portfolio
