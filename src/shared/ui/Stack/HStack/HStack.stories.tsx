import type { Meta, StoryObj } from "@storybook/react";
import { HStack } from "../HStack/HStack";

const meta: Meta<typeof HStack> = {
  title: "shared/HStack",
  component: HStack,
};

export default meta;
type Story = StoryObj<typeof HStack>;

export const Normal: Story = {
  render: () => (
    <HStack>
      <div>item</div>
      <div>item</div>
      <div>item</div>
    </HStack>
  ),
};

export const NormalGap4: Story = {
  render: () => (
    <HStack gap="4">
      <div>item</div>
      <div>item</div>
      <div>item</div>
    </HStack>
  ),
};

export const NormalGap8: Story = {
  render: () => (
    <HStack gap="8">
      <div>item</div>
      <div>item</div>
      <div>item</div>
    </HStack>
  ),
};

export const NormalGap16: Story = {
  render: () => (
    <HStack gap="16">
      <div>item</div>
      <div>item</div>
      <div>item</div>
    </HStack>
  ),
};

export const NormalGap32: Story = {
  render: () => (
    <HStack gap="32">
      <div>item</div>
      <div>item</div>
      <div>item</div>
    </HStack>
  ),
};
