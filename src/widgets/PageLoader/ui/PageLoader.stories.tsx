
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorators'

import { PageLoader } from './PageLoader'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof PageLoader> = {
    title: 'widgets/PageLoader',
    component: PageLoader
}

export default meta
  type Story = StoryObj<typeof PageLoader>

export const Light: Story = {
    render: () => <PageLoader />
}

export const Dark: Story = {
    render: () => <PageLoader />
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
