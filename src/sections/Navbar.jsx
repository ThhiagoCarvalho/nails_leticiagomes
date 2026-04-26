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
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(122,92,30,0.07),0_4px_24px_rgba(0,0,0,0.06)]'
          : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        {/* Mobile menu toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleMobile}
            className="md:hidden cursor-pointer p-1.5 rounded-full hover:bg-primary/5 transition-colors"
            aria-label="Abrir menu"
            id="mobile-menu-toggle"
          >
            <MaterialIcon
              name={mobileMenuOpen ? 'close' : 'menu'}
              className="text-primary"
            />
          </button>

          {/* Logo / Brand */}
          <a href="#hero" className="group flex flex-col leading-none">
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary/60 font-label font-medium hidden md:block">
              Atelier
            </span>
            <h1 className="text-lg md:text-xl font-headline font-semibold tracking-[0.05em] text-primary group-hover:text-primary/80 transition-colors">
              Letícia Gomes
            </h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center" aria-label="Navegação principal">
          {navLinks.slice(0, -1).map((link) => (
            <a
              key={link.id}
              id={link.id}
              href={link.href}
              className="nav-link text-[11px] uppercase tracking-[0.2em] text-stone-500 hover:text-primary transition-colors font-label font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button — desktop */}
        <a
          href="#contato"
          id="nav-cta"
          className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-label font-semibold text-primary border border-primary/25 px-5 py-2.5 rounded-full hover:bg-primary hover:text-white hover-lift transition-all duration-300 shadow-sm"
        >
          <MaterialIcon name="calendar_month" className="text-[16px]" />
          Agendar
        </a>

        {/* Mobile — calendar icon only */}
        <a href="#contato" aria-label="Agendar horário" className="md:hidden p-1.5 rounded-full hover:bg-primary/5 transition-colors">
          <MaterialIcon name="calendar_month" className="text-primary" />
        </a>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden bg-white/98 backdrop-blur-xl border-t border-primary/8"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col items-center gap-5 py-8 px-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={closeMobile}
                  className="text-[11px] uppercase tracking-[0.25em] text-stone-600 hover:text-primary transition-colors font-label font-semibold"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={closeMobile}
                className="mt-2 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-label font-semibold text-white bg-primary px-8 py-3 rounded-full"
              >
                <MaterialIcon name="calendar_month" className="text-[16px]" />
                Agendar horário
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
})

export default Navbar
