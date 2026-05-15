import { memo } from 'react'
import { motion } from 'framer-motion'
import LazyImage from '../components/LazyImage'
import MaterialIcon from '../components/MaterialIcon'
import leticiaImg from '../assets/leticia gomes.png'

const stats = [
  { value: '2+', label: 'Anos de\nExperiência' },
  { value: '200+', label: 'Atendimentos\nRealizados' },
]

const About = memo(function About() {
  return (
    <section id="sobre" className="py-28 px-6 md:px-8 bg-surface-container-low overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">

        {/* Label */}
        <motion.div
          className="flex items-center gap-3 mb-8 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-8 h-px bg-primary-container/80" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-label font-semibold">
            Quem sou eu
          </span>
          <span className="w-8 h-px bg-primary-container/80" />
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="relative inline-block mb-10"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Outer decorative ring */}
          <div className="absolute -inset-3 rounded-full border border-primary/12 pointer-events-none" />
          <div className="absolute -inset-5 rounded-full border border-primary/6 pointer-events-none" />

          <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-primary-container/60 p-1 ambient-shadow">
            <LazyImage
              src={leticiaImg}
              alt="Letícia Gomes — Nail Designer"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* Badge */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 gold-gradient text-white px-4 py-1 rounded-full text-[10px] font-label font-bold uppercase tracking-[0.2em] shadow-md whitespace-nowrap">
            Master Nail Design
          </div>
        </motion.div>

        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h3 className="text-4xl md:text-5xl font-headline font-light italic text-primary mb-6 leading-tight">
            A Artista por Trás das Unhas
          </h3>
          <div className="flex justify-center mb-6">
            <div className="gold-divider" />
          </div>
          <p className="text-lg text-secondary leading-relaxed mb-10 font-light max-w-xl mx-auto">
            Sou manicure, pedicure e nail designer especialista em alongamentos
            e acabamentos impecáveis. Com criatividade e precisão, transformo
            unhas em verdadeiras obras de arte, garantindo beleza e durabilidade
            para cada cliente.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex justify-center gap-0 text-primary"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center px-10 py-6 ${
                i < stats.length - 1
                  ? 'border-r border-primary/15'
                  : ''
              }`}
            >
              <span className="block text-5xl font-headline font-light text-gold leading-none mb-2">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-label text-secondary/70 whitespace-pre leading-relaxed">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Diferenciais de confiança */}
        <motion.div
          className="grid grid-cols-2 gap-4 mt-10 max-w-sm mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          {[
            { icon: 'sanitizer', label: 'Materiais descartáveis' },
            { icon: 'schedule', label: 'Horário marcado' },
            { icon: 'star', label: 'Esmaltes premium' },
            { icon: 'favorite', label: 'Atendimento personalizado' },
          ].map((item) => (
            <div
              key={item.icon}
              className="flex flex-col items-center gap-2 bg-white/70 border border-primary/8 rounded-2xl px-4 py-4 ambient-shadow"
            >
              <MaterialIcon name={item.icon} className="text-[20px] text-primary" />
              <span className="text-[11px] text-secondary/70 font-label text-center leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
})

export default About
