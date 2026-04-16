import { memo, useState, useCallback } from 'react'
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

  const toggleMobile = useCallback(() => {
    setMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobile = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Menu Button (mobile trigger) */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMobile}
            className="md:hidden cursor-pointer"
            aria-label="Abrir menu"
            id="mobile-menu-toggle"
          >
            <MaterialIcon
              name={mobileMenuOpen ? 'close' : 'menu'}
              className="text-yellow-700"
            />
          </button>
          <h1 className="text-xl font-serif tracking-tighter text-yellow-800 font-headline">
            LETÍCIA GOMES
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center" aria-label="Navegação principal">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              id={link.id}
              href={link.href}
              className={`${
                index === 0
                  ? 'text-yellow-700 font-bold'
                  : 'text-stone-500'
              } hover:text-yellow-600 transition-colors uppercase tracking-widest text-[10px] font-label`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Calendar Icon */}
        <a href="#contato" aria-label="Agendar horário">
          <MaterialIcon name="calendar_month" className="text-yellow-700" />
        </a>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-outline-variant/30"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={closeMobile}
                  className="text-stone-600 hover:text-yellow-600 transition-colors uppercase tracking-widest text-xs font-label font-bold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
})

export default Navbar
