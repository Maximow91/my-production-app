import type { Meta, StoryObj } from '@storybook/react'
import { ArticleType } from '../../model/const/const'
import { ArticleTypeTabs } from './ArticleTypeTabs'

const meta: Meta<typeof ArticleTypeTabs> = {
    title: 'entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs
}

export default meta
  type Story = StoryObj<typeof ArticleTypeTabs>

export const Normal: Story = {
    render: () => <ArticleTypeTabs value={ArticleType.IT} onChangeType={() => {}} />
}
