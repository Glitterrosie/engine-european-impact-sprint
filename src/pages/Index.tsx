import { useState } from "react";
import { CloudWidget } from "@/components/CloudWidget";
import { ControlButtons } from "@/components/ControlButtons";
import { PhoneMockup } from "@/components/PhoneMockup";

type Cloud = { color: "white" | "light" | "dark"; x: number; y: number };

const generateInitialClouds = (): Cloud[] => {
  const clouds: Cloud[] = [];
  const colors: Array<"white" | "light" | "dark"> = [
    "light", "white", "dark", "light", "white", "dark", 
    "light", "white", "dark", "light", "white", "dark", "light"
  ];
  
  // Grid-based distribution with jitter for natural look
  const cols = 4;
  const rows = 4;
  const xStep = 70 / cols;
  const yStep = 75 / rows;
  
  let cloudIndex = 0;
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (cloudIndex >= 13) break;
      
      // Base position in grid
      const baseX = 15 + col * xStep;
      const baseY = 15 + row * yStep;
      
      // Add jitter for natural distribution (seeded randomness)
      const jitterX = ((cloudIndex * 17) % 20) - 10;
      const jitterY = ((cloudIndex * 13) % 20) - 10;
      
      clouds.push({
        color: colors[cloudIndex],
        x: Math.max(10, Math.min(80, baseX + jitterX - 14)),
        y: Math.max(10, Math.min(85, baseY + jitterY))
      });
      
      cloudIndex++;
    }
    if (cloudIndex >= 13) break;
  }
  
  return clouds;
};

const INITIAL_CLOUDS: Cloud[] = generateInitialClouds();

const Index = () => {
  const [clouds, setClouds] = useState(INITIAL_CLOUDS);

  const handleAction1 = () => {
    setClouds((prev) => {
      const firstLightIndex = prev.findIndex((cloud) => cloud.color === "light");
      if (firstLightIndex === -1) return prev;

      const newClouds = [...prev];
      newClouds[firstLightIndex] = { ...newClouds[firstLightIndex], color: "white" };
      return newClouds;
    });
  };

  const checkCollision = (x: number, y: number, existingClouds: typeof clouds) => {
    const cloudWidth = 15;
    const cloudHeight = 10;

    return existingClouds.some((cloud) => {
      const dx = Math.abs(x - cloud.x);
      const dy = Math.abs(y - cloud.y);
      return dx < cloudWidth && dy < cloudHeight;
    });
  };

  const handleAction2 = () => {
    const maxAttempts = 50;
    let attempt = 0;
    let randomX: number;
    let randomY: number;

    do {
      randomX = Math.random() * 70 + 10;
      randomY = Math.random() * 75 + 10;
      attempt++;
    } while (checkCollision(randomX, randomY, clouds) && attempt < maxAttempts);

    if (attempt < maxAttempts) {
      setClouds((prev) => [...prev, { color: "white" as const, x: randomX, y: randomY }]);
    }
  };

  const handleAction3 = () => {
    const maxAttempts = 50;
    let attempt = 0;
    let randomX: number;
    let randomY: number;

    do {
      randomX = Math.random() * 70 + 10;
      randomY = Math.random() * 75 + 10;
      attempt++;
    } while (checkCollision(randomX, randomY, clouds) && attempt < maxAttempts);

    if (attempt < maxAttempts) {
      setClouds((prev) => [...prev, { color: "dark" as const, x: randomX, y: randomY }]);
    }
  };

  const handleReset = () => {
    setClouds(INITIAL_CLOUDS);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
        <PhoneMockup>
          <CloudWidget clouds={clouds} />
        </PhoneMockup>
        <ControlButtons
          onAction1={handleAction1}
          onAction2={handleAction2}
          onAction3={handleAction3}
          onReset={handleReset}
        />
      </div>
    </div>
  );
};

export default Index;
