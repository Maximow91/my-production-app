
import type { Meta, StoryObj } from '@storybook/react'
import { CommentList } from './CommentList'
import userImg from '@/shared/assets/test/image.jpg'

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList
}

export default meta
  type Story = StoryObj<typeof CommentList>

export const Primary: Story = {
    render: () => <CommentList comments={[
        {
            id: '1',
            text: 'Hello world',
            user: {
                id: '1',
                username: 'User',
                avatar: userImg
            }
        },
        {
            id: '2',
            text: 'Comment',
            user: {
                id: '12',
                username: 'User_test',
                avatar: userImg
            }
        },
        {
            id: '13',
            text: 'Hello',
            user: {
                id: '11',
                username: 'User555',
                avatar: userImg
            }
        }
    ]} />
}

export const Loading: Story = {
    render: () => <CommentList comments={[
        {
            id: '1',
            text: 'Hello world',
            user: {
                id: '1',
                username: 'User',
                avatar: userImg
            }
        },
        {
            id: '2',
            text: 'Comment',
            user: {
                id: '12',
                username: 'User_test',
                avatar: userImg
            }
        },
        {
            id: '13',
            text: 'Hello',
            user: {
                id: '11',
                username: 'User555',
                avatar: userImg
            }
        }
    ]} isLoading={true} />
}

export const NoData: Story = {
    render: () => <CommentList comments={[]} />
}
