import type { Meta, StoryObj } from "@storybook/react";
import { ArticleBlockType } from "../../model/const/const";
import { TextBlockComponent } from "./TextBlockComponent";

const meta: Meta<typeof TextBlockComponent> = {
  title: "entities/Article/TextBlockComponent",
  component: TextBlockComponent,
};

const text =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ipsum error soluta porro eveniet sed omnis iusto. Ab architecto, doloremque commodi optio iure delectus ad soluta quo, corporis, expedita consectetur.";

export default meta;
type Story = StoryObj<typeof TextBlockComponent>;

export const Normal: Story = {
  render: () => (
    <TextBlockComponent
      block={{
        id: "1",
        type: ArticleBlockType.TEXT,
        paragraphs: [text, text, text],
      }}
    />
  ),
};
