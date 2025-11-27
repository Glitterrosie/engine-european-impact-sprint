import { motion, AnimatePresence } from "framer-motion";

interface WaterFillProps {
  isActive: boolean;
}

export const WaterFill = ({ isActive }: WaterFillProps) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500/90 via-blue-400/70 to-blue-300/50 rounded-b-[32px]"
          style={{
            boxShadow: "inset 0 4px 20px rgba(59, 130, 246, 0.4)"
          }}
          initial={{ height: "0%" }}
          animate={{ height: "50%" }}
          exit={{ height: "0%", transition: { duration: 1.5, ease: "easeOut" } }}
          transition={{
            duration: 5,
            ease: "easeInOut",
          }}
        >
          {/* Animated waves */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-8"
            style={{
              background: "radial-gradient(ellipse at center, rgba(96, 165, 250, 0.6) 0%, transparent 70%)"
            }}
            animate={{
              x: [-20, 20, -20],
              scaleX: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-2 left-0 right-0 h-6"
            style={{
              background: "radial-gradient(ellipse at center, rgba(147, 197, 253, 0.5) 0%, transparent 70%)"
            }}
            animate={{
              x: [20, -20, 20],
              scaleX: [1, 1.15, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Bubbles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/30"
              style={{
                width: Math.random() * 15 + 5,
                height: Math.random() * 15 + 5,
                left: `${Math.random() * 100}%`,
                bottom: 0,
              }}
              animate={{
                y: [-10, -150],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.8],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
