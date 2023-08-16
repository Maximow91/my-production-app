
import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorators'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input
}

export default meta
  type Story = StoryObj<typeof Input>

export const Primary: Story = {
    render: () => <Input />
}

export const Dark: Story = {
    render: () => <Input />
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
