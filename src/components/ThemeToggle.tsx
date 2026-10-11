import type { Language } from "../data/profileData";
import { toggleTheme, useTheme } from "../lib/theme";

const ThemeToggle = ({ language }: { language: Language }) => {
  const isDark = useTheme() === "dark";
  const label = language === "pt" ? `Ativar tema ${isDark ? "claro" : "escuro"}` : `Switch to ${isDark ? "light" : "dark"} theme`;

  return (
    <button type="button" className="utility-button theme-button" onClick={(event) => toggleTheme(event.currentTarget)}
      aria-label={label} title={label}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {isDark ? <><path d="M9 18h6M10 22h4M8.1 14.2a6 6 0 1 1 7.8 0C14.8 15.1 15 16 15 18H9c0-2 .2-2.9-.9-3.8Z" /><path d="M12 8v4" /></> : <><path d="M20.8 13a8.6 8.6 0 1 1-9.8-9.8 6.7 6.7 0 0 0 9.8 9.8Z" /><path d="m18 2 .7 2.3L21 5l-2.3.7L18 8l-.7-2.3L15 5l2.3-.7Z" /></>}
      </svg>
      <span className="theme-label">{language === "pt" ? (isDark ? "Claro" : "Escuro") : (isDark ? "Light" : "Dark")}</span>
    </button>
  );
};

export default ThemeToggle;
