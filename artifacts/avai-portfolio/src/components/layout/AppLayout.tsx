import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { DemoTour } from "./DemoTour";
import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
      <DemoTour />
    </div>
  );
}
