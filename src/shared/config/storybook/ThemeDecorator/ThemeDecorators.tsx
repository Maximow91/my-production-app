// eslint-disable-next-line prod-app-plugin/layer-imports
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { type Theme } from "@/shared/const/theme";
import { type Decorator } from "@storybook/react";

export const ThemeDecorator = (theme: Theme) => {
  const decorator: Decorator = (Story) => (
    <ThemeProvider initalTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
  return decorator;
};
