import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

const PageTransitionAnimate = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     transition={{ duration: 1.2, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransitionAnimate
