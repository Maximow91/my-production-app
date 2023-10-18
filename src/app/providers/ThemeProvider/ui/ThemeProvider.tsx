import { useState, useMemo, type ReactNode, useEffect } from "react";
import { Theme } from "@/shared/const/theme";
import { ThemeContext } from "@/shared/lib/context/ThemeContext";
import { useJsonSettings } from "@/entities/User";

interface ThemeProviderProps {
  children: ReactNode;
  initalTheme?: Theme;
}

export const ThemeProvider = ({
  children,
  initalTheme,
}: ThemeProviderProps) => {
  const { theme: defaultTheme } = useJsonSettings();

  const [isThemeInited, setThemeInented] = useState(false);

  const [theme, setTheme] = useState<Theme>(
    initalTheme || defaultTheme || Theme.LIGHT,
  );

  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme);
      setThemeInented(true);
    }
  }, [defaultTheme, isThemeInited]);

  const defaultProps = useMemo(() => {
    return {
      theme,
      setTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
