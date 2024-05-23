"use client";
import { motion } from "framer-motion";

export default function AnimateIn({ children }) {
  return (
    <motion.div
      className="animation"
      initial={{ opacity: 0.3, y: 130 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}
