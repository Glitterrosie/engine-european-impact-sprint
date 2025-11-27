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

const Index = () => {
  const [clouds, setClouds] = useState<Cloud[]>([
    { color: "white", x: 10, y: 10 },
    { color: "light", x: 45, y: 25 },
    { color: "dark", x: 20, y: 50 },
    { color: "white", x: 60, y: 60 },
    { color: "light", x: 5, y: 75 },
  ]);

  const deleteLightCloud = () => {
    const lightCloudIndex = clouds.findIndex(cloud => cloud.color === "light");
    if (lightCloudIndex !== -1) {
      const newClouds = [...clouds];
      newClouds[lightCloudIndex] = { ...newClouds[lightCloudIndex], color: "white" };
      setClouds(newClouds);
    }
  };

  const addCloud = (color: "white" | "light" | "dark") => {
    const randomX = Math.random() * 60 + 10;
    const randomY = Math.random() * 70 + 5;
    setClouds([...clouds, { color, x: randomX, y: randomY }]);
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
            onAction2={() => addCloud("light")}
            onAction3={() => addCloud("dark")}
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
