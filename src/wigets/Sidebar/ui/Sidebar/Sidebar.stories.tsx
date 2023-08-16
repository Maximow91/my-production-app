import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorators'

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

export const NoAuth: Story = {
    render: () => <Sidebar />
}

Light.decorators = [StoreDecorator({
    user: {
        authData: { id: '1', username: 'fdfdf' }
    }
})]

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {
        authData: { id: '1', username: 'fdfdf' }
    }
})]

NoAuth.decorators = [StoreDecorator({
    user: {
    }
})]
