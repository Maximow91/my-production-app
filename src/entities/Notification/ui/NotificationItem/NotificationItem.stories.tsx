import type { Meta, StoryObj } from '@storybook/react'

import { type Notification } from '../../model/types/notification'
import { NotificationItem } from './NotificationItem'

const notification: Notification = {
    id: '1',
    title: 'title',
    description: 'description'
}

const meta: Meta<typeof NotificationItem> = {
    title: 'entities/NotificationItem',
    component: NotificationItem
}

export default meta
  type Story = StoryObj<typeof NotificationItem>

export const Normal: Story = {
    render: () => <NotificationItem item={notification} />
}
