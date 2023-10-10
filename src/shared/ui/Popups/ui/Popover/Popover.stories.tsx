import { CenteredContainerDecorator } from "@/shared/config/storybook/CenteredContainerDecorator/CenteredContainerDecorator";
import type { Meta, StoryObj } from "@storybook/react";
import { CustomButton } from "../../../CustomButton";
import { Popover } from "./Popover";

const meta: Meta<typeof Popover> = {
  title: "shared/Popover",
  component: Popover,
};

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

const content = items.map((item) => (
  <div key={item.content}>{item.content}</div>
));

export default meta;
type Story = StoryObj<typeof Popover>;

export const Normal: Story = {
  render: () => (
    <Popover trigger={<CustomButton>Open</CustomButton>}>{content}</Popover>
  ),
};

export const NormalTopLeft: Story = {
  render: () => (
    <Popover direction="top left" trigger={<CustomButton>Open</CustomButton>}>
      {content}
    </Popover>
  ),
};

export const NormalTopRight: Story = {
  render: () => (
    <Popover direction="top right" trigger={<CustomButton>Open</CustomButton>}>
      {content}
    </Popover>
  ),
};

export const NormalBottomLeft: Story = {
  render: () => (
    <Popover
      direction="bottom left"
      trigger={<CustomButton>Open</CustomButton>}
    >
      {content}
    </Popover>
  ),
};

export const NormalBottomRight: Story = {
  render: () => (
    <Popover
      direction="bottom right"
      trigger={<CustomButton>Open</CustomButton>}
    >
      {content}
    </Popover>
  ),
};

Normal.decorators = [CenteredContainerDecorator];

NormalTopLeft.decorators = [CenteredContainerDecorator];

NormalTopRight.decorators = [CenteredContainerDecorator];

NormalBottomLeft.decorators = [CenteredContainerDecorator];

NormalBottomRight.decorators = [CenteredContainerDecorator];
