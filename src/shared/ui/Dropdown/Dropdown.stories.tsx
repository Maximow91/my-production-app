import type { Meta, StoryObj } from '@storybook/react'
import { CustomButton } from '../CustomButton'
import { Dropdown } from './Dropdown'

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Dropdown',
    component: Dropdown
}

export default meta
  type Story = StoryObj<typeof Dropdown>

export const Normal: Story = {
    render: () => <Dropdown trigger={<CustomButton>Open</CustomButton>} items={[
        {
            content: 'first'
        },
        {
            content: 'second'
        },
        {
            content: 'third'
        }
    ]} />
}

export const NormalTopLeft: Story = {
    render: () => <Dropdown
        direction='top left'
        trigger={<CustomButton>Open</CustomButton>}
        items={[
            {
                content: 'first'
            },
            {
                content: 'second'
            },
            {
                content: 'third'
            }
        ]} />
}

export const NormalTopRight: Story = {
    render: () => <Dropdown
        direction='top right'
        trigger={<CustomButton>Open</CustomButton>}
        items={[
            {
                content: 'first'
            },
            {
                content: 'second'
            },
            {
                content: 'third'
            }
        ]} />
}

export const NormalBottomLeft: Story = {
    render: () => <Dropdown
        direction='bottom left'
        trigger={<CustomButton>Open</CustomButton>}
        items={[
            {
                content: 'first'
            },
            {
                content: 'second'
            },
            {
                content: 'third'
            }
        ]} />
}

export const NormalBottomRight: Story = {
    render: () => <Dropdown
        direction='bottom right'
        trigger={<CustomButton>Open</CustomButton>}
        items={[
            {
                content: 'first'
            },
            {
                content: 'second'
            },
            {
                content: 'third'
            }
        ]} />
}
