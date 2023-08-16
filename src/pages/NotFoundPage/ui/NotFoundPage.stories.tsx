import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorators'

import { NotFoundPage } from './NotFoundPage'

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage
}

export default meta
  type Story = StoryObj<typeof NotFoundPage>

export const Normal: Story = {
    render: () => <NotFoundPage />
}

export const Dark: Story = {
    render: () => <NotFoundPage />
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
