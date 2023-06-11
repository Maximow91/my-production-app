import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorators'

import { ButtonSize, ButtonTheme, CustomButton } from './CustomButton'

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

export const ClearInverted: Story = {
    render: () => <CustomButton theme={ButtonTheme.CLEAR_INVERTED} >Text</CustomButton>
}

export const Outline: Story = {
    render: () => <CustomButton theme={ButtonTheme.OUTLINE} >Text</CustomButton>
}

export const OutlineSizeL: Story = {
    render: () => <CustomButton theme={ButtonTheme.OUTLINE} size={ButtonSize.L} >Text</CustomButton>
}

export const OutlineSizeXL: Story = {
    render: () => <CustomButton theme={ButtonTheme.OUTLINE} size={ButtonSize.XL} >Text</CustomButton>
}

export const OutlineDark: Story = {
    render: () => <CustomButton theme={ButtonTheme.OUTLINE} >Text</CustomButton>
}

export const BackgroundTheme: Story = {
    render: () => <CustomButton theme={ButtonTheme.BACKGROUND} >Text</CustomButton>
}

export const InvertedBackgroundTheme: Story = {
    render: () => <CustomButton theme={ButtonTheme.BACKGROUND_INVERTED} >Text</CustomButton>
}

export const Square: Story = {
    render: () => <CustomButton theme={ButtonTheme.BACKGROUND_INVERTED} square >{'>'}</CustomButton>
}

export const SquareSizeL: Story = {
    render: () => <CustomButton theme={ButtonTheme.BACKGROUND_INVERTED} size={ButtonSize.L} square >{'>'}</CustomButton>
}

export const SquareSizeXL: Story = {
    render: () => <CustomButton theme={ButtonTheme.BACKGROUND_INVERTED} size={ButtonSize.XL} square >{'>'}</CustomButton>
}

export const Disabled: Story = {
    render: () => <CustomButton disabled={true} theme={ButtonTheme.OUTLINE} >{'Text'}</CustomButton>
}

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
