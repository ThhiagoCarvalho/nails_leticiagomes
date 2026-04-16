import { memo } from 'react'
import { motion } from 'framer-motion'
import MaterialIcon from '../components/MaterialIcon'
import Button from '../components/Button'

const contactInfo = [
  {
    icon: 'location_on',
    title: 'Endereço',
    lines: [
      'Avenida Antônio Joaquim Alvarenga Filho, 140',
      'Dom Pedro I, São José dos Campos',
    ],
  },
  {
    icon: 'schedule',
    title: 'Horário de Atendimento',
    lines: ['Atendimento com hora marcada', 'Segunda a Domingo'],
  },
]

const Contact = memo(function Contact() {
  const whatsappNumber = '5512999999999' // Placeholder, user should update this
  const whatsappMessage = encodeURIComponent('Olá Letícia, gostaria de agendar um horário para fazer minhas unhas!')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const instagramUrl = 'https://www.instagram.com/leticiagomes.atelier/' // Template instagram

  return (
    <section id="contato" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left Column - Info */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <header>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[1px] bg-primary/30"></span>
              <span className="text-primary font-bold tracking-widest text-xs uppercase font-label">Contato</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-headline text-primary mb-6">
              Vamos Agendar?
            </h3>
            <p className="text-lg text-secondary font-light max-w-md">
              Estamos prontos para te receber em um ambiente exclusivo, climatizado e pensado no seu total bem-estar.
            </p>
          </header>

          <div className="space-y-8">
            {contactInfo.map((info) => (
              <motion.div 
                key={info.icon} 
                className="flex gap-5 group"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-container/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 ambient-shadow border border-primary/5">
                  <MaterialIcon
                    name={info.icon}
                    className="text-2xl"
                  />
                </div>
                <div>
                  <p className="font-bold text-on-surface text-lg mb-1">{info.title}</p>
                  <p className="text-secondary leading-relaxed font-light">
                    {info.lines.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < info.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              href={whatsappUrl} 
              target="_blank" 
              className="flex-1 shadow-lg hover:shadow-primary/20" 
              icon="chat"
            >
              WhatsApp
            </Button>
            <Button 
              href={instagramUrl} 
              target="_blank" 
              variant="outline" 
              className="flex-1 hover:bg-surface-container" 
              icon="photo_camera"
            >
              Instagram
            </Button>
          </div>
        </motion.div>

        {/* Right Column - Map */}
        <motion.div
          className="rounded-[2.5rem] overflow-hidden h-[500px] ambient-shadow bg-surface-dim relative group border-8 border-surface-container-low"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.114651468933!2d-45.89166650000001!3d-23.2752834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdb56ed0f5a1d3%3A0xc8ac0568c32687a3!2sAv.%20Ant%C3%B4nio%20Joaquim%20Alvarenga%20Filho%2C%20140%20-%20Conj.%20Res.%20Dom%20Pedro%20I%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP%2C%2012232-570!5e0!3m2!1spt-BR!2sbr!4v1776368413000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Letícia Gomes Atelier"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
})

export default Contact
