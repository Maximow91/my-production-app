
import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from './VStack'

const meta: Meta<typeof VStack> = {
    title: 'shared/VStack',
    component: VStack
}

export default meta
  type Story = StoryObj<typeof VStack>

export const Normal: Story = {
    render: () => (
        <VStack >
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </VStack>
    )
}

export const NormalGap4: Story = {
    render: () => (
        <VStack gap='4'>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </VStack>
    )
}

export const NormalGap8: Story = {
    render: () => (
        <VStack gap='8'>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </VStack>
    )
}

export const NormalGap16: Story = {
    render: () => (
        <VStack gap='16'>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </VStack>
    )
}

export const NormalGap32: Story = {
    render: () => (
        <VStack gap='32'>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </VStack>
    )
}
