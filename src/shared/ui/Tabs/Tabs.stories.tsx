import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
    title: 'shared/Tabs',
    component: Tabs
}

export default meta
  type Story = StoryObj<typeof Tabs>

export const Normal: Story = {
    render: () => <Tabs value='tab_2' onTabClick={action('on Tab Click')} tabs={[
        {
            value: 'tab_1',
            content: 'tab_1'
        },
        {
            value: 'tab_2',
            content: 'tab_2'
        },
        {
            value: 'tab_3',
            content: 'tab_3'
        }
    ]} />
}
