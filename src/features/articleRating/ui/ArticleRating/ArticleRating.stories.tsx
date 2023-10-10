import type { Meta, StoryObj } from "@storybook/react";
import ArticleRating from "./ArticleRating";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ArticleRating> = {
  title: "features/ArticleRating",
  component: ArticleRating,
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Normal: Story = {
  render: () => <ArticleRating articleId={"1"} />,
};

Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: "GET",
      status: 200,
      response: [
        {
          rate: 4,
        },
      ],
    },
  ],
};

Normal.decorators = [
  StoreDecorator({
    user: {
      authData: { id: "1" },
    },
  }),
];

export const WithoutRate: Story = {
  render: () => <ArticleRating articleId={"1"} />,
};

WithoutRate.decorators = [
  StoreDecorator({
    user: {
      authData: { id: "1" },
    },
  }),
];

WithoutRate.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: "GET",
      status: 200,
      response: [],
    },
  ],
};
