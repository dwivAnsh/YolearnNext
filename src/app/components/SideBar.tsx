// ✅ Updated imports with relative paths instead of alias

"use client";

import { useState } from "react";
import { menuItems, shortcuts } from "../constants/menuItems";

interface MenuItem {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function SideBar() {
  const [activeItem, setActiveItem] = useState("Learn");

  return (
    <div className="w-64 h-full bg-base-100 border-r border-base-300 flex flex-col justify-between p-4 transition-colors">
      <div className="overflow-y-auto">
        {/* 🧠 Learning Zone */}
        <h2 className="text-xs font-[Inter] font-semibold text-base-content/70 uppercase mb-2 px-2">
          Learning Zone
        </h2>
        <div className="space-y-2 mb-6">
          {(menuItems as MenuItem[]).map(({ label, icon: Icon }) => {
            const isActive = activeItem === label;
            return (
              <div
                key={label}
                onClick={() => setActiveItem(label)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-content"
                    : "hover:bg-base-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-normal">{label}</span>
              </div>
            );
          })}
        </div>

        {/* ⚡ Shortcuts */}
        <h2 className="text-xs font-semibold text-base-content/70 uppercase mb-2 px-2">
          Shortcuts
        </h2>
        <div className="space-y-2 mb-6">
          {(shortcuts as MenuItem[]).map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-base-200 text-base-content transition"
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>

        {/* 🌐 Connect */}
        <h2 className="text-xs font-semibold text-base-content/70 uppercase mb-2 px-2">
          Connect
        </h2>
        <div className="flex gap-4 justify-start px-4 text-base-content text-2xl">
          <i className="ri-twitter-line hover:text-primary transition-colors" />
          <i className="ri-youtube-line hover:text-primary transition-colors" />
          <i className="ri-instagram-line hover:text-primary transition-colors" />
          <i className="ri-facebook-circle-line hover:text-primary transition-colors" />
        </div>
      </div>
    </div>
  );
}

