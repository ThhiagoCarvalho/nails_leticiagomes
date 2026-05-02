import { memo } from 'react'
import MaterialIcon from '../components/MaterialIcon'

const Footer = memo(function Footer() {
  const contactLinks = [
    {
      href: "https://wa.me/5512988812961",
      icon: "chat",
      text: "(12) 98881-2961"
    },
    {
      href: "mailto:contato@leticiagomes.com.br",
      icon: "mail",
      text: "contato@leticiagomes.com.br"
    },
    {
      href: "https://maps.google.com/?q=Av.+Antônio+Joaquim+Alvarenga+Filho,+140,+São+José+dos+Campos",
      icon: "location_on",
      text: "Av. Antônio Joaquim Alvarenga Filho, 140, SJC"
    }
  ];

  return (
    <footer className="bg-surface border-t border-surface-variant/30 w-full pt-20 pb-10 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">

        {/* Brand & Microcopy */}
        <h5 className="font-headline italic text-primary text-[28px] md:text-3xl mb-3 opacity-90 text-center">
          Letícia Gomes
        </h5>
        <p className="text-secondary/80 font-light text-center max-w-sm mb-12 text-[14px] md:text-[15px] leading-relaxed">
          Entre em contato para agendamentos, dúvidas ou parcerias.
        </p>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 justify-center w-full mb-16">

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">

            <div className="flex flex-col space-y-5 text-secondary/80 text-[14px] md:text-[15px] font-light">
              {contactLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 ambient-shadow border border-black/5">
                    <MaterialIcon name={link.icon} className="text-[18px]" />
                  </div>
                  <span className="group-hover:font-medium transition-all">{link.text}</span>
                </a>
              ))}
            </div>
          </div>


        </div>

        {/* Elegant Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-8" />

        {/* Copyright */}
        <p className="text-[9px] md:text-[10px] text-secondary/50 uppercase tracking-[0.25em] font-medium text-center">
          © {new Date().getFullYear()} LETÍCIA GOMES EDITORIAL ATELIER. SÃO JOSÉ DOS CAMPOS, BRASIL.
        </p>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-container/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
    </footer>
  )
})

export default Footer
