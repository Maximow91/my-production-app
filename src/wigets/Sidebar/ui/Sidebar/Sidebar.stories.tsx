import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorators'

import { Sidebar } from './Sidebar'

const meta: Meta<typeof Sidebar> = {
    title: 'wigets/Sidebar',
    component: Sidebar
}

export default meta
  type Story = StoryObj<typeof Sidebar>

export const Light: Story = {
    render: () => <Sidebar />
}

export const Dark: Story = {
    render: () => <Sidebar />
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
