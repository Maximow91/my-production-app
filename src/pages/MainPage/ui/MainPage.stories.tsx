import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorators'

import MainPage from './MainPage'

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage
}

export default meta
  type Story = StoryObj<typeof MainPage>

export const Normal: Story = {
    render: () => <MainPage />
}

export const Dark: Story = {
    render: () => <MainPage />
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
