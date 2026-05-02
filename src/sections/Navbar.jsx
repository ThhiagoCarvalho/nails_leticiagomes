import { memo, useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MaterialIcon from '../components/MaterialIcon'

const navLinks = [
  { label: 'Home', href: '#hero', id: 'nav-home' },
  { label: 'Sobre', href: '#sobre', id: 'nav-sobre' },
  { label: 'Serviços', href: '#servicos', id: 'nav-servicos' },
  { label: 'Contato', href: '#contato', id: 'nav-contato' },
]

const Navbar = memo(function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMobile = useCallback(() => {
    setMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobile = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-auto md:min-w-[700px] max-w-4xl transition-all duration-500">
      <div 
        className={`relative flex items-center justify-between bg-white/70 backdrop-blur-lg border border-black/5 rounded-[50px] p-1.5 transition-all duration-500 ${
          scrolled ? 'shadow-[0_12px_40px_rgba(0,0,0,0.08)] bg-white/85' : 'shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
        }`}
      >
        {/* Left: Logo Circle + Name */}
        <a href="#hero" className="flex items-center gap-3 pl-1 pr-4 md:pr-5 rounded-full hover:bg-black/5 transition-all duration-300 group">
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface font-headline font-medium text-[16px] group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-black/5 shadow-sm">
            LG
          </div>
          <div className="hidden md:flex flex-col justify-center">
            <span className="text-[13px] font-headline font-medium tracking-wide text-on-surface group-hover:text-primary transition-colors leading-tight">
              Letícia Gomes
            </span>
            <span className="text-[8px] uppercase tracking-[0.2em] text-on-surface/50 font-label leading-tight mt-0.5">
              Nail Atelier
            </span>
          </div>
        </a>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 px-4" aria-label="Navegação principal">
          {navLinks.slice(0, -1).map((link) => (
            <a
              key={link.id}
              id={link.id}
              href={link.href}
              className="px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-label font-medium text-on-surface/60 hover:text-on-surface hover:bg-black/5 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 pr-1">
          {/* Desktop Circular Icon */}
          <a 
            href="#hero" 
            className="hidden md:flex w-10 h-10 rounded-full bg-white items-center justify-center text-on-surface/70 border border-black/5 shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:text-primary transition-all duration-300"
            aria-label="Ir para o topo"
          >
            <MaterialIcon name="expand_less" className="text-[18px]" />
          </a>

          {/* Desktop CTA */}
          <a
            href="#contato"
            id="nav-cta"
            className="hidden md:flex h-10 px-6 rounded-full bg-primary items-center justify-center text-white text-[10px] uppercase tracking-[0.2em] font-label font-semibold shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:bg-primary/90 transition-all duration-300"
          >
            Agendar
          </a>

          {/* Mobile Actions */}
          <a 
            href="#contato" 
            aria-label="Agendar horário" 
            className="md:hidden w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary border border-black/5 shadow-sm transition-all duration-300 hover:bg-black/5 hover:-translate-y-0.5"
          >
            <MaterialIcon name="calendar_month" className="text-[18px]" />
          </a>
          
          <button
            onClick={toggleMobile}
            className="md:hidden w-10 h-10 rounded-full bg-white flex items-center justify-center text-on-surface border border-black/5 shadow-sm transition-all duration-300 hover:bg-black/5 hover:-translate-y-0.5"
            aria-label="Abrir menu"
            id="mobile-menu-toggle"
          >
            <MaterialIcon
              name={mobileMenuOpen ? 'close' : 'menu'}
              className="text-[20px]"
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[calc(100%+12px)] left-0 w-full bg-white/90 backdrop-blur-xl border border-black/5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] rounded-[24px] overflow-hidden md:hidden"
              aria-label="Menu mobile"
            >
              <div className="flex flex-col p-2 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={closeMobile}
                    className="flex items-center justify-center py-4 text-[11px] uppercase tracking-[0.25em] text-on-surface/70 hover:text-primary hover:bg-black/5 rounded-2xl transition-all font-label font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="px-2 pb-2 pt-1">
                  <a
                    href="#contato"
                    onClick={closeMobile}
                    className="flex items-center justify-center gap-2 w-full text-[11px] uppercase tracking-[0.2em] font-label font-semibold text-white bg-primary px-6 py-4 rounded-xl shadow-sm"
                  >
                    <MaterialIcon name="calendar_month" className="text-[16px]" />
                    Agendar horário
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
})

export default Navbar
