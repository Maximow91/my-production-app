import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorators";
import { AppLink, AppLinkTheme } from "./AppLink";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof AppLink> = {
  title: "shared/AppLink",
  component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  render: () => (
    <AppLink theme={AppLinkTheme.PRIMARY} to="/">
      Link
    </AppLink>
  ),
};

export const PrimaryDark: Story = {
  render: () => (
    <AppLink theme={AppLinkTheme.PRIMARY} to="/">
      Link
    </AppLink>
  ),
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary: Story = {
  render: () => (
    <AppLink theme={AppLinkTheme.SECONDARY} to="/">
      Link
    </AppLink>
  ),
};

export const SecondaryDark: Story = {
  render: () => (
    <AppLink theme={AppLinkTheme.SECONDARY} to="/">
      Link
    </AppLink>
  ),
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
