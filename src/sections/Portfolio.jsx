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
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

const Portfolio = memo(function Portfolio() {
  const scrollRef = useRef(null)

  const scroll = useCallback((direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }, [])

  return (
    <section className="py-28 px-6 md:px-8 overflow-hidden bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-between items-end mb-12">
          <SectionHeader label="Portfolio" title="Formatos de Alongamento" align="left" className="mb-0" />

          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 ambient-shadow bg-white hover-lift"
              aria-label="Anterior"
            >
              <MaterialIcon name="chevron_left" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 ambient-shadow bg-white hover-lift"
              aria-label="Próximo"
            >
              <MaterialIcon name="chevron_right" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 px-1 -mx-1 scrollbar-hidden"
        >
          {formats.map((format, index) => (
            <motion.div
              key={format.id}
              className="shrink-0 w-[270px] sm:w-[310px] md:w-[360px] snap-center group bg-surface-container-lowest rounded-2xl overflow-hidden card-premium border border-surface-variant/20 flex flex-col"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
            >
              {/* Image with overlay */}
              <div className="h-[280px] overflow-hidden relative">
                <LazyImage
                  src={format.image}
                  alt={format.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Title on hover overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="text-white font-headline text-xl italic font-light">
                    {format.title}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-5 h-px bg-primary/40" />
                  <h5 className="text-xl font-headline font-medium text-primary">
                    {format.title}
                  </h5>
                </div>
                <p className="text-secondary/80 leading-relaxed font-light text-sm flex-1">
                  {format.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile indicator dots */}
        <div className="md:hidden flex justify-center mt-4 gap-1.5">
          {formats.map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-primary/25" />
          ))}
        </div>
      </div>
    </section>
  )
})

export default Portfolio
