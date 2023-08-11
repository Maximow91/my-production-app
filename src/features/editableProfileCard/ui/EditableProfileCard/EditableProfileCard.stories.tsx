
import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

import { EditableProfileCard } from './EditableProfileCard'

const data = {
    id: '1',
    readonly: true,
    isLoading: false,
    form: {
        id: '1',
        firstname: 'Test',
        lastname: 'TestLast',
        age: 3,
        city: 'Moscow',
        username: 'test'
    }
}

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/EditableProfileCard/EditableProfileCard',
    component: EditableProfileCard
}

export default meta
  type Story = StoryObj<typeof EditableProfileCard>

export const Normal: Story = {
    render: () => <EditableProfileCard />
}

export const Loading: Story = {
    render: () => <EditableProfileCard />
}

export const Editting: Story = {
    render: () => <EditableProfileCard />
}

Normal.decorators = [StoreDecorator({
    profile: data
})]

Loading.decorators = [StoreDecorator({
    profile: {
        readonly: true,
        isLoading: true
    }
})]

Editting.decorators = [StoreDecorator({
    profile: { ...data, readonly: false }
})]
