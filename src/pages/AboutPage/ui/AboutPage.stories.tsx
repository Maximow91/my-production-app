import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/const/theme'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorators'

import AboutPage from './AboutPage'

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage
}

export default meta
  type Story = StoryObj<typeof AboutPage>

export const Normal: Story = {
    render: () => <AboutPage />
}

export const Dark: Story = {
    render: () => <AboutPage />
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
