import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from '../Stack'
import { Drawer } from './Drawer'

const meta: Meta<typeof Drawer> = {
    title: 'shared/Drawer',
    component: Drawer
}

export default meta
  type Story = StoryObj<typeof Drawer>

export const Normal: Story = {
    render: () => <Drawer isOpen={true}>
        <VStack gap='16'>
            <div>drawer content</div>
            <div>drawer content</div>
            <div>drawer content</div>
            <div>drawer content</div>
            <div>drawer content</div>
        </VStack>
    </Drawer>
}
