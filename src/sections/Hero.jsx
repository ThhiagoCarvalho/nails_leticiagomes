import { memo } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import LazyImage from '../components/LazyImage'
import ambientBg from '../assets/manicure_ambient_bg.jpg'
import unhaLuxo from '../assets/leticia gomes.png'

const Hero = memo(function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[795px] pt-24 pb-12 px-6 marble-bg flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed/10 blur-3xl rounded-full -mr-20 -mt-20 pointer-events-none" />

      {/* Ambient Background Image */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <LazyImage
          src={ambientBg}
          alt="Manicure Ambient"
          className="w-full h-full "
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          className="order-2 md:order-1 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-5xl md:text-7xl font-headline font-bold text-primary mb-4 leading-tight">
            LETÍCIA GOMES
          </h2>
          <p className="text-xl md:text-2xl font-headline italic text-on-surface-variant mb-2">
            Especialista em alongamento de unhas e esmaltação em gel
          </p>
          <p className="text-lg text-secondary mb-8 font-light">
            Beleza, durabilidade e acabamento impecável
          </p>
          <Button href="#contato" icon="arrow_forward">
            Agendar horário
          </Button>
        </motion.div>

        {/* Image */}
        <motion.div
          className="order-1 md:order-2 relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="aspect-[4/5] rounded-xl overflow-hidden ambient-shadow border-4 border-white">
            <LazyImage
              src={unhaLuxo}
              alt="Luxury nail design"
              className="w-full h-full"
            />
          </div>
          {/* Client Badge */}
          <motion.div
            className="absolute -bottom-6 -left-6 glass-effect p-4 rounded-xl ambient-shadow hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="text-primary font-headline italic text-xl">
              + de 100 Clientes
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

export default Hero
