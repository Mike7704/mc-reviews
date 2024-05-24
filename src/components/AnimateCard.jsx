"use client";
import { motion } from "framer-motion";

export default function AnimateCard({ style, children }) {
  return (
    <motion.div
      className={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
