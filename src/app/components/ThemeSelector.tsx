"use client";

import { useEffect } from "react";

interface Props {
  theme: string | null;
  setTheme: (theme: string) => void;
}

const themes = [
  "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave",
  "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua",
  "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk",
  "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim",
  "nord", "sunset", "caramelatte", "abyss", "silk"
];

export default function ThemeSelector({ theme, setTheme }: Props) {
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-sm bg-base-200 text-base-content">
        🎨 Theme
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52 max-h-64 overflow-y-auto"
      >
        {themes.map((t) => (
          <li key={t}>
            <button
              className={`capitalize text-sm px-2 py-1 text-left ${
                theme === t ? "bg-primary text-primary-content font-semibold" : ""
              }`}
              onClick={() => setTheme(t)}
            >
              {t}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
