import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import LoginForm from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "features/LoginForm",
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  render: () => <LoginForm />,
};

export const WithError: Story = {
  render: () => <LoginForm />,
};

export const Loading: Story = {
  render: () => <LoginForm />,
};

Primary.decorators = [
  StoreDecorator({
    loginForm: {
      username: "admin",
      password: "123",
      isLoading: false,
    },
  }),
];

WithError.decorators = [
  StoreDecorator({
    loginForm: {
      username: "admin",
      password: "123",
      isLoading: false,
      error: "ERROR",
    },
  }),
];

Loading.decorators = [
  StoreDecorator({
    loginForm: {
      username: "",
      password: "",
      isLoading: true,
    },
  }),
];
