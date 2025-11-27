import { useState } from "react";
import { PhoneMockup } from "@/components/PhoneMockup";
import { CloudWidget } from "@/components/CloudWidget";
import { ControlButtons } from "@/components/ControlButtons";
import { motion } from "framer-motion";

interface Cloud {
  color: "white" | "light" | "dark";
  x: number;
  y: number;
}

const INITIAL_CLOUDS: Cloud[] = [
  { color: "white", x: 30, y: 25 },
  { color: "light", x: 50, y: 28 },
  { color: "dark", x: 70, y: 30 },
  { color: "white", x: 28, y: 48 },
  { color: "light", x: 48, y: 52 },
  { color: "dark", x: 72, y: 50 },
  { color: "white", x: 32, y: 72 },
  { color: "light", x: 52, y: 75 },
  { color: "dark", x: 75, y: 78 },
  { color: "white", x: 40, y: 38 },
  { color: "light", x: 62, y: 62 },
  { color: "dark", x: 38, y: 62 },
  { color: "white", x: 60, y: 40 },
];

const Index = () => {
  const [clouds, setClouds] = useState<Cloud[]>(INITIAL_CLOUDS);

  const checkCollision = (newX: number, newY: number, existingClouds: Cloud[], currentScale: number) => {
    // Scale affects collision distance - proper spacing for visibility
    const cloudWidth = 28 * currentScale;
    const cloudHeight = 35 * currentScale;
    
    for (const cloud of existingClouds) {
      const distanceX = Math.abs(newX - cloud.x);
      const distanceY = Math.abs(newY - cloud.y);
      
      if (distanceX < cloudWidth && distanceY < cloudHeight) {
        return true; // Collision detected
      }
    }
    return false; // No collision
  };

  const deleteLightCloud = () => {
    const lightCloudIndex = clouds.findIndex(cloud => cloud.color === "light");
    if (lightCloudIndex !== -1) {
      const newClouds = [...clouds];
      newClouds[lightCloudIndex] = { ...newClouds[lightCloudIndex], color: "white" };
      setClouds(newClouds);
    }
  };

  const addCloud = (color: "white" | "light" | "dark") => {
    let attempts = 0;
    let randomX, randomY;
    
    // Calculate future scale after adding new cloud
    const futureScale = Math.max(0.67, 1.6 - ((clouds.length + 1) * 0.067));
    
    // Try up to 250 times to find a non-colliding position
    // X: 25% to 75% (centered horizontally with margins)
    // Y: 70% to 88% (bottom area, fully visible)
    do {
      randomX = Math.random() * 50 + 25;
      randomY = Math.random() * 18 + 70;
      attempts++;
    } while (checkCollision(randomX, randomY, clouds, futureScale) && attempts < 250);
    
    // Only add cloud if we found a valid position
    if (attempts < 250) {
      setClouds([...clouds, { color, x: randomX, y: randomY }]);
    }
  };

  const resetClouds = () => {
    setClouds([...INITIAL_CLOUDS]);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-foreground mb-3">
            Cloudy Widget
          </h1>
          <p className="text-lg text-muted-foreground">
            Visualize your cloud storage with interactive clouds
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PhoneMockup>
              <CloudWidget clouds={clouds} key={clouds.length} />
            </PhoneMockup>
          </motion.div>

          <ControlButtons
            onAction1={deleteLightCloud}
            onAction2={() => addCloud("white")}
            onAction3={() => addCloud("dark")}
            onReset={resetClouds}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
            <div className="w-12 h-12 bg-cloud-white rounded-full mb-3 border-2 border-border" />
            <h3 className="font-bold text-card-foreground mb-1">White Clouds</h3>
            <p className="text-sm text-muted-foreground">Free Space</p>
          </div>
          <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
            <div className="w-12 h-12 bg-cloud-light rounded-full mb-3" />
            <h3 className="font-bold text-card-foreground mb-1">Light Clouds</h3>
            <p className="text-sm text-muted-foreground">Unique Data</p>
          </div>
          <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
            <div className="w-12 h-12 bg-cloud-dark rounded-full mb-3" />
            <h3 className="font-bold text-card-foreground mb-1">Dark Clouds</h3>
            <p className="text-sm text-muted-foreground">Similar Data</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
