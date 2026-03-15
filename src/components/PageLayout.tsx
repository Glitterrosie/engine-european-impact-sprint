import { ReactNode } from "react";

import esprintLogo from "@/assets/esprint-logo-white.svg";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: ReactNode;
  noPadBottom?: boolean;
}

const PageLayout = ({ children, title, subtitle, noPadBottom }: PageLayoutProps) => {
  return (
    <div className="min-h-screen relative flex flex-col">

      <div className={`pt-20 ${noPadBottom ? '' : 'pb-20'} flex flex-col flex-1`}>
        <div className="container mx-auto px-4 flex flex-col flex-1">
          {/* E-Sprint logo */}
          <img src={esprintLogo} alt="European Impact Sprint" loading="eager" fetchPriority="high" className="w-48 md:w-64 mb-6 drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]" />

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
