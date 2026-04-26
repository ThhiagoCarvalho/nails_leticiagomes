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
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
}

const Feedback = memo(function Feedback() {
  return (
    <section className="py-28 px-6 md:px-8 bg-background overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-primary-container/10 blur-[100px] rounded-full -ml-32 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          label="Depoimentos"
          title="O que nossas clientes dizem"
          align="center"
          showLine={true}
        />

        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden card-premium border border-surface-variant/20 flex flex-col"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
            >
              {/* Top accent bar */}
              <div className="h-1 gold-gradient" />

              <div className="p-8 flex flex-col flex-1">
                {/* Decorative quote mark */}
                <div className="text-primary-container/60 font-headline text-7xl leading-none mb-2 select-none" aria-hidden>
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <MaterialIcon key={i} name="star" filled className="text-[16px] text-primary-container" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-secondary/80 leading-relaxed mb-8 font-light text-sm flex-1 italic">
                  {item.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 border-t border-surface-variant/30 pt-5 mt-auto">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-white font-headline font-semibold text-lg shadow-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-on-surface font-label">{item.name}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/60 font-label">
                      Cliente Verificada
                    </p>
                  </div>
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
