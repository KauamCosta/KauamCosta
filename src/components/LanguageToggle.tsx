import BrazilFlag from "../assets/BrazilFlag";
import USFlag from "../assets/USFlag";
import { type Language } from "../data/profileData";

const LanguageToggle = ({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (lang: Language) => void;
}) => {
  return (
    <button
      onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
      className="fixed z-50 top-4 right-16 p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-200 hover:shadow-lg hover:brightness-150 flex items-center gap-2"
      aria-label="Toggle language"
    >
      {language === "pt" ? <USFlag /> : <BrazilFlag />}
    </button>
  );
};

export default LanguageToggle;
