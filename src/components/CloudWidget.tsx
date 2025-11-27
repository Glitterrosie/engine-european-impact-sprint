import { motion } from "framer-motion";

interface CloudProps {
  color: "white" | "light" | "dark";
  delay?: number;
  x?: number;
  y?: number;
  scale?: number;
}

const Cloud = ({ color, delay = 0, x = 0, y = 0, scale = 1 }: CloudProps) => {
  const colorClass = 
    color === "white" ? "fill-cloud-white" :
    color === "light" ? "fill-cloud-light" :
    "fill-cloud-dark";

  const glowClass =
    color === "white" ? "drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" :
    color === "light" ? "drop-shadow-[0_0_15px_rgba(144,205,244,0.6)]" :
    "drop-shadow-[0_0_15px_rgba(93,138,168,0.5)]";
  
  const baseWidth = 147;
  const baseHeight = 93;

  return (
    <motion.svg
      key={`${color}-${x}-${y}`}
      initial={{ opacity: 0, scale: 0.8 * scale }}
      animate={{ opacity: 1, scale: scale }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      width={baseWidth * scale}
      height={baseHeight * scale}
      viewBox="0 0 100 60"
      className={`${colorClass} ${glowClass} transition-all duration-700`}
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%)`
      }}
    >
      {/* Fluffy cloud made of overlapping circles */}
      <circle cx="25" cy="35" r="15" />
      <circle cx="42" cy="30" r="18" />
      <circle cx="58" cy="32" r="16" />
      <circle cx="70" cy="38" r="14" />
      <ellipse cx="48" cy="42" rx="28" ry="12" />
    </motion.svg>
  );
};

interface CloudWidgetProps {
  clouds: Array<{ color: "white" | "light" | "dark"; x: number; y: number }>;
}

export const CloudWidget = ({ clouds }: CloudWidgetProps) => {
  // Calculate scale based on number of clouds - more clouds = smaller size
  const calculateScale = () => {
    const baseScale = 1.6;
    const minScale = 0.67;
    const scaleFactor = Math.max(minScale, baseScale - (clouds.length * 0.067));
    return scaleFactor;
  };
  
  const cloudScale = calculateScale();
  
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
          <Cloud 
            key={index}
            color={cloud.color} 
            delay={index * 0.1}
            x={cloud.x}
            y={cloud.y}
            scale={cloudScale}
          />
        ))}
      </div>
    </div>
  );
};
