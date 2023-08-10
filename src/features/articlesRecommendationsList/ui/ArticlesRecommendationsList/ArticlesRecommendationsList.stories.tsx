import type { Meta, StoryObj } from '@storybook/react'
import { ArticlesRecommendationsList } from './ArticlesRecommendationsList'

const meta: Meta<typeof ArticlesRecommendationsList> = {
    title: 'features/ArticlesRecommendationsListm',
    component: ArticlesRecommendationsList
}

export default meta
  type Story = StoryObj<typeof ArticlesRecommendationsList>

export const Normal: Story = {
    render: () => <ArticlesRecommendationsList />
}
