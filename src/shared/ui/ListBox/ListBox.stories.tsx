import type { Meta, StoryObj } from '@storybook/react'
import { ListBox } from './ListBox'

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox
}

export default meta
  type Story = StoryObj<typeof ListBox>

export const Normal: Story = {
    render: () => <ListBox
        defaultValue={undefined}
        onChange={(value: string) => { console.log(value) }}
        value={'press'}
        items={[
            { value: '1', content: '123efefefefefe' },
            { value: '2', content: '1234eefefef' },
            { value: '3', content: '1235ef', disabled: true },
            { value: '4', content: '12' }
        ]}
    />
}

export const NormalTopLeft: Story = {
    render: () => <ListBox
        direction='top left'
        defaultValue={undefined}
        onChange={(value: string) => { console.log(value) }}
        value={'press'}
        items={[
            { value: '1', content: '123efefefefefe' },
            { value: '2', content: '1234eefefef' },
            { value: '3', content: '1235ef', disabled: true },
            { value: '4', content: '12' }
        ]}
    />
}

export const NormalTopRight: Story = {
    render: () => <ListBox
        direction='top right'
        defaultValue={undefined}
        onChange={(value: string) => { console.log(value) }}
        value={'press'}
        items={[
            { value: '1', content: '123efefefefefe' },
            { value: '2', content: '1234eefefef' },
            { value: '3', content: '1235ef', disabled: true },
            { value: '4', content: '12' }
        ]}
    />
}

export const NormalBottomRight: Story = {
    render: () => <ListBox
        direction='bottom right'
        defaultValue={undefined}
        onChange={(value: string) => { console.log(value) }}
        value={'press'}
        items={[
            { value: '1', content: '123efefefefefe' },
            { value: '2', content: '1234eefefef' },
            { value: '3', content: '1235ef', disabled: true },
            { value: '4', content: '12' }
        ]}
    />
}

export const NormalBottomLeft: Story = {
    render: () => <ListBox
        direction='bottom left'
        defaultValue={undefined}
        onChange={(value: string) => { console.log(value) }}
        value={'press'}
        items={[
            { value: '1', content: '123efefefefefe' },
            { value: '2', content: '1234eefefef' },
            { value: '3', content: '1235ef', disabled: true },
            { value: '4', content: '12' }
        ]}
    />
}
