
import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorators'

import { PageLoader } from './PageLoader'

const meta: Meta<typeof PageLoader> = {
    title: 'wigets/PageLoader',
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
