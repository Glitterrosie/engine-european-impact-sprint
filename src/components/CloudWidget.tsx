import { motion } from "framer-motion";

interface CloudProps {
  color: "white" | "light" | "dark";
  delay?: number;
  x?: number;
  y?: number;
}

const Cloud = ({ color, delay = 0, x = 0, y = 0 }: CloudProps) => {
  const colorClass = 
    color === "white" ? "fill-cloud-white" :
    color === "light" ? "fill-cloud-light" :
    "fill-cloud-dark";

  const glowClass =
    color === "white" ? "drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" :
    color === "light" ? "drop-shadow-[0_0_15px_rgba(144,205,244,0.6)]" :
    "drop-shadow-[0_0_15px_rgba(93,138,168,0.5)]";

  return (
    <motion.svg
      key={`${color}-${x}-${y}`}
      initial={{ opacity: 0, scale: 0.8, x: x - 20, y: y - 20 }}
      animate={{ opacity: 1, scale: 1, x, y }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      width="110"
      height="70"
      viewBox="0 0 80 50"
      className={`${colorClass} ${glowClass} transition-all duration-700`}
    >
      <path d="M20 35 C20 28, 25 25, 30 25 C30 18, 38 15, 45 18 C48 12, 58 12, 62 18 C70 18, 75 23, 75 30 C75 37, 70 42, 62 42 L25 42 C17 42, 12 37, 12 30 C12 28, 14 26, 16 25 C17 30, 19 33, 20 35 Z" />
    </motion.svg>
  );
};

interface CloudWidgetProps {
  clouds: Array<{ color: "white" | "light" | "dark"; x: number; y: number }>;
}

export const CloudWidget = ({ clouds }: CloudWidgetProps) => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-secondary/30 to-secondary/60 relative overflow-hidden rounded-[32px] p-4">
      {/* Widget header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground">Cloudy</h2>
        <p className="text-xs text-muted-foreground mt-1">Cloud Storage</p>
      </div>

      {/* Clouds container */}
      <div className="relative w-full h-[400px]">
        {clouds.map((cloud, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: `${cloud.x}%`,
              top: `${cloud.y}%`,
            }}
          >
            <Cloud color={cloud.color} delay={index * 0.1} />
          </div>
        ))}
      </div>
    </div>
  );
};
