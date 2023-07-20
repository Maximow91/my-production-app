import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorators'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton
}

export default meta
  type Story = StoryObj<typeof Skeleton>

export const Normal: Story = {
    render: () => <Skeleton width='100%' height={200} />
}

export const Circle: Story = {
    render: () => <Skeleton border='50%' width={100} height={100} />
}

export const NormalDark: Story = {
    render: () => <Skeleton width='100%' height={200} />
}

export const CircleDark: Story = {
    render: () => <Skeleton border='50%' width={100} height={100} />
}

NormalDark.decorators = [ThemeDecorator(Theme.DARK)]

CircleDark.decorators = [ThemeDecorator(Theme.DARK)]
