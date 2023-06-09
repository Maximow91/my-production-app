
import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorators'

import { PageError } from './PageError'

const meta: Meta<typeof PageError> = {
    title: 'wigets/PageError',
    component: PageError
}

export default meta
  type Story = StoryObj<typeof PageError>

export const Light: Story = {
    render: () => <PageError />
}

export const Dark: Story = {
    render: () => <PageError />
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
