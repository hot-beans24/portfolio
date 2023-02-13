import { type ReactNode } from "react"
import { motion } from "framer-motion"

const PageTransitionAnimate = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransitionAnimate