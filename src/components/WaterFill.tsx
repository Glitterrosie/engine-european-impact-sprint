import { motion } from "framer-motion";

interface WaterFillProps {
  isActive: boolean;
}

export const WaterFill = ({ isActive }: WaterFillProps) => {
  if (!isActive) return null;

  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-400/80 via-blue-300/60 to-blue-200/40 rounded-b-[32px]"
      initial={{ height: "0%" }}
      animate={{ height: "50%" }}
      transition={{
        duration: 5,
        ease: "easeInOut",
      }}
    >
      {/* Water waves effect */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-4 bg-blue-300/40"
        animate={{
          x: [0, 20, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};
