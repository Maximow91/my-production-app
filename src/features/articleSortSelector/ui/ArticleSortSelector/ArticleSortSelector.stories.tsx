import type { Meta, StoryObj } from "@storybook/react";
import { ArticleSortField } from "@/entities/Article";
import { ArticleSortSelector } from "./ArticleSortSelector";

const meta: Meta<typeof ArticleSortSelector> = {
  title: "features/ArticleSortSelector",
  component: ArticleSortSelector,
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>;

export const Normal: Story = {
  render: () => (
    <ArticleSortSelector
      sort={ArticleSortField.CREATED}
      order={"asc"}
      onChangeOrder={() => {}}
      onChangeSortFiels={() => {}}
    />
  ),
};
