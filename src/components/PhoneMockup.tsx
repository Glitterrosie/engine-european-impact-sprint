import { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
}

export const PhoneMockup = ({ children }: PhoneMockupProps) => {
  return (
    <div className="relative w-[280px] h-[570px] bg-phone-frame rounded-[50px] shadow-2xl p-3">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-7 bg-phone-notch rounded-b-3xl z-10" />
      
      {/* Screen */}
      <div className="relative w-full h-full bg-phone-screen rounded-[38px] overflow-hidden">
        {children}
      </div>
      
      {/* Home indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/20 rounded-full" />
    </div>
  );
};
