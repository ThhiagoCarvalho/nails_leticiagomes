import { memo } from 'react'
import MaterialIcon from '../components/MaterialIcon'

const FloatingActionButton = memo(function FloatingActionButton() {
  return (
    <a
      href="#contato"
      className="fixed bottom-6 right-6 w-16 h-16 gold-gradient rounded-full flex items-center justify-center text-on-primary shadow-2xl z-[100] sm:hidden hover:scale-105 transition-transform"
      aria-label="Agendar horário"
      id="fab-agendar"
    >
      <MaterialIcon name="calendar_add_on" filled />
    </a>
  )
})

export default FloatingActionButton
