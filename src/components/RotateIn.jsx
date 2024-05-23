"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function RotateIn({ children }) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Rotate on load
    setRotation(360);
  }, []);

  const handleClick = () => {
    setRotation((prev) => prev + 360);
  };

  return (
    <motion.div
      className="animation"
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      onClick={handleClick}
      transition={{
        duration: 0.5,
        ease: "linear",
      }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </motion.div>
  );
}
