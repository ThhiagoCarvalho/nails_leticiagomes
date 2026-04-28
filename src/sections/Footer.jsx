import { memo } from 'react'
import MaterialIcon from '../components/MaterialIcon'

const footerLinks = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Gallery', href: '#' },
]

const Footer = memo(function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 w-full py-16 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center mb-12">
        <h5 className="font-headline italic text-primary text-2xl mb-8 opacity-80">
          Letícia Gomes Editorial Atelier
        </h5>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center w-full mb-12 border-b border-stone-200 pb-12">
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-4 text-secondary/80 text-sm">
            <h6 className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Contato</h6>
            <a href="https://wa.me/5512988812961" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <MaterialIcon name="chat" className="text-lg" />
              (12) 98881-2961
            </a>
            <a href="mailto:contato@leticiagomes.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
              <MaterialIcon name="mail" className="text-lg" />
              contato@leticiagomes.com.br
            </a>
            <p className="flex items-center gap-2">
              <MaterialIcon name="location_on" className="text-lg" />
              Av. Antônio Joaquim Alvarenga Filho, 140, SJC
            </p>
          </div>



          {/* Socials */}
          <div className="flex flex-col items-center md:items-start space-y-4 text-secondary/80 text-sm">
            <h6 className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Redes Sociais</h6>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/leticiagomes.unhas/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors">
                <MaterialIcon name="photo_camera" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors">
                <MaterialIcon name="facebook" />
              </a>
            </div>
          </div>
        </div>

        <p className="text-[10px] text-secondary/60 uppercase tracking-[0.2em] font-bold">
          © {new Date().getFullYear()} LETÍCIA GOMES EDITORIAL ATELIER. SÃO JOSÉ DOS CAMPOS, BRASIL.
        </p>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-container/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
    </footer>
  )
})

export default Footer
