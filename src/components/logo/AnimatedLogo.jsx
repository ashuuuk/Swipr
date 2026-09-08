import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import logo from "../../assets/images/logo.png";
import LightSweep from "./LightSweep";

export default function AnimatedLogo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1400),   // Logo moves left
      setTimeout(() => setStep(2), 1800),  // w
      setTimeout(() => setStep(3), 1950),  // wi
      setTimeout(() => setStep(4), 2100),  // wip
      setTimeout(() => setStep(5), 2250),  // wipr
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* LOGO */}
      <motion.img
        src={logo}
        alt="Swipr Logo"
        initial={{
          opacity: 0,
          scale: 0.75,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: step >= 1 ? -32 : 0,
        }}
        transition={{
          opacity: {
            duration: 0.4,
          },
          scale: {
            duration: 0.55,
            type: "spring",
            stiffness: 180,
          },
          x: {
            duration: 0.55,
            type: "spring",
            stiffness: 150,
            damping: 15,
          },
        }}
        style={{
          width: 92,
          zIndex: 5,
          position: "relative",
        }}
      />

      {/* WORD */}
      <div
        style={{
          width: 150,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          marginLeft: "-42px",
        }}
      >
        {["w", "i", "p", "r"].map((letter, index) => {
          const visible = step >= index + 2;

          return (
            <motion.span
              key={letter}
              initial={{
                opacity: 0,
                x: -18,
              }}
              animate={{
                opacity: visible ? 1 : 0,
                x: visible ? 0 : -18,
              }}
              transition={{
                duration: 0.28,
                ease: "easeOut",
              }}
              style={{
                color: "#FFFFFF",
                fontSize: "74px",
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-3px",
                fontFamily:
                  "Inter,-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif",
              }}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>

      {/* LIGHT SWEEP */}
      <LightSweep visible={step >= 5} />
    </div>
  );
}