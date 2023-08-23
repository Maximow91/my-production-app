
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorators'

import { Text, TextSize, TextTheme } from './Text'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text
}

export default meta
  type Story = StoryObj<typeof Text>

export const Primary: Story = {
    render: () => <Text title='Title' text='test text' />
}

export const Error: Story = {
    render: () => <Text theme={TextTheme.ERROR} title='Titlsdsdsde' text='test text' />
}

export const OnlyTitle: Story = {
    render: () => <Text title='Only title' />
}

export const OnlyText: Story = {
    render: () => <Text text='Only text' />
}

export const PrimaryDark: Story = {
    render: () => <Text title='Title' text='test text' />
}

export const OnlyTitleDark: Story = {
    render: () => <Text title='Only title' />
}

export const OnlyTextDark: Story = {
    render: () => <Text text='Only text' />
}

export const SizeM: Story = {
    render: () => <Text title='Title' text='test text' />
}

export const SizeL: Story = {
    render: () => <Text size={TextSize.L} title='Title' text='test text' />
}

export const SizeS: Story = {
    render: () => <Text size={TextSize.S} title='Title' text='test text' />
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
