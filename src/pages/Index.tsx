import { useState } from "react";
import { CloudWidget } from "@/components/CloudWidget";
import { ControlButtons } from "@/components/ControlButtons";
import { PhoneMockup } from "@/components/PhoneMockup";

type Cloud = { color: "white" | "light" | "dark"; x: number; y: number };

const INITIAL_CLOUDS: Cloud[] = [
  { color: "light" as const, x: 20, y: 20 },
  { color: "white" as const, x: 68, y: 42 },
  { color: "dark" as const, x: 28, y: 48 },
  { color: "light" as const, x: 55, y: 55 },
  { color: "white" as const, x: 38, y: 62 },
  { color: "dark" as const, x: 72, y: 58 },
  { color: "light" as const, x: 45, y: 70 },
  { color: "white" as const, x: 62, y: 75 },
  { color: "dark" as const, x: 32, y: 78 },
  { color: "light" as const, x: 52, y: 82 },
  { color: "white" as const, x: 70, y: 85 },
  { color: "dark" as const, x: 40, y: 88 },
  { color: "light" as const, x: 58, y: 90 },
];

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
      randomX = Math.random() * 50 + 25;
      randomY = Math.random() * 15 + 70;
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
      randomX = Math.random() * 50 + 25;
      randomY = Math.random() * 15 + 70;
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
