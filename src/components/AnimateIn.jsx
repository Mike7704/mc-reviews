"use client";
import { motion } from "framer-motion";

export default function AnimateIn({ children }) {
  return (
    <motion.div
      className="animation"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
