import { CenteredContainerDecorator } from "@/shared/config/storybook/CenteredContainerDecorator/CenteredContainerDecorator";
import type { Meta, StoryObj } from "@storybook/react";
import { CustomButton } from "../../../CustomButton";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "shared/Dropdown",
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const items = [
  {
    content: "first",
  },
  {
    content: "second",
  },
  {
    content: "third",
  },
];

export const Normal: Story = {
  render: () => (
    <Dropdown trigger={<CustomButton>Open</CustomButton>} items={items} />
  ),
};

export const NormalTopLeft: Story = {
  render: () => (
    <Dropdown
      direction="top left"
      trigger={<CustomButton>Open</CustomButton>}
      items={items}
    />
  ),
};

export const NormalTopRight: Story = {
  render: () => (
    <Dropdown
      direction="top right"
      trigger={<CustomButton>Open</CustomButton>}
      items={items}
    />
  ),
};

export const NormalBottomLeft: Story = {
  render: () => (
    <Dropdown
      direction="bottom left"
      trigger={<CustomButton>Open</CustomButton>}
      items={items}
    />
  ),
};

export const NormalBottomRight: Story = {
  render: () => (
    <Dropdown
      direction="bottom right"
      trigger={<CustomButton>Open</CustomButton>}
      items={items}
    />
  ),
};

Normal.decorators = [CenteredContainerDecorator];

NormalTopLeft.decorators = [CenteredContainerDecorator];

NormalTopRight.decorators = [CenteredContainerDecorator];

NormalBottomLeft.decorators = [CenteredContainerDecorator];

NormalBottomRight.decorators = [CenteredContainerDecorator];
