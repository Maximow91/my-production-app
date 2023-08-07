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
        value={''}
        items={[
            { value: '1', content: '123' },
            { value: '2', content: '1234' },
            { value: '3', content: '1235', disabled: true },
            { value: '4', content: '12' }
        ]}
    />
}
