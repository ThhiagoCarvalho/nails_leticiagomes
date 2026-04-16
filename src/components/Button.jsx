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
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300'

  const variants = {
    primary:
      'gold-gradient text-on-primary px-8 py-4 text-lg shadow-lg hover:shadow-xl',
    primaryLarge:
      'gold-gradient text-on-primary px-10 py-5 text-lg shadow-xl hover:shadow-2xl',
    outline:
      'bg-surface-container-lowest text-primary border border-primary-container px-6 py-4 hover:bg-primary-container/10',
  }

  return (
    <motion.a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {icon && <MaterialIcon name={icon} />}
      {children}
    </motion.a>
  )
})

export default Button
