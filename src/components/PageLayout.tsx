import { ReactNode } from "react";
import keyVisual from "@/assets/key-visual.png";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const PageLayout = ({ children, title, subtitle }: PageLayoutProps) => {
  return (
    <div className="min-h-screen relative">
      {/* Fixed key visual background */}
      <div className="fixed inset-0 -z-10">
        <img src={keyVisual} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Page header on the gradient */}
          <div className="mb-8">
            <h1 className="font-display font-black text-4xl md:text-6xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 text-lg text-white/80 max-w-3xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
                {subtitle}
              </p>
            )}
          </div>

          {/* Content in white boxes */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
