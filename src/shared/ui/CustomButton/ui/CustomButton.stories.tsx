import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorators'

import { ButtonTheme, CustomButton } from './CustomButton'

const meta: Meta<typeof CustomButton> = {
    title: 'shared/CustomButton',
    component: CustomButton
}

export default meta
  type Story = StoryObj<typeof CustomButton>

export const Primary: Story = {
    render: () => <CustomButton >Text</CustomButton>
}

export const Clear: Story = {
    render: () => <CustomButton theme={ButtonTheme.CLEAR} >Text</CustomButton>
}

export const Outline: Story = {
    render: () => <CustomButton theme={ButtonTheme.OUTLINE} >Text</CustomButton>
}

export const OutlineDark: Story = {
    render: () => <CustomButton theme={ButtonTheme.OUTLINE} >Text</CustomButton>
}

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
