import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorators'

import { Navbar } from './Navbar'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar
}

export default meta
  type Story = StoryObj<typeof Navbar>

export const Light: Story = {
    render: () => <Navbar />
}

export const Dark: Story = {
    render: () => <Navbar />
}

export const UserLogined: Story = {
    render: () => <Navbar />
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]

UserLogined.decorators = [StoreDecorator({
    user: {
        authData: { id: '1', username: 'sdsf' }
    }
})]
