import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorators'
import { Code } from './Code'

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code
}

const text = "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"

export default meta
  type Story = StoryObj<typeof Code>

export const Primary: Story = {
    render: () => <Code text={text} />
}

export const PrimaryDark: Story = {
    render: () => <Code text={text} />
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
