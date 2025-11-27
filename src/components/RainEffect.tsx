import { motion } from "framer-motion";

interface RainEffectProps {
  isRaining: boolean;
}

const RainDrop = ({ delay, xPos }: { delay: number; xPos: number }) => {
  return (
    <motion.div
      className="absolute w-0.5 h-8 bg-blue-400/60"
      style={{ left: `${xPos}%` }}
      initial={{ top: -20, opacity: 0 }}
      animate={{
        top: "100%",
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 1,
        delay,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
      }}
    />
  );
};

export const RainEffect = ({ isRaining }: RainEffectProps) => {
  if (!isRaining) return null;

  const rainDrops = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    xPos: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[32px]">
      {rainDrops.map((drop) => (
        <RainDrop key={drop.id} delay={drop.delay} xPos={drop.xPos} />
      ))}
    </div>
  );
};
