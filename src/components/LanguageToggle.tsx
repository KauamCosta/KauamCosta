import { type Language } from "../data/profileData";

const LanguageToggle = ({ language, setLanguage }: { language: Language; setLanguage: (lang: Language) => void }) => (
  <button type="button" className="utility-button language-button" onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
    aria-label={language === "pt" ? "Switch to English" : "Mudar para português"}>
    {language === "pt" ? "EN" : "PT"}
  </button>
);

export default LanguageToggle;
