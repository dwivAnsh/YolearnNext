"use client"; // 👈 MUST BE FIRST LINE

import { useEffect, useState } from "react";
import MainSection from "../app/components/MainSection";
import SideBar from "../app/components/SideBar";
import TopBar from "../app/components/TopBar";
import TutorInfo from "../app/components/TutorInfo";

export default function Home() {
  // const [theme, setTheme] = useState<string | null>(null);
  const [theme, setTheme] = useState<string | null>("retro");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (theme !== null) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-base-100 text-primary text-3xl">
        <i className="ri-loader-2-line animate-spin" />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen overflow-hidden font-[Inter,sans-serif] flex flex-col bg-base-100 text-base-content transition-colors">
      <TopBar theme={theme} setTheme={setTheme} />
      <div className="flex flex-1 min-h-0 overflow-hidden">
        <SideBar />
        <div className="flex-1 overflow-auto">
          <MainSection />
        </div>
        <TutorInfo />
      </div>
    </div>
  );
}
