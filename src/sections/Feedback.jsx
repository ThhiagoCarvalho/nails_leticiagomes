import { memo } from 'react'
import { motion } from 'framer-motion'
import MaterialIcon from '../components/MaterialIcon'
import SectionHeader from '../components/SectionHeader'

const testimonials = [
  {
    id: 1,
    name: 'Amanda Silveira',
    text: 'A Letícia é uma artista! O alongamento de fibra de vidro ficou perfeito e super natural. O ambiente é acolhedor e o atendimento excelente.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carolina Mendes',
    text: 'Simplesmente apaixonada pelo formato amendoado que fizemos. Durabilidade incrível, e o acabamento não tem igual. Recomendo sempre!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Bianca Oliveira',
    text: 'Profissionalismo impecável. O banho de gel salvou minhas unhas! Agora elas crescem fortes e o brilho dura semanas. Muito obrigada!',
    rating: 5,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const Feedback = memo(function Feedback() {
  return (
    <section className="py-24 px-6 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          label="Depoimentos" 
          title="O que nossas clientes dizem" 
          align="center"
          showLine={true}
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white p-8 rounded-2xl ambient-shadow border border-surface-variant/30 relative"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
            >
              <div className="text-primary-container mb-4 flex">
                {[...Array(item.rating)].map((_, i) => (
                  <MaterialIcon key={i} name="star" filled className="text-lg" />
                ))}
              </div>
              <p className="text-secondary italic leading-relaxed mb-6">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-surface-variant/40 pt-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-headline">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm text-on-surface">{item.name}</p>
                  <p className="text-xs text-on-surface-variant">Cliente Verificada</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Feedback
