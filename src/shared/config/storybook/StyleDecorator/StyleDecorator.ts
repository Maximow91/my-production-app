import { type Decorator } from '@storybook/react'
// eslint-disable-next-line prod-app-plugin/layer-imports
import '@/app/styles/index.scss'

export const StyleDecorator: Decorator = (story) => story()
