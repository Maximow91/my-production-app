import type { Meta, StoryObj } from "@storybook/react";

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { ProfileRating } from "./ProfileRating";

const meta: Meta<typeof ProfileRating> = {
  title: "features/ProfileRating",
  component: ProfileRating,
};

export default meta;
type Story = StoryObj<typeof ProfileRating>;

export const Normal: Story = {
  render: () => <ProfileRating id={"2"} />,
};

Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/profile-ratings?userId=1&profileId=1`,
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
