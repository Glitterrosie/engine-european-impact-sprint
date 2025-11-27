import { motion, AnimatePresence } from "framer-motion";

interface RainEffectProps {
  isRaining: boolean;
}

const RainDrop = ({ delay, xPos }: { delay: number; xPos: number }) => {
  return (
    <motion.div
      className="absolute w-1 h-12 bg-[#90CDF4] rounded-full"
      style={{ 
        left: `${xPos}%`,
        boxShadow: "0 0 4px rgba(144, 205, 244, 0.8)"
      }}
      initial={{ top: -20, opacity: 0, scaleY: 0 }}
      animate={{
        top: "100%",
        opacity: [0, 1, 1, 0],
        scaleY: [0, 1, 1, 0.5],
      }}
      exit={{ opacity: 0, scaleY: 0 }}
      transition={{
        duration: 0.8,
        delay,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "easeIn",
      }}
    />
  );
};

export const RainEffect = ({ isRaining }: RainEffectProps) => {
  const rainDrops = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    xPos: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <AnimatePresence>
      {isRaining && (
        <motion.div 
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-[32px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {rainDrops.map((drop) => (
            <RainDrop key={drop.id} delay={drop.delay} xPos={drop.xPos} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
