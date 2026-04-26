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
      className="relative min-h-[100dvh] pt-28 pb-16 px-6 md:px-8 marble-bg flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambient Background Image — subtle overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LazyImage
          src={ambientBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80" />
      </div>

      {/* Top decorative glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-fixed/8 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-container/15 blur-[80px] rounded-full -ml-20 -mb-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Text Content */}
        <motion.div
          className="order-2 md:order-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label */}
          <motion.div
            className="flex items-center gap-3 mb-6 justify-center md:justify-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <span className="w-10 h-px bg-primary/40" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary/70 font-label font-semibold">
              Nail Designer & Atelier
            </span>
          </motion.div>

          {/* Name — main title */}
          <motion.h2
            className="font-headline font-semibold text-primary leading-[0.92] mb-6 tracking-wide"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Letícia
            <br />
            <span className="italic font-light text-gold">Gomes</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl font-headline italic text-secondary/80 mb-2 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Especialista em alongamento de unhas
          </motion.p>
          <motion.p
            className="text-base text-secondary/60 mb-10 font-body font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Beleza, durabilidade e acabamento impecável
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button href="#contato" icon="arrow_forward" variant="primary">
              Agendar horário
            </Button>
            <Button href="#servicos" variant="outline">
              Ver serviços
            </Button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="order-1 md:order-2 relative"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Gold ring decoration */}
          <div className="absolute -inset-3 rounded-[2rem] border border-primary/12 pointer-events-none z-10" />
          <div className="absolute -inset-6 rounded-[2.5rem] border border-primary/6 pointer-events-none z-10" />

          <div className="aspect-[4/5] rounded-[1.75rem] overflow-hidden ambient-shadow-lg border border-white/80">
            <LazyImage
              src={unhaLuxo}
              alt="Letícia Gomes — Nail Design Premium"
              className="w-full h-full object-cover"
            />
            {/* Inner overlay for depth */}
            <div className="absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-black/8 pointer-events-none" />
          </div>

          {/* Client Badge */}
          <motion.div
            className="absolute -bottom-5 -left-5 glass-effect px-5 py-3.5 rounded-2xl ambient-shadow hidden md:block border border-white/50"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] uppercase tracking-widest text-primary/60 font-label block mb-0.5">
              Clientes satisfeitas
            </span>
            <span className="text-primary font-headline font-semibold text-2xl italic">
              + de 100
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-label">scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-primary/30 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
})

export default Hero
