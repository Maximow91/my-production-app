import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorators'

import ProfilePage from './ProfilePage'

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage
}

export default meta
  type Story = StoryObj<typeof ProfilePage>

export const Normal: Story = {
    render: () => <ProfilePage />
}

export const Dark: Story = {
    render: () => <ProfilePage/>
}

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
Normal.decorators = [StoreDecorator({})]
