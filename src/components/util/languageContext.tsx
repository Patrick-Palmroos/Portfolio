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

// Provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "fi" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
