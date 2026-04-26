import { memo } from 'react'
import { motion } from 'framer-motion'

const SectionHeader = memo(function SectionHeader({
  label,
  title,
  align = 'left',
  showLine = false,
  className = '',
}) {
  const isCenter = align === 'center'

  return (
    <motion.header
      className={`mb-16 ${isCenter ? 'text-center' : 'text-left'} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {label && (
        <div className={`flex items-center gap-3 mb-4 ${isCenter ? 'justify-center' : ''}`}>
          <span className="w-8 h-px bg-primary-container/80" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-label text-primary font-semibold">
            {label}
          </span>
          <span className="w-8 h-px bg-primary-container/80" />
        </div>
      )}
      <h4 className="text-4xl md:text-5xl font-headline text-on-surface leading-tight tracking-wide">
        {title}
      </h4>
      {showLine && (
        <div className={`flex mt-5 ${isCenter ? 'justify-center' : ''}`}>
          <div className="gold-divider" />
        </div>
      )}
    </motion.header>
  )
})

export default SectionHeader
