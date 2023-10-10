import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ArticlesPage from "./ArticlesPage";

const meta: Meta<typeof ArticlesPage> = {
  title: "pages/ArticlesPage",
  component: ArticlesPage,
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Normal: Story = {
  render: () => <ArticlesPage />,
};

Normal.decorators = [
  StoreDecorator({
    articlesPage: {
      ids: ["11", "5", "6"],
      entities: {
        11: {
          id: "5",
          title: "React news",
          subtitle: "Что нового в React за 2022 год?",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhln4-ygosRcYC8XLmLPuh_bxZXFH8xpD48w&usqp=CAU",
          views: 1,
          createdAt: "01.01.2023",
        },
      },
    },
  }),
];
