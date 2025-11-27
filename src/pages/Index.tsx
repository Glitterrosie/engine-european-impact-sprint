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
  { color: "white", x: 0, y: 20 },
  { color: "light", x: 30, y: 20 },
  { color: "dark", x: 60, y: 20 },
  { color: "white", x: 0, y: 45 },
  { color: "light", x: 30, y: 45 },
  { color: "dark", x: 60, y: 45 },
  { color: "white", x: 0, y: 70 },
  { color: "light", x: 30, y: 70 },
  { color: "dark", x: 60, y: 70 },
  { color: "white", x: 15, y: 32 },
  { color: "light", x: 45, y: 32 },
  { color: "dark", x: 15, y: 57 },
  { color: "white", x: 45, y: 57 },
];

const Index = () => {
  const [clouds, setClouds] = useState<Cloud[]>(INITIAL_CLOUDS);

  const checkCollision = (newX: number, newY: number, existingClouds: Cloud[], currentScale: number) => {
    // Scale affects collision distance
    const cloudWidth = 20 * currentScale;
    const cloudHeight = 27 * currentScale;
    
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
    
    // Try up to 100 times to find a non-colliding position
    // Place clouds in bottom area (65% to 90% Y position)
    do {
      randomX = Math.random() * 50 + 25;
      randomY = Math.random() * 25 + 65;
      attempts++;
    } while (checkCollision(randomX, randomY, clouds, futureScale) && attempts < 100);
    
    // Only add cloud if we found a valid position
    if (attempts < 100) {
      setClouds([...clouds, { color, x: randomX, y: randomY }]);
    }
  };

  const resetClouds = () => {
    setClouds(INITIAL_CLOUDS);
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
              <CloudWidget clouds={clouds} />
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
