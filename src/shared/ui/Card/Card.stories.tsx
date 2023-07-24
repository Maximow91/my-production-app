import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Text } from '../Text/Text'

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card
}

export default meta
  type Story = StoryObj<typeof Card>

export const Normal: Story = {
    render: () => <Card >
        <Text title={'test'} text={'test  - pololo'} />
    </Card>
}
