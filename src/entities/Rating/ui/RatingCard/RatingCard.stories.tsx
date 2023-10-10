import type { Meta, StoryObj } from "@storybook/react";
import { RatingCard } from "./RatingCard";

const meta: Meta<typeof RatingCard> = {
  title: "entities/Rating/RatingCard",
  component: RatingCard,
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const Normal: Story = {
  render: () => <RatingCard title="Rate" />,
};

export const WithFeedback: Story = {
  render: () => (
    <RatingCard
      title="RateWithFeedback"
      feedbackTitle="leave your feedback"
      hasFeedback={true}
    />
  ),
};
