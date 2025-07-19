import { motion } from "framer-motion";

export function OrbitalRings() {
  return (
    <div className="flex items-center justify-center h-full">
    <div className="relative w-20 h-20">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 border-2 rounded-full"
          style={{
            borderColor: i === 0 ? "#016690" : i === 1 ? "#0284c7" : "#38bdf8",
            borderTopColor: "transparent",
            borderRightColor: "transparent",
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.2 - i * 0.2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          initial={{
            scale: 1 - i * 0.2,
          }}
        />
      ))}
      <div className="absolute inset-4 bg-gradient-to-br from-[#016690] to-[#0284c7] rounded-full opacity-20" />
    </div>
    </div>
  )
}