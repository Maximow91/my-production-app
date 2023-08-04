import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from './Flex'

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex
}

export default meta
  type Story = StoryObj<typeof Flex>

export const Row: Story = {
    render: () => {
        return (
            <Flex direction='row' >
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </Flex>
        )
    }
}

export const RowGap4: Story = {
    render: () => {
        return (
            <Flex direction='row' gap='4' >
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </Flex>
        )
    }
}

export const RowGap8: Story = {
    render: () => {
        return (
            <Flex direction='row' gap='8' >
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </Flex>
        )
    }
}

export const RowGap16: Story = {
    render: () => {
        return (
            <Flex direction='row' gap='16' >
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </Flex>
        )
    }
}

export const RowGap32: Story = {
    render: () => {
        return (
            <Flex direction='row' gap='32' >
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </Flex>
        )
    }
}

export const Column: Story = {
    render: () => {
        return (
            <Flex direction='column' >
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </Flex>
        )
    }
}

export const ColumnGap4: Story = {
    render: () => {
        return (
            <Flex direction='column' gap='4' >
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </Flex>
        )
    }
}

export const ColumnGap8: Story = {
    render: () => {
        return (
            <Flex direction='column' gap='8' >
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </Flex>
        )
    }
}

export const ColumnGap16: Story = {
    render: () => {
        return (
            <Flex direction='column' gap='16' >
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </Flex>
        )
    }
}

export const ColumnGap32: Story = {
    render: () => {
        return (
            <Flex direction='column' gap='32' >
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </Flex>
        )
    }
}
