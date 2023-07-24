
import type { Meta, StoryObj } from '@storybook/react'
import userImg from 'shared/assets/test/image.jpg'
import { CommentCard } from './CommentCard'

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard
}

export default meta
  type Story = StoryObj<typeof CommentCard>

export const Primary: Story = {
    render: () => <CommentCard comment={ {
        id: '1',
        text: 'Hello world',
        user: {
            id: '1',
            username: 'User',
            avatar: userImg
        }
    }} />
}

export const Loading: Story = {
    render: () => <CommentCard comment={ {
        id: '1',
        text: 'Hello world',
        user: {
            id: '1',
            username: 'User',
            avatar: userImg
        }
    }}
    isLoading={true}
    />
}
