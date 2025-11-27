import { useState } from "react";
import { CloudWidget } from "@/components/CloudWidget";
import { ControlButtons } from "@/components/ControlButtons";
import { PhoneMockup } from "@/components/PhoneMockup";

type Cloud = { color: "white" | "light" | "dark"; x: number; y: number };

const INITIAL_CLOUDS: Cloud[] = [
  { color: "light" as const, x: 15, y: 5 },
  { color: "white" as const, x: 55, y: 10 },
  { color: "dark" as const, x: 5, y: 20 },
  { color: "light" as const, x: 40, y: 25 },
  { color: "white" as const, x: 25, y: 35 },
  { color: "dark" as const, x: 60, y: 40 },
  { color: "light" as const, x: 10, y: 50 },
  { color: "white" as const, x: 45, y: 55 },
  { color: "dark" as const, x: 30, y: 65 },
  { color: "light" as const, x: 58, y: 70 },
  { color: "white" as const, x: 15, y: 78 },
  { color: "dark" as const, x: 42, y: 82 },
  { color: "light" as const, x: 68, y: 88 },
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
      randomX = Math.random() * 70 + 10;
      randomY = Math.random() * 80 + 10;
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
      randomY = Math.random() * 80 + 10;
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
