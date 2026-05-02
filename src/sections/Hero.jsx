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
      className="relative min-h-[100dvh] pt-20 md:pt-32 pb-10 md:pb-24 px-6 md:px-8 marble-bg flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambient Background Image — subtle overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LazyImage
          src={ambientBg}
          alt=""
          className="w-full h-full object-cover opacity-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-background/95 via-background/80 to-background/90" />
      </div>

      {/* Top decorative glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-fixed/8 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-container/15 blur-[80px] rounded-full -ml-20 -mb-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row gap-6 md:gap-20 items-center justify-between">

        {/* Text Content */}
        <motion.div
          className="order-2 md:order-1 text-center md:text-left w-full md:w-[60%] lg:w-[65%]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label */}
          <motion.div
            className="flex items-center gap-4 mb-8 justify-center md:justify-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >

          </motion.div>

          {/* Name — main title */}
          <motion.h1
            className="font-headline text-on-surface leading-[0.85] mb-3 md:mb-6 tracking-wide drop-shadow-sm"
            style={{ fontSize: 'clamp(4.5rem, 11vw, 8.5rem)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-bold">Letícia</span>
            <br />
            <span className="italic font-light text-gold text-glow">Gomes</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="w-12 h-0.5 rounded-full bg-gradient-to-r from-primary to-transparent mb-4 md:mb-6 mx-auto md:mx-0 opacity-60" />
          </motion.div>

          <div className="max-w-[420px] mx-auto md:mx-0">
            {/* Subtitle */}
            <motion.p
              className="text-lg font-headline italic text-on-surface/80 mb-3 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
            </motion.p>
            <motion.p
              className="text-base md:text-[17px] leading-relaxed text-on-surface/80 mb-6 md:mb-10 font-body font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Beleza, durabilidade e acabamento impecável para mulheres que valorizam a elegância em cada detalhe.
            </motion.p>
          </div>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <Button href="#contato" icon="arrow_forward" variant="primary">
              Agendar horário
            </Button>

          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="order-1 md:order-2 relative w-full max-w-[220px] md:max-w-none md:w-[35%] lg:w-[30%] mx-auto md:mx-0"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Decorative frames */}
          <div className="absolute -inset-3 rounded-[2rem] border border-primary/15 pointer-events-none z-10 transition-transform duration-500 hover:scale-105" />
          <div className="absolute -inset-6 rounded-[2.5rem] border border-primary/5 pointer-events-none z-10 hidden sm:block" />

          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden ambient-shadow-lg card-premium border border-white/60 bg-surface">
            <LazyImage
              src={unhaLuxo}
              alt="Letícia Gomes — Nail Design Premium"
              className="w-full h-full object-cover"
            />
            {/* Inner overlay for depth */}
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-black/10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-60" />
          </div>

          {/* Client Badge */}
          <motion.div
            className="absolute -bottom-6 -left-6 glass-effect px-6 py-4 rounded-[1.25rem] ambient-shadow hidden md:flex flex-col border border-white/50 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[9px] uppercase tracking-[0.2em] text-on-surface/50 font-label font-bold mb-1">
              Clientes Satisfeitas
            </span>
            <span className="text-primary font-headline font-semibold text-3xl italic leading-none">
              +100
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-primary/40 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
})

export default Hero

