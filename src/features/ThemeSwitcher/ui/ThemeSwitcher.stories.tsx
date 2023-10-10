import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorators";
import { Theme } from "@/shared/const/theme";

import { ThemeSwitcher } from "./ThemeSwitcher";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "widgets/ThemeSwither",
  component: ThemeSwitcher,
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {
  render: () => <ThemeSwitcher />,
};

export const Dark: Story = {
  render: () => <ThemeSwitcher />,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
