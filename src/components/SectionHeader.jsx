import { memo } from 'react'
import { motion } from 'framer-motion'

const SectionHeader = memo(function SectionHeader({
  label,
  title,
  align = 'left',
  showLine = false,
}) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <motion.header
      className={`mb-16 ${alignClass}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {label && (
        <h3 className="text-xs uppercase tracking-[0.2em] font-label text-primary font-bold mb-2">
          {label}
        </h3>
      )}
      <h4 className="text-4xl font-headline text-on-surface">{title}</h4>
      {showLine && <div className="w-24 h-1 bg-primary rounded-full mt-2" />}
    </motion.header>
  )
})

export default SectionHeader
