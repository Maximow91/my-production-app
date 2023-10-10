import type { Meta, StoryObj } from "@storybook/react";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorators";
import avatar from "@/shared/assets/test/image.jpg";
import { Theme } from "@/shared/const/theme";

import ProfilePage from "./ProfilePage";

const meta: Meta<typeof ProfilePage> = {
  title: "pages/ProfilePage",
  component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Normal: Story = {
  render: () => <ProfilePage />,
};

export const Dark: Story = {
  render: () => <ProfilePage />,
};

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        username: "John",
        age: 22,
        country: Country.Belarus,
        firstname: "Jony",
        lastname: "Clinton",
        city: "Manchester",
        currency: Currency.RUB,
        avatar,
      },
    },
  }),
];
Normal.decorators = [
  StoreDecorator({
    profile: {
      form: {
        username: "John",
        age: 22,
        country: Country.Belarus,
        firstname: "Jony",
        lastname: "Clinton",
        city: "Manchester",
        currency: Currency.RUB,
        avatar,
      },
    },
  }),
];
