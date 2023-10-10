import type { Meta, StoryObj } from "@storybook/react";
import { ArticleBlockType } from "../../model/const/const";
import { ArticleImageBlockComponent } from "./ArticleImageBlockComponent";

const meta: Meta<typeof ArticleImageBlockComponent> = {
  title: "entities/Article/ArticleImageBlockComponent",
  component: ArticleImageBlockComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleImageBlockComponent>;

export const Normal: Story = {
  render: () => (
    <ArticleImageBlockComponent
      block={{
        id: "1",
        type: ArticleBlockType.IMAGE,
        title: "TITLE",
        src: "https://blog.logrocket.com/wp-content/uploads/2021/02/machine-learning-libraries-javascript.png",
      }}
    />
  ),
};
