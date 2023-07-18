import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorators'
import ArticlesPage from './ArticlesPage'

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage',
    component: ArticlesPage
}

export default meta
  type Story = StoryObj<typeof ArticlesPage>

export const Normal: Story = {
    render: () => <ArticlesPage />
}

export const Dark: Story = {
    render: () => <ArticlesPage />
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
