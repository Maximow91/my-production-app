import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'
import TestIcon from '@/shared/assets/icons/bell.svg'

const meta: Meta<typeof Icon> = {
    title: 'shared/Icon',
    component: Icon
}

export default meta
  type Story = StoryObj<typeof Icon>

export const Normal: Story = {
    render: () => <Icon Svg={TestIcon}/>
}

export const Inverted: Story = {
    render: () => <Icon Svg={TestIcon} inverted/>
}
