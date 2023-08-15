import { type Notification } from '../../model/types/notification'

import { NotificationList } from './NotificationList'

const notifications: Notification[] = [
    { id: '1', title: 'title', description: 'description' },
    { id: '2', title: 'title', description: 'description' },
    { id: '3', title: 'title', description: 'description' }
]
export default {
    title: 'entities/NotificationList',
    component: <NotificationList />,
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: notifications
            }
        ]
    }
}

const Template = () => <NotificationList />

export const Normal = Template.bind({})
