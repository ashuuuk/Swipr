import { motion } from "framer-motion";

export default function LightSweep({ visible }) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{
        x: -350,
        opacity: 0,
      }}
      animate={{
        x: 350,
        opacity: [0, 0.65, 0],
      }}
      transition={{
        delay: 0.5,
        duration: 1,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        width: "90px",
        height: "130px",
        transform: "rotate(18deg)",
        background:
          "linear-gradient(90deg, transparent, rgba(255,255,255,.45), transparent)",
        filter: "blur(10px)",
        pointerEvents: "none",
        zIndex: 10,
      }}
    />
  );
}