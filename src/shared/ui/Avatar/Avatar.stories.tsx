
import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import AvatarImg from '../../assets/test/image.jpg'

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar
}

export default meta
  type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
    render: () => <Avatar src={AvatarImg} />
}

export const CustomSized: Story = {
    render: () => <Avatar size={200} src={AvatarImg} />
}
