
import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

import { EditableProfileCardHeader } from './EditableProfileCardHeader'

const meta: Meta<typeof EditableProfileCardHeader> = {
    title: 'features/EditableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader
}

export default meta
  type Story = StoryObj<typeof EditableProfileCardHeader>

export const Normal: Story = {
    render: () => <EditableProfileCardHeader />
}

export const Editting: Story = {
    render: () => <EditableProfileCardHeader />
}

Editting.decorators = [StoreDecorator({
    profile: {
        readonly: false
    }
})]
