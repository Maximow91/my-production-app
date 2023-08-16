import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorators'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal
}

export default meta
  type Story = StoryObj<typeof Modal>

export const Primary: Story = {
    render: () => <Modal isOpen={true} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi tenetur eveniet odit porro! Velit accusamus neque, numquam magni animi fugit maiores ullam quis dolorum quisquam quas deleniti nobis. Iste?</ Modal>
}

export const Dark: Story = {
    render: () => <Modal isOpen={true} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi tenetur eveniet odit porro! Velit accusamus neque, numquam magni animi fugit maiores ullam quis dolorum quisquam quas deleniti nobis. Iste?</ Modal>
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
