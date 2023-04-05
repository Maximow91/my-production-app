import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorators'

import { Navbar } from './Navbar'

const meta: Meta<typeof Navbar> = {
    title: 'wigets/Navbar',
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

Dark.decorators = [ThemeDecorator(Theme.DARK)]
