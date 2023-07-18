import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorators'
import ArticleDetailsPage from './ArticleDetailsPage'

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage
}

export default meta
  type Story = StoryObj<typeof ArticleDetailsPage>

export const Normal: Story = {
    render: () => <ArticleDetailsPage />
}

export const Dark: Story = {
    render: () => <ArticleDetailsPage />
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
