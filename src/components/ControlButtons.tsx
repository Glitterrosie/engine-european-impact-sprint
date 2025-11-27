import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface ControlButtonsProps {
  onAction1: () => void;
  onAction2: () => void;
  onAction3: () => void;
  onRain: () => void;
  onReset: () => void;
}

export const ControlButtons = ({ onAction1, onAction2, onAction3, onRain, onReset }: ControlButtonsProps) => {
  return (
    <motion.div 
      className="flex flex-col gap-4"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Button
        onClick={onAction1}
        size="lg"
        className="bg-card hover:bg-card/90 text-card-foreground shadow-lg border-2 border-border transition-all hover:scale-105 font-semibold"
      >
        Delete unrelevant data
      </Button>
      <Button
        onClick={onAction2}
        size="lg"
        className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg border-2 border-accent transition-all hover:scale-105 font-semibold"
      >
        Buy new Cloud Storage
      </Button>
      <Button
        onClick={onAction3}
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg border-2 border-primary transition-all hover:scale-105 font-semibold"
      >
        Delete Cloud Storage
      </Button>
      <Button
        onClick={onRain}
        size="lg"
        className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg border-2 border-blue-600 transition-all hover:scale-105 font-semibold"
      >
        Rain
      </Button>
      <Button
        onClick={onReset}
        size="lg"
        variant="outline"
        className="shadow-lg transition-all hover:scale-105 font-semibold"
      >
        Reset
      </Button>
    </motion.div>
  );
};
