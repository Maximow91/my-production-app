
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorators'

import { Loader } from './Loader'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader
}

export default meta
  type Story = StoryObj<typeof Loader>

export const Light: Story = {
    render: () => <Loader />
}

export const Dark: Story = {
    render: () => <Loader />
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
