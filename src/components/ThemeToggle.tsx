import { useEffect, useState } from "react";
import type { Language } from "../data/profileData";

const ThemeToggle = ({ language }: { language: Language }) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme-v2") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme-v2", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button type="button" className="utility-button theme-button" onClick={() => setIsDark((theme) => !theme)}
      aria-label={language === "pt" ? `Ativar tema ${isDark ? "claro" : "escuro"}` : `Switch to ${isDark ? "light" : "dark"} theme`}
      title={language === "pt" ? "Alternar tema" : "Toggle theme"}>
      <span aria-hidden="true">{isDark ? "☀" : "◐"}</span>
    </button>
  );
};

export default ThemeToggle;
