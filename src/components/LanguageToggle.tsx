import { type Language } from "../data/profileData";

const LanguageToggle = ({ language, setLanguage }: { language: Language; setLanguage: (lang: Language) => void }) => (
  <button type="button" className="utility-button language-button" onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
    aria-label={language === "pt" ? "Switch to English" : "Mudar para português"}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z" /></svg>
    {language === "pt" ? "EN" : "PT"}
  </button>
);

export default LanguageToggle;
