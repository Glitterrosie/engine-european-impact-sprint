import { useState } from "react";
import { CloudWidget } from "@/components/CloudWidget";
import { ControlButtons } from "@/components/ControlButtons";
import { PhoneMockup } from "@/components/PhoneMockup";
import { RainEffect } from "@/components/RainEffect";
import { WaterFill } from "@/components/WaterFill";
import { PhotoGroupsDialog } from "@/components/PhotoGroupsDialog";

type Cloud = { color: "white" | "light" | "dark"; x: number; y: number };

const generateInitialClouds = (): Cloud[] => {
  const clouds: Cloud[] = [];
  const colors: Array<"white" | "light" | "dark"> = [
    "light", "white", "dark", "light", "white", "dark", 
    "light", "white", "dark", "light", "white", "dark", "light"
  ];
  
  // Alternating rows: 3-2-3-2-3 pattern stretched horizontally
  // Account for cloud size (approximately 20% width, 15% height)
  const rowPatterns = [3, 2, 3, 2, 3];
  const yPositions = [5, 23, 41, 59, 77];
  
  let cloudIndex = 0;
  
  for (let row = 0; row < rowPatterns.length; row++) {
    const cloudsInRow = rowPatterns[row];
    // Use full width for 3-cloud rows, adjust center for 2-cloud rows
    if (cloudsInRow === 3) {
      const positions = [3, 25, 47];
      for (let col = 0; col < cloudsInRow; col++) {
        if (cloudIndex >= 13) break;
        clouds.push({
          color: colors[cloudIndex],
          x: positions[col],
          y: yPositions[row]
        });
        cloudIndex++;
      }
    } else {
      const positions = [10, 40];
      for (let col = 0; col < cloudsInRow; col++) {
        if (cloudIndex >= 13) break;
        clouds.push({
          color: colors[cloudIndex],
          x: positions[col],
          y: yPositions[row]
        });
        cloudIndex++;
      }
    }
    if (cloudIndex >= 13) break;
  }
  
  return clouds;
};

const INITIAL_CLOUDS: Cloud[] = generateInitialClouds();

const Index = () => {
  const [clouds, setClouds] = useState(INITIAL_CLOUDS);
  const [isRaining, setIsRaining] = useState(false);
  const [showPhotoDialog, setShowPhotoDialog] = useState(false);

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
      randomX = Math.random() * 55 + 5;
      randomY = Math.random() * 60 + 5;
      attempt++;
    } while (checkCollision(randomX, randomY, clouds) && attempt < maxAttempts);

    if (attempt < maxAttempts) {
      setClouds((prev) => [...prev, { color: "white" as const, x: randomX, y: randomY }]);
    }
  };

  const handleAction3 = () => {
    setClouds((prev) => {
      const lastWhiteIndex = prev.map((cloud, index) => cloud.color === "white" ? index : -1)
        .filter(index => index !== -1)
        .pop();
      
      if (lastWhiteIndex === undefined) return prev;
      
      return prev.filter((_, index) => index !== lastWhiteIndex);
    });
  };

  const handleRain = () => {
    setIsRaining(true);
    // Stop animation smoothly after 6.5 seconds (water fill + smooth exit)
    setTimeout(() => {
      setIsRaining(false);
    }, 6500);
  };

  const handleReset = () => {
    setClouds(INITIAL_CLOUDS);
    setIsRaining(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-6 w-full max-w-6xl">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 max-w-md text-center">
          <p className="text-sm text-foreground">
            Click on a light blue cloud to see your deletion options with groups of similar pictures!
          </p>
        </div>
        <div className="flex items-center justify-center gap-8">
        <PhoneMockup>
          <CloudWidget clouds={clouds} onLightCloudClick={() => setShowPhotoDialog(true)} />
          <RainEffect isRaining={isRaining} />
          <WaterFill isActive={isRaining} />
        </PhoneMockup>
        <ControlButtons
          onAction1={handleAction1}
          onAction2={handleAction2}
          onAction3={handleAction3}
          onRain={handleRain}
          onReset={handleReset}
        />
      </div>
      </div>
      <PhotoGroupsDialog open={showPhotoDialog} onOpenChange={setShowPhotoDialog} />
    </div>
  );
};

export default Index;
