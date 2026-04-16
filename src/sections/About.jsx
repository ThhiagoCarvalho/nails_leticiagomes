import { memo } from 'react'
import { motion } from 'framer-motion'
import LazyImage from '../components/LazyImage'

const stats = [
  { value: '2+', label: 'Anos de Exp.' },
  { value: '200+', label: 'Atendimentos' },
]

const About = memo(function About() {
  return (
    <section id="sobre" className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-3xl mx-auto text-center">
        {/* Profile Image */}
        <motion.div
          className="relative inline-block mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-primary-container p-2 ambient-shadow">
            <LazyImage
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ-9rC_OtB0QT-wjpjkR1SB51UySptn8bM1HFJKNU_0SJNYtl8-S57fyie_ZT93BptyHRXWn_shKqj10dk1_kzQ-cPYrpXbI56rNJ1m6c5sZt3bjdoi0eum8z4Gjj42NUcXGScMwn2ANu4lYeCO4AxicM83D423wjlXaA2CjNtTvgZR4xZ79StbwcRPPRlgjhjSo7b8H3RCheYlfc4hu7fVmzDPUJcXPCUwM_zCgd5B_9GiC4z_z-IW5RXWeKxsb2UBAfmBNHwr-o"
              alt="Letícia Gomes Profile"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="absolute -bottom-2 right-4 bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-bold font-label uppercase tracking-widest">
            Master
          </div>
        </motion.div>

        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-headline text-primary mb-6">
            A Artista por Trás das Unhas
          </h3>
          <p className="text-lg text-secondary leading-relaxed mb-8 font-light">
            Sou manicure, pedicure e nail designer especialista em alongamentos
            e acabamentos impecáveis. Com criatividade e precisão, transformo
            unhas em verdadeiras obras de arte, garantindo beleza e durabilidade
            para cada cliente.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex justify-center gap-12 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block text-3xl font-bold font-headline">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest font-label">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
})

export default About
