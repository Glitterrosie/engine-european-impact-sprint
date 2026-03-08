import { ReactNode } from "react";
import keyVisual from "@/assets/key-visual.png";
import esprintLogo from "@/assets/esprint-logo-white.svg";

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
      </div>

      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* E-Sprint logo */}
          <img src={esprintLogo} alt="European Impact Sprint" className="w-48 md:w-64 mb-6 mt-[-5rem] drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]" />

          {/* Page header */}
          <div className="mb-8">
            <h1 className="font-display font-black text-4xl md:text-6xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 text-lg text-white max-w-3xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
                {subtitle}
              </p>
            )}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
