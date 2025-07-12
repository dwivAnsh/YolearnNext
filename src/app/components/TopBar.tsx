"use client";

import { ReactNode } from "react";
import { Bell, Settings, User } from "lucide-react";
import ThemeSelector from "../components/ThemeSelector";

interface TopBarProps {
  children?: ReactNode;
  theme: string | null;
  setTheme: (theme: string) => void;
}

export default function TopBar({ children, theme, setTheme }: TopBarProps) {
  return (
    <div className="w-full h-[88px] border-b border-base-300 bg-base-100 flex items-center justify-between px-6">
      <div className="flex flex-col items-start">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent transition-all duration-300">
          YoLearn.ai
        </h1>
        <p className="text-xs text-base-content opacity-60 -mt-1">
          Your AI Learning Companion
        </p>
      </div>
      <div className="flex items-center gap-4 text-base-content text-xl">
        <button className="btn btn-ghost btn-sm hover:text-primary">
          <Bell className="w-5 h-5" />
        </button>
        <button className="btn btn-ghost btn-sm hover:text-primary">
          <Settings className="w-5 h-5" />
        </button>
        <button className="btn btn-ghost btn-sm hover:text-primary">
          <User className="w-5 h-5" />
        </button>
        {/* ✅ Pass theme props here */}
        <ThemeSelector theme={theme} setTheme={setTheme} />
        {children}
      </div>
    </div>
  );
}
