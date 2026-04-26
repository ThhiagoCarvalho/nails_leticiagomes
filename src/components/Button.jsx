import { memo } from 'react'
import { motion } from 'framer-motion'
import MaterialIcon from './MaterialIcon'

const Button = memo(function Button({
  href = '#',
  children,
  icon,
  variant = 'primary',
  className = '',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2.5 font-semibold rounded-full transition-all duration-300 tracking-wide hover-lift select-none'

  const variants = {
    primary:
      'gold-gradient text-white px-8 py-3.5 text-sm shadow-md hover:shadow-[0_8px_24px_rgba(122,92,30,0.30)]',
    primaryLarge:
      'gold-gradient text-white px-10 py-4 text-base shadow-lg hover:shadow-[0_12px_36px_rgba(122,92,30,0.35)]',
    outline:
      'bg-transparent text-primary border border-primary/30 px-7 py-3.5 text-sm hover:bg-primary/5 hover:border-primary/60',
    ghost:
      'bg-white/80 backdrop-blur-sm text-primary border border-white/60 px-7 py-3.5 text-sm shadow-sm hover:bg-white',
  }

  return (
    <motion.a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.975 }}
      {...props}
    >
      {children}
      {icon && <MaterialIcon name={icon} className="text-[18px]" />}
    </motion.a>
  )
})

export default Button
