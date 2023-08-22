import type { Meta, StoryObj } from '@storybook/react'
import { ArticleSortField } from '../../model/const/const'

import { ArticleSortSelector } from './ArticleSortSelector'

const meta: Meta<typeof ArticleSortSelector> = {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector
}

export default meta
  type Story = StoryObj<typeof ArticleSortSelector>

export const Normal: Story = {
    render: () => <ArticleSortSelector sort={ArticleSortField.CREATED} order={'asc'} onChangeOrder={() => {}} onChangeSortFiels={() => {}} />
}
