import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fi";

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

// Custom hook to use the LanguageContext
export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Function to get the user's preferred language
const getPreferredLanguage = (): Language => {
  const userLang = navigator.language.slice(0, 2); // Get the first two characters, e.g., "en" or "fi"
  return userLang === "fi" ? "fi" : "en"; // Default to "en" if not "fi"
};

// Provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first, then default to preferred language
    const savedLanguage = localStorage.getItem("appLanguage") as Language;
    return savedLanguage || getPreferredLanguage();
  });

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === "en" ? "fi" : "en";
      localStorage.setItem("appLanguage", newLanguage); // Save to localStorage
      return newLanguage;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
