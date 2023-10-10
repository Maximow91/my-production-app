import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent";
import { ArticleBlockType } from "../../model/const/const";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorators";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof ArticleCodeBlockComponent> = {
  title: "entities/Article/ArticleCodeBlockComponent",
  component: ArticleCodeBlockComponent,
};

const text =
  "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);";

export default meta;
type Story = StoryObj<typeof ArticleCodeBlockComponent>;

export const Primary: Story = {
  render: () => (
    <ArticleCodeBlockComponent
      block={{
        id: "1",
        type: ArticleBlockType.CODE,
        code: text,
      }}
    />
  ),
};

export const Dark: Story = {
  render: () => (
    <ArticleCodeBlockComponent
      block={{
        id: "1",
        type: ArticleBlockType.CODE,
        code: text,
      }}
    />
  ),
};

export const Orange: Story = {
  render: () => (
    <ArticleCodeBlockComponent
      block={{
        id: "1",
        type: ArticleBlockType.CODE,
        code: text,
      }}
    />
  ),
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
